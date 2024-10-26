export default function App() {
  return (
    <main className="flex items-center justify-center flex-wrap gap-8">
      <h1 className="text-2xl font-bold text-center basis-full mb-8">
        Translated.io
      </h1>
      <section className="bg-slate-700 w-96 h-56">
        <header>
          <button>Português</button>
        </header>
        <textarea name="toTranslate" id="toTranslate"></textarea>
        <footer>
          <button>Ouvir</button>
          <button>Copiar</button>
          <button>Translate</button>
        </footer>
      </section>
      <section className="bg-slate-700 bg-slate-700 w-96 h-56">
        <header>
          <button>English</button>
          <button>Inverter</button>
        </header>
        <textarea name="toTranslate" id="toTranslate" readOnly></textarea>
        <footer>
          <button>Ouvir</button>
          <button>Copiar</button>
        </footer>
      </section>
    </main>
  );
}
