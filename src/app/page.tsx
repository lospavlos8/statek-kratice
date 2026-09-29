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
  { name: "Kysané zelí", description: "Poctivě kvašené z naší úrody", Icon: Leaf },
  { name: "Hlávkové zelí", description: "Čerstvé, křupavé a plné chuti", Icon: Leaf },
  { name: "Modrý mák", description: "Vypěstovaný s péčí na statku", Icon: ShoppingBasket },
  { name: "Dvouletý kmín", description: "Voňavé české koření", Icon: Leaf },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200/80 bg-stone-50/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#domu" className="flex items-center gap-3 font-bold tracking-tight text-emerald-900">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-emerald-900 text-amber-100">
              <Leaf className="h-6 w-6" />
            </span>
            <span>Statek Krátice</span>
          </a>
          <nav className="flex items-center gap-5 text-sm font-medium text-stone-600 sm:gap-8">
            <a href="#produkty" className="transition hover:text-emerald-800">Produkty</a>
            <a href="#kontakt" className="transition hover:text-emerald-800">Kontakt</a>
          </nav>
        </div>
      </header>

      <section id="domu" className="px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-4xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-800/10 bg-white px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm">
            <Leaf className="h-4 w-4 text-emerald-600" /> Rodinné hospodářství v Kvaseticích
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-emerald-900 md:text-6xl">Statek Krátice</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Tradiční rodinné hospodaření, poctivé produkty a prodej ze dvora. Pěstujeme s úctou k půdě a nabízíme chuť, která začíná u nás doma.
          </p>
          <a href="#produkty" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-800">
            Poznejte naše produkty <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <section aria-labelledby="aktualne" className="my-12 px-6">
        <article className="mx-auto max-w-4xl rounded-2xl border-l-8 border-amber-500 bg-white p-8 shadow-xl sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-amber-700">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber-500" /> Aktuálně probíhá
              </p>
              <h2 id="aktualne" className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">Prodej krouhaného zelí</h2>
              <p className="mt-4 max-w-xl leading-7 text-stone-600">
                Čerstvě krouhané zelí z naší úrody je připravené na domácí kvašení. Zastavte se pro svou zásobu přímo na statku.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm font-semibold text-emerald-900 sm:flex-row sm:gap-6">
                <span className="inline-flex items-center gap-2"><CalendarDays className="h-5 w-5 text-amber-600" /> Termín po domluvě</span>
                <span className="inline-flex items-center gap-2"><Clock3 className="h-5 w-5 text-amber-600" /> Čas po telefonické domluvě</span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <div className="grid h-20 w-20 place-items-center rounded-2xl bg-amber-50 text-amber-700">
                <Leaf className="h-10 w-10" />
              </div>
              <a href="#kontakt" className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-800">
                Podrobnosti a fotky <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </article>
      </section>

      <section id="produkty" className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">Z naší úrody</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">Naše produkty</h2>
            <p className="mx-auto mt-4 max-w-xl text-stone-600">Jednoduše, poctivě a s péčí vypěstované dobroty z rodinného statku.</p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(({ name, description, Icon }) => (
              <article key={name} className="flex flex-col items-center rounded-xl border border-stone-100 bg-white p-6 text-center shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                <Icon className="mb-4 h-8 w-8 text-emerald-600" strokeWidth={1.8} />
                <h3 className="text-lg font-bold text-emerald-900">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto my-20 max-w-5xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">Prodej ze dvora</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">Zastavte se u nás</h2>
            <p className="mt-4 leading-7 text-stone-600">Napište nebo zavolejte a domluvíme se na návštěvě i aktuální nabídce.</p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-7 w-7 shrink-0 text-emerald-600" />
                <div>
                  <p className="text-sm text-stone-500">Adresa statku</p>
                  <p className="mt-1 font-semibold text-emerald-950">Kvasetice 31, Plánice</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-7 w-7 shrink-0 text-emerald-600" />
                <div>
                  <p className="text-sm text-stone-500">Telefon</p>
                  <p className="mt-1 font-semibold text-emerald-950">Telefonické domluvy po předchozí zprávě</p>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-stone-900/10">
            <iframe
              title="Mapa: Kvasetice 31, Plánice"
              src="https://www.google.com/maps?q=Kvasetice+31,+Pl%C3%A1nice&output=embed"
              className="aspect-video w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white/70 px-6 py-6 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Statek Krátice · Rodinné hospodářství v Kvaseticích
      </footer>
    </main>
  );
}
