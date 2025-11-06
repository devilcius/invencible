import React from "react";

function Carousel({ covers }) {
  const [index, setIndex] = React.useState(0);
  const total = covers.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const current = covers[index];

  return (
    <div className="relative">
      {/* Image container with fixed height and transparent background */}
      <div className="flex h-[60vh] items-center justify-center bg-transparent">
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-full w-auto object-contain transition-opacity duration-500"
          draggable={false}
        />
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-neutral-700/70 bg-black/50 px-3 py-2 text-neutral-200 backdrop-blur hover:bg-black/70"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-neutral-700/70 bg-black/50 px-3 py-2 text-neutral-200 backdrop-blur hover:bg-black/70"
      >
        ›
      </button>

      {/* Caption + controls */}
      <div className="flex flex-col items-start gap-3 p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <h6 className="mt-1 text-lg font-semibold text-neutral-100">
            {current.title}
          </h6>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {covers.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir a portada ${i + 1}`}
                className={[
                  "h-2.5 w-2.5 rounded-full border border-neutral-600 transition-colors",
                  i === index
                    ? "bg-neutral-200"
                    : "bg-neutral-800 hover:bg-neutral-700",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ImbencibleLanding() {
  // ==== EVENT CONFIG (edit me) =============================================
  const EVENT = {
    title: "DJ Imbencible — Talleres Palermo",
    dateHuman: "Sábado, 15 de noviembre · 22:00",
    dateISO: "2025-11-15T22:00:00+01:00",
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

  const COVERS = [
    {
      src: "/imbencible_london-calling.jpeg",
      title: "The Clash — London Calling (1979)",
      alt: "Portada de London Calling de The Clash",
    },
    {
      src: "/imbencible_milo.jpg",
      title: "Descendents — Milo Goes to College (1982)",
      alt: "Portada de Milo Goes to College de Descendents",
    },
    {
      src: "/imbencible_velvet.jpg",
      title: "The Velvet Underground & Nico (1967)",
      alt: "Portada de The Velvet Underground & Nico",
    },
  ];

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
                “Mitad iluminado, mitad profeta del error"
              </p>
              <p className="mt-2 text-sm text-neutral-400">
                Cree en un único dogma: todo tema, si suena en el momento justo,
                es verdad.
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

      {/* COVERS CAROUSEL */}
      <section id="covers" className="mx-auto max-w-5xl px-4 pb-20">
        <div className="rounded-2xl border border-neutral-800 bg-black/40 overflow-hidden shadow-xl">
          <div className="p-6 md:p-8 flex items-center justify-between">
            <h5 className="text-2xl font-extrabold tracking-tight">
              Clásicos en rotación
            </h5>
            {/* opcional: contador */}
            <span className="text-sm text-neutral-400">
              {/* se actualizará vía state más abajo */}
            </span>
          </div>

          <Carousel covers={COVERS} />
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
              q: "“Por fin alguien que no cedió a la tentación de poner [censurado].”",
              a: "— Camarero agradecido",
            },
            {
              q: "“Metió twee punk en una pista y nadie pidió la hoja de reclamaciones.”",
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
