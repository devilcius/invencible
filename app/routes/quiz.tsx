import React from "react";

const ARCH_TYPES = {
  ARQ: {
    title: "Arqueólogo del Ritmo",
    subtitle: "Cavas elegancia entre vinilos y rarezas con devoción",
    blurb:
      "Sabes que la melodía adecuada puede cambiar la densidad del aire. Encuentras joyas donde otros ven polvo. Tu religión: el momento justo.",
    pill: "crate‑digger",
  },
  PRO: {
    title: "Profeta del Error",
    subtitle: "El fallo feliz es tu instrumento de viento",
    blurb:
      "Te guía la intuición. Persigues el accidente bello, el corte inesperado, el puente que nadie vio venir. El caos, bien domado, es arte.",
    pill: "impro‑místico",
  },
  ALG: {
    title: "Algoritmo con Sentimientos",
    subtitle: "Playlist warrior en proceso de emancipación",
    blurb:
      "Aprecias el descubrimiento guiado, pero sabes cuándo salirte del carril. Estás a un par de sorpresas de la iluminación melómana.",
    pill: "data‑lover",
  },
};

// 10 preguntas. Cada opción suma a un arquetipo (ARQ/PRO/ALG)
const QUESTIONS = [
  {
    q: "Suena un tema que te encanta pero nadie baila. ¿Qué haces?",
    options: [
      { label: "Lo dejo correr: ante todo respeto al artista.", score: "ARQ" },
      {
        label: "Cruzo con otra canción improbable y creo el puente.",
        score: "PRO",
      },
      {
        label: "Cambio a un seguro de playlist, ¡que no decaiga la pista!",
        score: "ALG",
      },
    ],
  },
  {
    q: "¿Qué opinas de los *temazos pegadizos*?",
    options: [
      { label: "Uno por sesión es suficiente… si el resto es fino.", score: "ARQ" },
      { label: "Mejor desconstruirlos y construirlos de forma inesperada.", score: "PRO" },
      { label: "Son la columna vertebral del buen ambiente.", score: "ALG" },
    ],
  },
  {
    q: "El santo grial del DJ es…",
    options: [
      { label: "Una cara‑B que suena a clásico perdido.", score: "ARQ" },
      { label: "El cruce imposible que funciona.", score: "PRO" },
      { label: "Leer la sala y mantenerla arriba.", score: "ALG" },
    ],
  },
  {
    q: "Tu relación con el *timing*",
    options: [
      {
        label: "Esperar al compás perfecto vale más que mezclar.",
        score: "ARQ",
      },
      { label: "Si no existe el momento, lo invento.", score: "PRO" },
      { label: "Timing = BPM + sonrisa del público.", score: "ALG" },
    ],
  },
  {
    q: "Una persona te pide un hit que no va con el set.",
    options: [
      { label: "Le pongo un primo lejano que encaje.", score: "ARQ" },
      { label: "Lo escondo dentro de un mashup travieso.", score: "PRO" },
      { label: "Se lo doy cuando toque: la pista es de todos.", score: "ALG" },
    ],
  },
  {
    q: "Formato favorito:",
    options: [
      { label: "Vinilo gastado con historia.", score: "ARQ" },
      { label: "Lo que suene raro hoy: cinta, rip, directo…", score: "PRO" },
      { label: "Digital bien masterizado y ordenado.", score: "ALG" },
    ],
  },
  {
    q: "¿Qué te conmueve más de una canción?",
    options: [
      { label: "Ese acorde inesperado que no ves venir.", score: "ARQ" },
      { label: "El error humano que la vuelve única.", score: "PRO" },
      { label: "El estribillo que une a desconocidos.", score: "ALG" },
    ],
  },
  {
    q: "En una sesión ideal, ¿cuánto espacio hay para lo desconocido?",
    options: [
      { label: "La mitad del set debería sorprender.", score: "ARQ" },
      {
        label: "Todo el set debería arriesgar sin pedir permiso.",
        score: "PRO",
      },
      { label: "Un tercio: equilibrio entre placer y aventura.", score: "ALG" },
    ],
  },
  {
    q: "Si tu gusto fuese un lugar, sería…",
    options: [
      { label: "Una tienda pequeña con discos imposibles.", score: "ARQ" },
      { label: "Un cruce de calles a las 3 AM.", score: "PRO" },
      { label: "Un club donde todos se sienten en casa.", score: "ALG" },
    ],
  },
  {
    q: "Un lema imbencible para la cabina:",
    options: [
      { label: "Lo raro hoy, clásico mañana.", score: "ARQ" },
      { label: "El fallo con estilo es acierto.", score: "PRO" },
      { label: "Primero la pista, luego el ego.", score: "ALG" },
    ],
  },
];

function Progress({ current, total }) {
  const pct = Math.round(((current + 1) / total) * 100);
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-xs text-neutral-400">
        <span>
          Pregunta {current + 1} / {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-800">
        <div
          className="h-full bg-neutral-200 transition-[width]"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function QuestionCard({ qIndex, question, onAnswer }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-black/40 p-6 md:p-8">
      <h4 className="text-xl font-semibold text-neutral-100">{question.q}</h4>
      <div className="mt-5 grid gap-3">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onAnswer(opt.score)}
            className="group rounded-xl border border-neutral-700/70 bg-neutral-900/60 px-4 py-3 text-left text-neutral-200 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-700"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-600 text-xs text-neutral-400 group-hover:border-neutral-400">
                {String.fromCharCode(65 + i)}
              </span>
              <span>{opt.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ResultCard({ tallies, onReset }) {
  const sorted = Object.entries(tallies).sort((a, b) => b[1] - a[1]);
  const topKey = sorted[0][0];
  const winner = ARCH_TYPES[topKey];

  // Mensaje adicional si hubo empate
  const tie = sorted.length > 1 && sorted[0][1] === sorted[1][1];

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 md:p-8">
      <p className="text-xs uppercase tracking-widest text-neutral-400">
        Resultado
      </p>
      <h3 className="mt-2 text-3xl font-extrabold">{winner.title}</h3>
      <p className="mt-1 text-neutral-300">{winner.subtitle}</p>
      <span className="mt-3 inline-block rounded-full border border-neutral-700/70 bg-black/40 px-3 py-1 text-xs text-neutral-300">
        {winner.pill}
      </span>
      <p className="mt-4 text-neutral-300">{winner.blurb}</p>

      {tie && (
        <p className="mt-3 text-sm text-neutral-400">
          * Tu resultado está empatado: eso te convierte en una criatura híbrida
          perfectamente bailable.
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        {Object.entries(tallies).map(([k, v]) => (
          <span
            key={k}
            className="rounded-full border border-neutral-800 bg-black/40 px-3 py-1 text-xs text-neutral-300"
          >
            {ARCH_TYPES[k].title}: {v}
          </span>
        ))}
      </div>

      <button
        onClick={onReset}
        className="mt-6 rounded-xl border border-neutral-700/70 bg-black/50 px-4 py-2 text-sm text-neutral-200 hover:bg-black/70"
      >
        Rehacer el test
      </button>
    </div>
  );
}

export function ImbencibleQuiz() {
  const total = QUESTIONS.length;
  const [step, setStep] = React.useState(0);
  const [tallies, setTallies] = React.useState({ ARQ: 0, PRO: 0, ALG: 0 });

  const handleAnswer = (scoreKey) => {
    setTallies((t) => ({ ...t, [scoreKey]: t[scoreKey] + 1 }));
    setStep((s) => s + 1);
  };

  const reset = () => {
    setStep(0);
    setTallies({ ARQ: 0, PRO: 0, ALG: 0 });
  };

  const isFinished = step >= total;

  return (
    <section id="quiz" className="mx-auto max-w-5xl px-4 pb-24">
      <div className="mb-6 flex flex-col gap-2">
        <h2 className="text-2xl font-extrabold tracking-tight">
          ¿Qué tipo de pincha eres?
        </h2>
        {!isFinished && <Progress current={step} total={total} />}
      </div>

      {!isFinished ? (
        <QuestionCard
          qIndex={step}
          question={QUESTIONS[step]}
          onAnswer={handleAnswer}
        />
      ) : (
        <ResultCard tallies={tallies} onReset={reset} />
      )}

      {/* Nota de estilo, coherente con el personaje */}
      <p className="mt-6 text-sm text-neutral-500">
        * No es ciencia, es gusto con método. Si no te convence el resultado,
        siempre puedes bailar.
      </p>
    </section>
  );
}
