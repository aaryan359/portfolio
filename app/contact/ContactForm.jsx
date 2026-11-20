"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Freelance Project",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const subjects = [
    { label: "Freelance Project", value: "Freelance Project" },
    { label: "Full-time / Internship", value: "Full-time Role" },
    { label: "Research Collaboration", value: "Research Collaboration" },
    { label: "Just Saying Hi", value: "Just Saying Hi" }
  ];

  async function submit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    // Optimistic UI delay for feedback
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "Freelance Project", message: "" });
    }, 1200);

    try {
      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={submit}
      className="
        relative rounded-2xl
        border border-white/10
        bg-[#0a0815]/30 backdrop-blur-xl
        p-6 md:p-8
        transition-all duration-300
        hover:border-white/20
        focus-within:border-purple-500/50
        shadow-[0_20px_50px_rgba(0,0,0,0.5)]
      "
    >
      {/* subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-70" />

      <div className="relative z-10 space-y-6">
        {/* HEADER */}
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">Send a Message</h3>
          <p className="mt-1.5 text-sm text-white/50 leading-relaxed font-light">
            Got an idea, a project, or a position? Tell me about it.
          </p>
        </div>

        {/* INPUTS CONTAINER */}
        <div className="space-y-4">
          
          {/* NAME */}
          <div className="relative group">
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="
                w-full rounded-xl
                border border-white/10
                bg-black/20
                px-4 py-3.5
                text-sm text-white
                placeholder-white/30
                transition duration-300
                focus:outline-none
                focus:border-purple-500
                focus:bg-[#0a0815]/50
                focus:ring-1 focus:ring-purple-500/30
              "
            />
          </div>

          {/* EMAIL */}
          <div className="relative group">
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="
                w-full rounded-xl
                border border-white/10
                bg-black/20
                px-4 py-3.5
                text-sm text-white
                placeholder-white/30
                transition duration-300
                focus:outline-none
                focus:border-purple-500
                focus:bg-[#0a0815]/50
                focus:ring-1 focus:ring-purple-500/30
              "
            />
          </div>

          {/* SUBJECT SELECTOR BUTTONS */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-white/40 uppercase tracking-wider block mb-1">
              What is this regarding?
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {subjects.map((sub) => {
                const isActive = formData.subject === sub.value;
                return (
                  <button
                    key={sub.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, subject: sub.value })}
                    className={`
                      px-4 py-3 rounded-xl border text-xs md:text-sm font-semibold
                      transition-all duration-300 select-none text-left flex items-center justify-between
                      ${
                        isActive
                          ? "bg-purple-500/10 border-purple-500/60 text-purple-200 shadow-[0_4px_20px_rgba(168,85,247,0.15)]"
                          : "bg-white/[0.02] border-white/10 text-white/60 hover:bg-white/[0.05] hover:border-white/20 hover:text-white/95"
                      }
                    `}
                  >
                    <span>{sub.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* MESSAGE */}
          <div className="relative group">
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about the problem you're trying to solve..."
              className="
                w-full rounded-xl
                border border-white/10
                bg-black/20
                px-4 py-3.5
                text-sm text-white
                placeholder-white/30
                transition duration-300
                focus:outline-none
                focus:border-purple-500
                focus:bg-[#0a0815]/50
                focus:ring-1 focus:ring-purple-500/30
                resize-none
              "
            />
          </div>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="
            group inline-flex w-full items-center justify-center gap-2
            rounded-xl
            bg-gradient-to-r from-purple-500 to-blue-500
            py-3.5 text-sm font-semibold text-white
            transition-all duration-300
            hover:brightness-110 hover:-translate-y-[1px]
            hover:shadow-[0_8px_25px_rgba(168,85,247,0.3)]
            disabled:opacity-60 disabled:pointer-events-none
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-white/40
          "
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending message...
            </>
          ) : (
            <>
              Send message
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        {/* STATUS MESSAGES */}
        {status === "success" && (
          <div className="flex items-center gap-2.5 text-sm text-emerald-400 animate-fade-in border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 rounded-xl">
            <CheckCircle size={16} className="shrink-0" />
            Thank you! Your message was sent successfully.
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2.5 text-sm text-rose-400 border border-rose-500/20 bg-rose-500/5 px-4 py-3 rounded-xl">
            <AlertCircle size={16} className="shrink-0" />
            Something went wrong. Please try again.
          </div>
        )}
      </div>
    </form>
  );
}
