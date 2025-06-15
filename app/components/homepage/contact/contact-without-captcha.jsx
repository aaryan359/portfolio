// @flow strict
"use client";

import { useState, useRef } from "react";
import LoadingSpinner from "../../Loadingspinner";
import ErrorMessage from "../../ErrorMessage";
import SuccessMessage from "../../SuccessMessage";
import emailjs from "emailjs-com";

export default function Contact() {
	const Divider = () => {
		return (
			<div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
		);
	};

	const [form, setForm] = useState(false);
	const inputEl = useRef(null);

	const subscribe = async (e) => {
		console.log(" button pressed");
		e.preventDefault();
		setForm({ state: "loading" });

		const res = await emailjs.send(
			"service_ajjd1h9",
		   "template_aijhali",
			 {
        user_email: inputEl.current.value,
        email: inputEl.current.value, 
      },
			"P4DqkwZ5Y0vQ7rTuw"
		).then(
			(result) => {
				inputEl.current.value = "";
				setForm({
					state: "success",
					message: "Email sent successfully!",
				});
			},
			(error) => {
				setForm({
					state: "error",
					message: "Failed to send email. Try again later.",
				});
			}
		);

	
		inputEl.current.value = "";

		setForm({
			state: "success",
			message: `Hooray! You're now on the list. Check your inbox or promotions for a mail.`,
		});
	};

	return (
	<div className="border border-blue-200 rounded p-4 md:p-6 my-4 w-full dark:border-gray-800 dark:bg-blue-opaque">
  <h5 className="text-lg font-bold text-gray-900 dark:text-gray-100">
    Want to hire me as a freelancer? Let's discuss.
  </h5>
  <p className="my-1 text-sm md:text-base text-gray-800 dark:text-gray-200">
    Drop your message and let's discuss about your project.
  </p>
  <a
    href="https://wa.me/919799819141?text=I want to work on a project with you"
    className="mt-3 px-4 text-center w-full font-bold h-10 bg-green-400 dark:bg-green-400 text-gray-900 py-2 dark:text-gray-900 rounded flex items-center justify-center"
    type="submit">
    Chat on WhatsApp
  </a>

  <Divider />
  
  <p className="my-1 text-sm md:text-base text-gray-800 dark:text-gray-200">
    Drop in your email ID and I will get back to you.
  </p>
  
  <form className="relative my-4" onSubmit={subscribe}>
    <input
      ref={inputEl}
      aria-label="Email for newsletter"
      placeholder="aaryanmeena96@gmail.com"
      type="email"
      autoComplete="email"
      required
      className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm md:text-base"
    />
    <button
      className="flex items-center justify-center absolute right-1 top-1 px-2 md:px-4 font-bold h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-20 md:w-28 text-sm md:text-base"
      type="submit">
      {form.state === "Sending" ? <LoadingSpinner /> : "Send"}
    </button>
  </form>

  {/* Message states remain same */}
  {form.state === "error" ? (
    <ErrorMessage>{form.message}</ErrorMessage>
  ) : form.state === "success" ? (
    <SuccessMessage>{form.message}</SuccessMessage>
  ) : null}
</div>
	);
}
