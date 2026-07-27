import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
const logo = { url: "/images/logo.jpg" };
const lawn = { url: "/images/land.jpg" };
const sodInstall = { url: "/images/landback.jpg" };
const mulchGarden = { url: "/images/landhome.jpg" };
const mulchCommercial = { url: "/images/landback2.jpg" };
const rockCurbing = { url: "/images/landrock.jpg" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Darren's Lawn and Landscape | West Edmonton" },
      {
        name: "description",
        content:
          "Professional lawn care and landscaping in West Edmonton. Mulch, sod, decorative rock, and lawn maintenance.",
      },
      { property: "og:title", content: "Darren's Lawn and Landscape" },
      {
        property: "og:description",
        content:
          "Lawn care and landscaping services in West Edmonton — mulch, sod, rock, and maintenance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const gallery = [
  { src: sodInstall.url, caption: "Established lawn after install" },
  { src: lawn.url, caption: "Commercial mulch & bed shaping" },
  { src: mulchGarden.url, caption: "Garden bed mulch refresh" },
  { src: mulchCommercial.url, caption: "Fresh sod installation in progress" },
  { src: rockCurbing.url, caption: "Decorative rock with curbing" },
];

const services = [
  {
    title: "Mulch Installation & Refreshes",
    body: "Refresh your garden beds with premium mulch. New installations and top-ups to improve curb appeal, retain moisture, and reduce weed growth.",
  },
  {
    title: "Sod Installation",
    body: "Transform your lawn with professionally installed sod. We handle site prep, grading, and installation for a healthy lawn from day one.",
  },
  {
    title: "Rock Installation",
    body: "A clean, low-maintenance finish for your landscape. Perfect for garden beds, side yards, and areas where durability matters.",
  },
  {
    title: "Lawn Maintenance",
    body: "Mowing, trimming, edging, and cleanup all season. Reliable service with attention to every detail.",
  },
  {
    title: "Snow Removal",
    body: "Stay safe all winter with dependable snow removal services. We clear driveways, sidewalks, and walkways promptly after snowfall to help keep your property accessible and safe throughout the season.",
  },
];

function Index() {
  const [i, setI] = useState(0);
  const prev = () => setI((n) => (n - 1 + gallery.length) % gallery.length);
  const next = () => setI((n) => (n + 1) % gallery.length);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Darren's Lawn and Landscape logo" className="h-12 w-12 object-contain" />
            <span className="font-semibold text-stone-900">Darren's Lawn and Landscape</span>
          </div>
          <nav className="hidden gap-6 text-sm text-stone-600 sm:flex">
            <a href="#services" className="hover:text-stone-900">Services</a>
            <a href="#gallery" className="hover:text-stone-900">Gallery</a>
            <a href="#about" className="hover:text-stone-900">About</a>
            <a href="#contact" className="hover:text-stone-900">Contact</a>
          </nav>
        </div>
      </header>

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-10 pb-14 text-center">
          <img
            src={logo.url}
            alt="Darren's Lawn and Landscape"
            className="h-64 w-64 object-contain drop-shadow-sm sm:h-80 sm:w-80 md:h-96 md:w-96"
          />
          <h1 className="mt-6 text-3xl font-bold leading-tight text-stone-900 sm:text-4xl">
            Lawn care and landscaping in West Edmonton
          </h1>
          <p className="mt-4 max-w-2xl text-stone-600">
            Mulch, sod, decorative rock, and routine lawn maintenance. Honest work,
            done right, at a fair price.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="rounded-md bg-stone-800 px-4 py-2 text-sm font-medium text-white hover:bg-stone-900"
            >
              Get a quote
            </a>
            <a
              href="#services"
              className="rounded-md border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 hover:bg-stone-100"
            >
              Our services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-2xl font-bold text-stone-900">What we do</h2>
        <p className="mt-2 max-w-2xl text-stone-600">
          Professional lawn care and landscaping services throughout West Edmonton.
          Whether you need fresh mulch, new sod, decorative rock, or routine lawn
          maintenance, we're committed to quality workmanship and reliable service.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border border-stone-200 bg-white p-5">
              <h3 className="font-semibold text-stone-900">{s.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="border-y border-stone-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-stone-900">Recent work</h2>
              <p className="mt-2 text-stone-600">Swipe through some of our recent projects.</p>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button
                onClick={prev}
                className="rounded-md border border-stone-300 px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-100"
                aria-label="Previous photo"
              >
                ←
              </button>
              <button
                onClick={next}
                className="rounded-md border border-stone-300 px-3 py-1.5 text-sm text-stone-700 hover:bg-stone-100"
                aria-label="Next photo"
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
              {gallery.map((g, idx) => (
                <img
                  key={g.src}
                  src={g.src}
                  alt={g.caption}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    idx === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center justify-between border-t border-stone-200 bg-white px-4 py-3 text-sm text-stone-600">
              <span>{gallery[i].caption}</span>
              <span className="tabular-nums">
                {i + 1} / {gallery.length}
              </span>
            </div>
          </div>

          <div className="mt-4 flex justify-center gap-2 sm:hidden">
            <button
              onClick={prev}
              className="rounded-md border border-stone-300 px-4 py-1.5 text-sm text-stone-700"
            >
              ← Prev
            </button>
            <button
              onClick={next}
              className="rounded-md border border-stone-300 px-4 py-1.5 text-sm text-stone-700"
            >
              Next →
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to photo ${idx + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  idx === i ? "bg-stone-800" : "bg-stone-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-2xl font-bold text-stone-900">About us</h2>
        <p className="mt-4 max-w-3xl text-stone-600">
          Darren's Lawn and Landscape is a locally owned landscaping company dedicated
          to helping homeowners improve their outdoor spaces. We take pride in honest
          communication, attention to detail, and leaving every property looking its
          best.
        </p>
        <p className="mt-3 max-w-3xl text-sm text-stone-500">
          Currently servicing West Edmonton as of 2026.
        </p>
      </section>

      <section id="contact" className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-stone-900">Get in touch</h2>
          <p className="mt-2 max-w-2xl text-stone-600">
            Reach out for a free estimate on your next project.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-stone-200 p-5">
              <div className="text-xs uppercase tracking-wide text-stone-500">Service area</div>
              <div className="mt-1 font-medium text-stone-900">West Edmonton, AB</div>
            </div>
            <div className="rounded-lg border border-stone-200 p-5">
              <div className="text-xs uppercase tracking-wide text-stone-500">Instagram</div>
              <a
                href="https://instagram.com/darrenslandscape"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-block font-medium text-stone-900 hover:underline"
              >
                @darrenslandscape
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-stone-500">
          © {new Date().getFullYear()} Darren's Lawn and Landscape. West Edmonton, AB.
        </div>
      </footer>
    </div>
  );
}
