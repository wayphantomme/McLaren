import React from "react";

export default function Page() {
  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Models />
      <Technology />
      <Performance />
      <CTA />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-xl/0 bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/mclaren-logo.svg"
              alt="McLaren Logo"
              className="w-48 h-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#models" className="hover:text-white transition">
              Models
            </a>
            <a href="#tech" className="hover:text-white transition">
              Technology
            </a>
            <a href="#performance" className="hover:text-white transition">
              Performance
            </a>
          </nav>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111418] px-4 py-2 text-sm hover:bg-white/10 transition"
          >
            <span className="h-2 w-2 rounded-full bg-[#FF8700] animate-pulse" />
            Book Test Drive
          </a>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative h-[100svh] flex items-end" id="hero">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/hero-mclaren.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight transition-all duration-700">
          The Art of Performance
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/70 transition-opacity duration-700">
          Precision-engineered supercars forged in carbon and aerodynamics. Feel
          the velocity of McLaren in every detail.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <a
            href="#models"
            className="rounded-xl bg-[#FF8700] px-6 py-3 text-black font-medium hover:brightness-95 active:brightness-90 transition"
          >
            Explore Models
          </a>
          <a
            href="#tech"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition"
          >
            Innovation
          </a>
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}

function ScrollCue() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60">
      <div className="text-xs tracking-widest uppercase">Scroll</div>
      <div className="mt-2 h-8 w-[2px] bg-gradient-to-b from-white/30 to-white/0 animate-pulse" />
    </div>
  );
}

function SectionHeader({ overline, title, desc }) {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-10">
      <div className="text-[#FF8700]/90 text-xs tracking-[0.28em] uppercase">
        {overline}
      </div>
      <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {desc && <p className="mt-4 max-w-2xl text-white/70">{desc}</p>}
    </div>
  );
}

function About() {
  const info = [
    {
      k: "Carbon DNA",
      t: "Monocoque chassis",
      d: "Ultra-light rigidity for razor sharp handling and safety.",
    },
    {
      k: "Aero Mastery",
      t: "Air as a tool",
      d: "Active aerodynamics shape stability, cooling and grip.",
    },
    {
      k: "Power Delivery",
      t: "Twin-turbo precision",
      d: "Immediate torque and throttle response engineered for feel.",
    },
  ];
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-gradient-to-b from-[#0A0A0A] to-[#111418]"
    >
      <SectionHeader
        overline="Philosophy"
        title="Driven by Innovation"
        desc="Every McLaren is built on a singular idea: reduce weight, increase downforce, and optimise power delivery."
      />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {info.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <div className="text-[#FF8700] text-sm tracking-widest">
              {item.k}
            </div>
            <div className="mt-2 text-xl font-medium">{item.t}</div>
            <p className="mt-2 text-white/70">{item.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Models() {
  const cards = [
    {
      title: "720S Coupe",
      img: "/model-720s.jpg",
      specs: ["0–100 km/h 2.8s", "710 HP", "1,283 kg"],
    },
    {
      title: "765LT",
      img: "/model-765lt.jpg",
      specs: ["0–100 km/h 2.7s", "755 HP", "Track-focused"],
    },
    {
      title: "Senna",
      img: "/model-senna.jpg",
      specs: ["0–100 km/h 2.8s", "800 HP", "Extreme"],
    },
  ];
  return (
    <section id="models" className="py-24 md:py-32 bg-[#0A0A0A]">
      <SectionHeader
        overline="Models"
        title="Signature Lineup"
        desc="A curated selection of icons — engineered for the road, born on the track."
      />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <article
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 hover:scale-[1.02] transition-transform"
          >
            <div className="absolute inset-0">
              <img
                src={c.img}
                alt={c.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>
            <div className="relative z-10 p-6 pt-48">
              <h3 className="text-2xl font-semibold">{c.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-3 text-sm text-white/80">
                {c.specs.map((s, j) => (
                  <li
                    key={j}
                    className="rounded-full border border-white/15 bg-black/30 px-3 py-1"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <a href="#cta" className="text-[#FF8700] hover:brightness-110">
                  Book a Test Drive →
                </a>
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
                  View Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Technology() {
  const items = [
    {
      title: "Aerodynamics",
      img: "/tech-aero.jpg",
      desc: "Airflow sculpted for downforce, stability and cooling.",
    },
    {
      title: "Carbon Lightweight",
      img: "/tech-carbon.jpg",
      desc: "Monocoque rigidity with extreme weight reduction.",
    },
    {
      title: "Powertrain",
      img: "/tech-power.jpg",
      desc: "Twin‑turbo delivery tuned for instantaneous response.",
    },
  ];
  return (
    <section
      id="tech"
      className="py-24 md:py-32 bg-gradient-to-b from-[#0A0A0A] to-[#111418]"
    >
      <SectionHeader overline="Technology" title="Innovation in Every Gram" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <div className="h-48 relative">
              <img
                src={it.img}
                alt={it.title}
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-medium">{it.title}</h4>
              <p className="mt-2 text-white/70">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Performance() {
  const stats = [
    { k: "0–100 km/h", v: "2.8 s" },
    { k: "Power", v: "710 HP" },
    { k: "Weight", v: "1,283 kg" },
    { k: "Downforce", v: "+20%" },
  ];
  return (
    <section id="performance" className="py-24 md:py-32 bg-[#0A0A0A]">
      <SectionHeader
        overline="Performance"
        title="Numbers that Matter"
        desc="Figures engineered for feel — acceleration, balance, composure."
      />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 hover:bg-white/10 transition"
          >
            <div className="text-sm tracking-widest text-white/60">{s.k}</div>
            <div className="mt-2 text-3xl md:text-4xl font-semibold">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="cta"
      className="py-24 md:py-32 bg-gradient-to-b from-[#111418] to-black relative overflow-hidden"
    >
      <div className="absolute -inset-x-20 -top-40 h-64 blur-3xl opacity-40 bg-[radial-gradient(60%_60%_at_50%_50%,#FF8700,transparent)]" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Ready to Feel the Speed?
        </h3>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Schedule a test drive or speak to our specialist to craft your McLaren
          experience.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[#FF8700] px-6 py-3 text-black font-medium hover:brightness-95"
          >
            WhatsApp Specialist
          </a>
          <a
            href="#"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10"
          >
            Schedule Test Drive
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-[#FF8700]" />
          <span>Unofficial fan landing by Wayan Phantom Megaditha.</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/mclaren/"
            className="hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/mclaren"
            className="hover:text-white"
          >
            YouTube
          </a>
          <a href="https://x.com/McLarenAuto" className="hover:text-white">
            X (Twitter)
          </a>
        </div>
      </div>
    </footer>
  );
}
