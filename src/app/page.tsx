import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Leaf,
  MapPin,
  Phone,
  ShoppingBasket,
} from "lucide-react";

const products = [
  { name: "Kysané zelí", detail: "Poctivě kvašené", icon: Leaf },
  { name: "Hlávkové zelí", detail: "Čerstvé ze statku", icon: Leaf },
  { name: "Modrý mák", detail: "Vypěstovaný s péčí", icon: ShoppingBasket },
  { name: "Dvouletý kmín", detail: "Voňavé české koření", icon: Leaf },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-emerald-950">
      <header className="border-b border-emerald-950/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#domu" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid size-10 place-items-center rounded-full bg-emerald-900 text-amber-100">
              <Leaf size={20} />
            </span>
            Statek Krátice
          </a>
          <nav className="hidden items-center gap-8 text-sm text-emerald-950/75 sm:flex">
            <a className="transition hover:text-amber-700" href="#produkty">Naše produkty</a>
            <a className="transition hover:text-amber-700" href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <section id="domu" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800" />
        <div className="absolute -right-24 -top-32 -z-10 size-[28rem] rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-16 -z-10 size-80 rounded-full border border-white/10" />
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-amber-100">
              <Leaf size={16} /> Rodinné hospodářství v srdci Šumavy
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-stone-50 sm:text-7xl">
              Statek <span className="text-amber-300">Krátice</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-emerald-50/80 sm:text-xl">
              Tradiční rodinné hospodaření, poctivé produkty a prodej ze dvora. S úctou k půdě a chutí, která připomíná domov.
            </p>
            <a href="#produkty" className="mt-9 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 font-medium text-emerald-950 transition hover:bg-amber-400">
              Poznejte naše produkty <ArrowRight size={18} />
            </a>
          </div>
          <div className="hidden justify-end lg:flex">
            <div className="grid size-72 place-items-center rounded-full border border-white/15 bg-white/5">
              <div className="grid size-56 place-items-center rounded-full border border-amber-300/40 bg-emerald-950/40 text-amber-200">
                <div className="text-center">
                  <Leaf className="mx-auto mb-3" size={54} strokeWidth={1.2} />
                  <span className="text-sm uppercase tracking-[0.3em]">Z našeho statku</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20" aria-labelledby="aktualne-nadpis">
        <div className="mb-6 flex items-center gap-3">
          <span className="size-2.5 animate-pulse rounded-full bg-amber-600" />
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Aktuálně probíhá</p>
        </div>
        <article className="overflow-hidden rounded-3xl bg-amber-100 shadow-sm ring-1 ring-amber-900/10">
          <div className="grid lg:grid-cols-[1fr_auto]">
            <div className="p-7 sm:p-10">
              <p className="text-sm font-medium text-amber-800">Připnutá událost ze statku</p>
              <h2 id="aktualne-nadpis" className="mt-3 text-3xl font-semibold tracking-tight text-emerald-950 sm:text-4xl">Prodej krouhaného zelí</h2>
              <p className="mt-4 max-w-2xl leading-7 text-emerald-950/75">Připravujeme čerstvě krouhané zelí z naší úrody. Zastavte se pro zásobu na domácí kvašení a užijte si chuť poctivého zelí přímo ze statku.</p>
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-emerald-950/80">
                <span className="inline-flex items-center gap-2"><CalendarDays size={18} className="text-amber-700" /> Termín dle aktuální domluvy</span>
                <span className="inline-flex items-center gap-2"><Clock3 size={18} className="text-amber-700" /> Čas po telefonické domluvě</span>
              </div>
              <a href="#kontakt" className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
                Podrobnosti a fotky <ArrowRight size={17} />
              </a>
            </div>
            <div className="flex min-h-48 items-center justify-center bg-gradient-to-br from-emerald-800 to-emerald-950 p-8 text-center text-emerald-50 lg:w-64">
              <div>
                <Leaf className="mx-auto mb-3 text-amber-300" size={42} strokeWidth={1.4} />
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-100/70">Čerstvá úroda</p>
                <p className="mt-1 text-xl font-medium">přímo ze statku</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="produkty" className="border-y border-emerald-950/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Z naší úrody</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Naše produkty</h2>
            <p className="mt-4 leading-7 text-emerald-950/65">Pěstujeme s péčí a nabízíme to, co sami dobře známe.</p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(({ name, detail, icon: Icon }) => (
              <article key={name} className="rounded-2xl border border-emerald-950/10 bg-stone-50 p-5 transition hover:-translate-y-1 hover:shadow-md">
                <span className="grid size-11 place-items-center rounded-xl bg-emerald-100 text-emerald-900"><Icon size={22} /></span>
                <h3 className="mt-5 font-semibold">{name}</h3>
                <p className="mt-1 text-sm text-emerald-950/60">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Rádi vás uvidíme</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Zastavte se u nás</h2>
            <p className="mt-4 leading-7 text-emerald-950/65">Prodej ze dvora i návštěvu si prosím domluvte předem.</p>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-900"><MapPin size={21} /></span>
                <div><p className="text-sm text-emerald-950/55">Adresa</p><p className="mt-1 font-medium">Kvasetice 31, Plánice</p></div>
              </div>
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-900"><Phone size={20} /></span>
                <div><p className="text-sm text-emerald-950/55">Telefon</p><p className="mt-1 font-medium">Telefonické domluvy po předchozí zprávě</p></div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-emerald-950/10 bg-stone-100 shadow-sm">
            <iframe
              title="Mapa: Statek Krátice, Kvasetice 31, Plánice"
              src="https://www.google.com/maps?q=Kvasetice+31,+Pl%C3%A1nice&output=embed"
              className="h-[360px] w-full border-0 sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-950/10 bg-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-emerald-950/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Statek Krátice</p>
          <p>Rodinné hospodářství · Kvasetice</p>
        </div>
      </footer>
    </main>
  );
}
