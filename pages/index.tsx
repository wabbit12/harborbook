import { useState } from "react";
import Footer from "../components/Footer";

export default function HomePage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(12);
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-slate-900">
      {/* Shell */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8 lg:pt-10">
        {/* Top nav */}
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 ring-1 ring-inset ring-emerald-300/80">
              <span className="text-sm font-semibold text-emerald-700">HB</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight text-slate-900">
                HarborBook
              </p>
              <p className="text-xs text-slate-500">
                Scheduling & payments for service businesses
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs font-medium text-slate-600 sm:flex">
            <a href="#features" className="transition hover:text-emerald-600">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-emerald-600">
              How it works
            </a>
            <a href="#pricing" className="transition hover:text-emerald-600">
              Pricing
            </a>
            <a href="#faq" className="transition hover:text-emerald-600">
              FAQ
            </a>
            <a
              href="#cta"
              className="rounded-full border border-teal-400/40 bg-teal-400/10 px-4 py-1.5 text-xs font-semibold text-teal-100 shadow-sm shadow-teal-500/20 transition hover:bg-teal-400/20 hover:text-white"
            >
              Get started
            </a>
          </nav>
        </header>

        {/* Hero */}
        <main className="mt-10 flex flex-1 flex-col gap-12 lg:mt-16 lg:flex-row lg:items-center lg:gap-16">
          {/* Hero text */}
          <section className="max-w-xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 shadow-sm shadow-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Booking, reminders, and payments — in one place.
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Turn missed calls into{" "}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent">
                booked appointments.
              </span>
            </h1>

            <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
              HarborBook gives service businesses a friendly, mobile‑first booking
              experience that feels great for clients to use. Capture leads,
              confirm appointments, send reminders, and get paid — without
              duct‑taping five tools together.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-300/60 transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-50"
              >
                Launch your booking page
              </a>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-xs font-semibold text-slate-700 shadow-sm shadow-emerald-50 transition hover:border-emerald-300 hover:bg-white"
              >
                Watch 2‑minute walkthrough
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-300">
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-full bg-emerald-400/15 text-[10px] font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/40 flex items-center justify-center">
                  ✓
                </span>
                <span>No code or plugins required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-full bg-emerald-400/15 text-[10px] font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/40 flex items-center justify-center">
                  ✓
                </span>
                <span>Works with Stripe & Google Calendar</span>
              </div>
            </div>
          </section>

          {/* Hero "product" mock */}
          <section className="relative w-full max-w-lg flex-1">
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.24),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(52,211,153,0.28),_transparent_55%)] opacity-80 blur-3xl" />

            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-[0_18px_80px_rgba(15,23,42,0.18)]">
              {/* Browser chrome */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                </div>
                <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] text-slate-500">
                  harborbook.co / booking
                </div>
                <span className="h-5 w-8 rounded-full bg-slate-100" />
              </div>

              {/* Booking UI */}
              <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
                {/* Service list */}
                <div className="space-y-3 rounded-2xl border border-slate-200 bg-sky-50/60 p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-900">
                        Choose a service
                      </p>
                      <p className="text-[11px] text-slate-500">
                        For: Harbor St. Barber Studio
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-300">
                      Online
                    </span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <button className="flex w-full items-center justify-between rounded-xl border border-emerald-200 bg-white px-3 py-2 text-left text-slate-900 transition hover:border-emerald-300 hover:bg-emerald-50">
                      <div>
                        <p className="font-medium">New client consult + cut</p>
                        <p className="text-[10px] text-slate-500">
                          60 minutes · with Avery
                        </p>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-800">
                        $85
                      </span>
                    </button>

                    <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-left text-slate-800 transition hover:border-emerald-200 hover:bg-emerald-50/60">
                      <div>
                        <p className="font-medium">Fade + beard lineup</p>
                        <p className="text-[10px] text-slate-500">
                          45 minutes · with any barber
                        </p>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-800">
                        $60
                      </span>
                    </button>
                  </div>
                </div>

                {/* Calendar / payment side */}
                <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-xs font-semibold text-slate-900">
                    Pick a time
                  </p>
                  <div className="grid grid-cols-7 gap-1.5 text-[10px]">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d) => (
                      <span
                        key={d}
                        className="text-center text-[10px] font-medium text-slate-400"
                      >
                        {d}
                      </span>
                    ))}
                    {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
                      <button
                        key={day}
                        type="button"
                        className={`h-7 rounded-full text-[10px] ${
                          day === selectedDay
                            ? "bg-emerald-500 text-white font-semibold"
                            : "bg-slate-50 text-slate-700 hover:bg-emerald-50"
                        }`}
                        onClick={() =>
                          setSelectedDay((current) =>
                            current === day ? null : day,
                          )
                        }
                      >
                        {day}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-emerald-50 px-3 py-2 text-[11px]">
                    <div>
                      <p className="font-medium text-slate-900">
                        {`Wed, May ${selectedDay ?? 12} · 4:30 PM`}
                      </p>
                      <p className="text-[10px] text-slate-600">
                        Local time · SMS reminders on
                      </p>
                    </div>
                    <button className="rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-semibold text-white shadow-sm shadow-emerald-400/60">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Sections */}
        <section
          id="features"
          className="mt-16 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-3"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
              Why HarborBook
            </p>
            <h2 className="text-lg font-semibold text-slate-900">
              Built for busy owners who live in their calendar.
            </h2>
            <p className="text-sm text-slate-600">
              Replace phone tag, DMs, and no‑shows with a single booking
              experience that looks great on any device and keeps your schedule
              full.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Frictionless booking
            </h3>
            <p className="text-sm text-slate-600">
              Let clients choose a service, provider, and time without ever
              leaving your site. HarborBook automatically handles availability
              and confirmation emails.
            </p>
            <ul className="mt-2 space-y-1.5 text-[11px] text-slate-500">
              <li>• Mobile‑optimized flows</li>
              <li>• Buffers, lead time, and blackout dates</li>
              <li>• Automatic confirmations & reminders</li>
            </ul>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Payments that just work
            </h3>
            <p className="text-sm text-slate-600">
              Capture cards on file, require deposits for high‑value services,
              and keep no‑shows from hurting your week.
            </p>
            <ul className="mt-2 space-y-1.5 text-[11px] text-slate-500">
              <li>• Stripe‑powered checkout</li>
              <li>• Deposits & no‑show fees</li>
              <li>• Simple payout reporting</li>
            </ul>
          </div>
        </section>

        <section
          id="how-it-works"
          className="mt-14 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-[1.1fr,0.9fr]"
        >
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
              In three steps
            </p>
            <h2 className="text-lg font-semibold text-slate-900">
              Go from idea to live booking page this afternoon.
            </h2>
            <ol className="space-y-4 text-sm text-slate-600">
              <li>
                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                  1
                </span>
                Connect your calendar and Stripe account so HarborBook can sync
                your real availability.
              </li>
              <li>
                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                  2
                </span>
                Define your services, durations, and optional add‑ons — all from
                a simple dashboard.
              </li>
              <li>
                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                  3
                </span>
                Drop your HarborBook link in your site, socials, or email
                signature and start accepting bookings.
              </li>
            </ol>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              For service businesses like
            </p>
            <div className="mt-2 grid grid-cols-2 gap-3 text-[11px]">
              <div className="rounded-xl bg-sky-50 p-3">
                <p className="font-semibold text-slate-900">Salons & barbers</p>
                <p className="mt-1 text-slate-600">
                  Cut the “Do you have anything this week?” DMs.
                </p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-3">
                <p className="font-semibold text-slate-900">
                  Clinics & wellness
                </p>
                <p className="mt-1 text-slate-600">
                  Intake, consent, and reminders in one flow.
                </p>
              </div>
              <div className="rounded-xl bg-amber-50 p-3">
                <p className="font-semibold text-slate-900">
                  Coaching & consulting
                </p>
                <p className="mt-1 text-slate-600">
                  Package sessions and collect payment up front.
                </p>
              </div>
              <div className="rounded-xl bg-rose-50 p-3">
                <p className="font-semibold text-slate-900">Home services</p>
                <p className="mt-1 text-slate-600">
                  Quotes, dispatch windows, and confirmations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="mt-14 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-[1.1fr,0.9fr]"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
              Simple pricing
            </p>
            <h2 className="text-lg font-semibold text-slate-900">
              Start free, grow as you book out.
            </h2>
            <p className="text-sm text-slate-600">
              HarborBook is built to pay for itself quickly by reducing
              no‑shows and making every lead feel taken care of.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-sky-50 p-5 shadow-[0_16px_50px_rgba(16,185,129,0.25)]">
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Launch plan
                </p>
                <p className="mt-1 text-[13px] text-slate-800">
                  Everything you need for a single location.
                </p>
              </div>
              <p className="text-right text-xs text-emerald-800">
                14‑day free trial
                <br />
                No credit card required
              </p>
            </div>

            <div className="flex items-end gap-1">
              <span className="text-3xl font-semibold text-slate-900">$39</span>
              <span className="pb-1 text-xs text-slate-600">per month</span>
            </div>

            <ul className="space-y-2 text-[11px] text-slate-800">
              <li>✓ Unlimited bookings & clients</li>
              <li>✓ SMS and email reminders</li>
              <li>✓ Stripe payments with saved cards</li>
              <li>✓ 1 booking page + embedded widget</li>
            </ul>

            <a
              id="cta"
              href="#"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-400/60 transition hover:bg-emerald-400"
            >
              Start free trial
            </a>
          </div>
        </section>

        <section
          id="faq"
          className="mt-14 grid gap-8 border-t border-slate-200 pt-10 lg:grid-cols-2"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600">
              FAQ
            </p>
            <h2 className="text-lg font-semibold text-slate-900">
              Answers for owners who are short on time.
            </h2>
          </div>
          <div className="space-y-4 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">
                Can I embed HarborBook into my existing site?
              </p>
              <p className="mt-1 text-slate-600">
                Yes. Every account comes with a hosted booking page plus a
                simple embed you can drop into any site builder or custom site.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">
                Do my clients need to download an app?
              </p>
              <p className="mt-1 text-slate-600">
                No. HarborBook is fully web‑based and designed for mobile
                browsers, so your clients just tap a link and book.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">
                What happens if I cancel?
              </p>
              <p className="mt-1 text-slate-600">
                You can export your client and appointment data any time. We
                never lock you in.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

