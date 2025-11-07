import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

// Links (fonts + favicon)
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "icon", href: "/favicon.ico" },
];

// Default meta (root-level). Route pages can override with their own `export const meta = () => [...]`
export const meta: Route.MetaFunction = () => [
  { title: "DJ Imbencible — Que el algoritmo se rinda" },
  {
    name: "description",
    content:
      "DJ Imbencible: mitad iluminado, mitad profeta del error. El buen gusto no ha muerto: solo ha estado bailando en lugares extraños.",
  },

  // Open Graph
  { property: "og:type", content: "website" },
  { property: "og:title", content: "DJ Imbencible — Que el algoritmo se rinda" },
  {
    property: "og:description",
    content:
      "Power pop, indie rock, northern soul, new wave y otros hallazgos improbables. Pincha lo que otros olvidaron.",
  },
  { property: "og:image", content: "https://imbencible.com/imbencible-dj.jpg" },

  // Twitter
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "DJ Imbencible — Que el algoritmo se rinda" },
  {
    name: "twitter:description",
    content:
      "Mitad iluminado, mitad profeta del error. El buen gusto sigue vivo: solo cambió de BPM.",
  },
  { name: "twitter:image", content: "https://imbencible.com/imbencible-dj.jpg" },

  // Extras
  { name: "author", content: "DJ Imbencible (presuntamente humano)" },
  {
    name: "keywords",
    content:
      "DJ Imbencible, power pop, indie rock, northern soul, new wave, shoegaze, garage rock revival, C86, twee pop, buen gusto, ironía musical",
  },
];


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-neutral-950 text-neutral-100">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
