"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";

type FormStatus = "idle" | "submitting" | "sent" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    // Simulate submission
    setTimeout(() => {
      try {
        // Simulate random failure (~10% chance)
        if (Math.random() < 0.1) {
          throw new Error("Simulated send failure");
        }
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } catch {
        setStatus("error");
      }
    }, 1000);
  }

  if (status === "error") {
    return (
      <div className="border-2 border-white rounded-2xl p-6 md:p-8 text-center">
        <p className="text-2xl">Something went wrong</p>
        <p className="text-lg text-gray-400 mt-2">
          Please try again later.
        </p>
        <div className="mt-6">
          <Button onClick={() => setStatus("idle")}>Try again</Button>
        </div>
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div className="border-2 border-white rounded-2xl p-6 md:p-8 text-center">
        <p className="text-2xl">Message sent!</p>
        <p className="text-lg text-gray-400 mt-2">Thank you for reaching out. I&apos;ll get back to you soon.</p>
        <div className="mt-6">
          <Button onClick={() => setStatus("idle")}>Send another message</Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border-2 border-white rounded-2xl p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl mb-6">Send me a message</h2>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg">Name</label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-white rounded-full px-4 py-2 bg-transparent text-lg text-white placeholder-gray-500 focus:outline-none"
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-lg">Email</label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-white rounded-full px-4 py-2 bg-transparent text-lg text-white placeholder-gray-500 focus:outline-none"
            placeholder="your@email.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-lg">Message</label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 border-white rounded-2xl px-4 py-2 bg-transparent text-lg text-white placeholder-gray-500 focus:outline-none resize-none"
            placeholder="Your message..."
          />
        </div>

        <div>
          <Button type="submit" className={status === "submitting" ? "opacity-50" : ""}>
            {status === "submitting" ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </div>
    </form>
  );
}
