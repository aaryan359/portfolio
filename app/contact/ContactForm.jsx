"use client";

import { useState, useRef } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
	const inputRef = useRef(null);
	const [status, setStatus] = useState("idle"); // idle | loading | success | error

	async function submit(e) {
		e.preventDefault();
		const email = inputRef.current.value;
		if (!email) return;

		setStatus("loading");

		// optimistic UI
		setTimeout(() => setStatus("success"), 300);

		try {
			await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify({ email }),
			});
		} catch {
			setStatus("error");
		}
	}

	return (
		<form
			onSubmit={submit}
			className='
        relative rounded-2xl
        border border-white/10
        bg-black/40 backdrop-blur
        p-6 md:p-8
        transition-all duration-300
        focus-within:ring-1 focus-within:ring-white/30
      '>
			{/* subtle ambient glow */}
			<div className='pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-70' />

			<div className='relative z-10 space-y-5'>
				{/* HEADER */}
				<div>
					<h3 className='text-lg font-medium text-white'>Get in touch</h3>
					<p className='mt-1 text-sm text-white/50'>Drop your email — I’ll reply personally.</p>
				</div>

				{/* INPUT */}
				<div className='relative border-white border-1'>
					<label
						htmlFor='email'
						className='
              absolute left-3 top-2
              text-xs text-white/40
              transition-all
              peer-placeholder-shown:top-3.5
              peer-placeholder-shown:text-sm
              peer-placeholder-shown:text-white/30
            '>
						Email address
					</label>

					<input
						ref={inputRef}
						id='email'
						name='email'
						type='email'
						required
						placeholder='you@example.com'
						className='
                peer w-full
                rounded-md
                border border-cyan-400/30
                bg-black/20
                px-3 pb-2 pt-5
                text-sm text-white
                placeholder-transparent

                transition
                focus:outline-none
                focus:border-cyan-400
                focus:bg-black/40
              '
					/>
				</div>

				{/* BUTTON */}
				<button
					type='submit'
					disabled={status === "loading"}
					className='
            group inline-flex w-full items-center justify-center gap-2
            rounded-md
            bg-gradient-to-r from-purple-500 to-blue-500
            py-2.5 text-sm font-medium text-white
            transition-all duration-200
            hover:brightness-110
            disabled:opacity-60
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-white/40
          '>
					{status === "loading" ? (
						"Sending…"
					) : (
						<>
							Notify me
							<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-0.5' />
						</>
					)}
				</button>

				{/* STATUS MESSAGES */}
				{status === "success" && (
					<div className='flex items-center gap-2 text-sm text-green-400 animate-fade-in'>
						<CheckCircle size={16} />
						You’re on the list — check your inbox soon.
					</div>
				)}

				{status === "error" && (
					<div className='flex items-center gap-2 text-sm text-red-400'>
						<AlertCircle size={16} />
						Something went wrong. Try again.
					</div>
				)}

				{/* TRUST MICROCOPY */}
				<p className='text-xs text-white/40'>No spam. No newsletters. Just a reply.</p>
			</div>
		</form>
	);
}
