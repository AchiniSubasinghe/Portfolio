"use client";

import { type FormEvent } from "react";

export function LifeCard() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="flex flex-col gap-12 px-8 py-8 md:px-10">
      <section>
        <h2 className="text-3xl tracking-[-0.02em]">Alongside</h2>
        <div className="border-rule mt-4 border-t" />
      </section>

      <section>
        <h2 className="text-3xl tracking-[-0.02em]">Say hello</h2>
        <div className="border-rule mt-4 mb-6 border-t" />
        <form onSubmit={onSubmit} className="flex max-w-lg flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase">
              Name
            </span>
            <input
              required
              name="name"
              className="border-ink rounded-sm border bg-transparent px-3 py-2 outline-none"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase">
              Email
            </span>
            <input
              required
              type="email"
              name="email"
              className="border-ink rounded-sm border bg-transparent px-3 py-2 outline-none"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase">
              Message
            </span>
            <textarea
              required
              name="message"
              rows={5}
              className="border-ink resize-none rounded-sm border bg-transparent px-3 py-2 outline-none"
            />
          </label>
          <div>
            <button
              type="submit"
              className="bg-ink text-page rounded-sm px-5 py-2 text-sm"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
