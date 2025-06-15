"use client";
// @flow strict
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactWithCaptcha() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [captcha, setCaptcha] = useState(null);
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!captcha) {
      toast.error('Please complete the captcha!');
      return;
    };

    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      const res = await emailjs.send(serviceID, templateID, userInput, options);
      const teleRes = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, userInput);

      if (res.status === 200 || teleRes.status === 200) {
        toast.success('Message sent successfully!');
        setUserInput({
          name: '',
          email: '',
          message: '',
        });
        setCaptcha(null);
      };
    } catch (error) {
      toast.error(error?.text || error);
    };
  };

  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Want to hire me as a freelancer? Let's discuss.
      </h5>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Drop your message and let's discuss about your project.
      </p>
      <a
        href="https://wa.me/919587738861?text=I want to work on a project with you"
        className="mt-4 px-4 text-center w-full font-bold h-8 bg-green-400 dark:bg-green-400 text-gray-900 py-1 dark:text-gray-900 rounded"
        type="submit"
      >
        Chat on WhatsApp
      </a>

      <Divider />
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Drop in your email ID and I will get back to you.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="manu@gmail.com"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-28"
          type="submit"
        >
          {form.state === "Sending" ? <LoadingSpinner /> : "Send"}
        </button>
      </form>

      {form.state === "error" ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === "success" ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200"></p>
      )}
    </div>
  );
};

export default ContactWithCaptcha;