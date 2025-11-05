import React from "react";

// DJ Imbencible — Minimal, punchy landing for a one‑off session
// - Drop into any React app (Vite/CRA/Next/Remix). Works great on Cloudflare Pages.
// - Tailwind classes used for quick styling (optional). If you do not use Tailwind, replace classes with your CSS.
// - Replace placeholders in EVENT block below.
// - Optional: wire the CTA to Instagram, a Mailto, or a Workers KV RSVP endpoint later.

export default function ImbencibleLanding() {
  // ==== EVENT CONFIG (edit me) =============================================
  const EVENT = {
    title: "DJ Imbencible — Talleres Palermo",
    dateHuman: "Sábado, 15 de noviembre · 22:30",
    dateISO: "2025-11-15T22:30:00+01:00",
    venue: "Talleres Palermo (Las Palmas)",
    address: "Las Palmas",
    heroAlt: "DJ Imbencible empujando un carrito en el supermercado (B/N)",
    heroUrl: "/imbencible-dj.jpg",
    posterUrl: "/imbencible_milo.jpg",
  };

  const GENRES = [
    "Power pop",
    "Indie rock",
    "Shoegaze",
    "Northern soul",
    "New wave",
    "Post‑punk",
    "Jangle pop",
    "Garage rock revival",
    "C86 & twee pop",
    "Neo‑psychedelia",
    "Art pop",
    "Alt‑country",
    "British Invasion",
  ];

  const TAGLINE_PRIMARY =
    "Se le ha visto circular por Canillejas con un carrito lleno de hits improbables.";
  const TAGLINE_SECONDARY =
    "Pincha lo que otros olvidaron, mezcla lo que pocos se atrevieron y despacha como si el algoritmo no existiera.";

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-800">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={EVENT.heroUrl}
          alt={EVENT.heroAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 md:py-28">
          <div className="inline-flex items-center gap-3 rounded-full border border-neutral-700/70 bg-black/40 px-4 py-2 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs tracking-wider uppercase text-neutral-300">
              Próxima sesión
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            DJ Imbencible
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-neutral-300 md:text-xl">
            {TAGLINE_PRIMARY}
          </p>
          <p className="mt-1 max-w-3xl text-sm text-neutral-400 md:text-base">
            {TAGLINE_SECONDARY}
          </p>

          {/* EVENT CARD */}
          <div className="mt-8 grid gap-4 md:grid-cols-[1.2fr,0.8fr]">
            {/* Pull-quote */}
            <blockquote className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-neutral-300">
              <p className="text-lg italic">
                “Mitad Sócrates, mitad profeta del error.”
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Cree en una sola religión: que todo tema, si suena en el momento
                justo, es verdad.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* EVENT INFO */}
      <div className="rounded-2xl border border-neutral-800 bg-black/50 p-5">
        <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-300">
          <span className="rounded-full bg-neutral-900 px-3 py-1 font-medium">
            {EVENT.dateHuman}
          </span>
          <span className="rounded-full bg-neutral-900 px-3 py-1">
            {EVENT.venue}
          </span>
        </div>

        {/* Genres chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {GENRES.map((g) => (
            <span
              key={g}
              className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-300"
            >
              {g}
            </span>
          ))}
        </div>
      </div>

      {/* POSTER SECTION */}
      <section id="poster" className="mx-auto max-w-5xl px-4 pb-20">
        <div className="rounded-2xl border border-neutral-800 bg-black/40 overflow-hidden shadow-xl">
          <img
            src={EVENT.posterUrl}
            alt="Cartel DJ Imbencible — Goes to Talleres Palermo"
            className="w-full object-contain bg-white"
          />

          <div className="p-6 md:p-8">
            <h5 className="text-2xl font-extrabold tracking-tight">
              El cartel que no pedías, pero necesitabas
            </h5>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={EVENT.posterUrl}
                download
                className="rounded-xl bg-white px-4 py-2 font-semibold text-black shadow hover:translate-y-0.5 hover:shadow-lg active:translate-y-[1px]"
              >
                Descargar póster
              </a>
              <a
                href="#opiniones"
                className="rounded-xl border border-neutral-700 px-4 py-2 text-neutral-200 hover:bg-neutral-900"
              >
                Opiniones
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS ABSURDOS */}
      <section id="opiniones" className="mx-auto max-w-5xl px-4 pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              q: "“No sé qué está poniendo, pero mi pie no puede parar.”",
              a: "— Cliente anónimo de elegante calzado",
            },
            {
              q: "“Me recomendó canciones que aún no existen.”",
              a: "— Un algoritmo en paro",
            },
            {
              q: "“Por fin alguien que no cedió a la tentación de poner Despacito.”",
              a: "— Camarero agradecido",
            },
            {
              q: "“Metió C86 en una pista y nadie pidió la hoja de reclamaciones.”",
              a: "— Melómano incrédulo",
            },
            {
              q: "“Dice que es profeta del error. Pues tampoco falla tanto.”",
              a: "— Persona de bien",
            },
            { q: "“Bailé con dignidad. Creo.”", a: "— Testigo poco fiable" },
          ].map((t) => (
            <blockquote
              key={t.q}
              className="rounded-2xl border border-neutral-800 bg-black/40 p-5 text-neutral-300"
            >
              <p className="text-base">{t.q}</p>
              <p className="mt-2 text-sm text-neutral-500">{t.a}</p>
            </blockquote>
          ))}
        </div>
      </section>
      <footer className="border-t border-neutral-900/60 bg-black/30">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} DJ Imbencible — Talleres Palermo, 15 de
            noviembre.
          </p>
        </div>
      </footer>
    </main>
  );
}
