"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/Button";

type FormStatus = "idle" | "submitting" | "sent" | "error";

const fieldClass =
  "w-full rounded-lg border border-border-strong bg-background/60 px-4 py-2.5 text-base text-foreground placeholder:text-muted/60 transition-[border-color,box-shadow] duration-200 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/25";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      try {
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
      <div className="rounded-xl border border-border bg-surface/80 p-4 text-center shadow-[var(--shadow-soft)] sm:p-6 md:p-8 xl:p-10">
        <p className="text-lg font-medium tracking-tight sm:text-xl">Message could not be sent</p>
        <p className="mt-2 text-base text-muted">
          Connection failed. Please try again, or email me directly.
        </p>
        <div className="mt-6">
          <Button onClick={() => setStatus("idle")}>Try again</Button>
        </div>
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-border bg-surface/80 p-4 text-center shadow-[var(--shadow-soft)] sm:p-6 md:p-8 xl:p-10">
        <p className="text-lg font-medium tracking-tight sm:text-xl">Message sent</p>
        <p className="mt-2 text-base text-muted">
          Thank you for reaching out. I&apos;ll get back to you soon.
        </p>
        <div className="mt-6">
          <Button onClick={() => setStatus("idle")} variant="ghost">
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-surface/80 p-4 shadow-[var(--shadow-soft)] sm:p-6 md:p-8 xl:p-10"
      noValidate
    >
      <h2 className="mb-5 text-xl font-medium tracking-tight sm:mb-6 sm:text-2xl md:text-3xl">
        Send me a message
      </h2>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-muted">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-muted">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${fieldClass} resize-none rounded-xl`}
            placeholder="What would you like to talk about?"
          />
        </div>

        <div>
          <Button
            type="submit"
            variant="primary"
            disabled={status === "submitting"}
            className="w-full sm:w-auto"
          >
            {status === "submitting" ? "Sending…" : "Send message"}
          </Button>
        </div>
      </div>
    </form>
  );
}
