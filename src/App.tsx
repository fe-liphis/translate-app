export default function App() {
  return (
    <main className="flex items-center justify-center content-center flex-wrap gap-6 w-full h-full">
      <h1 className="text-2xl font-bold text-center w-full mb-10 text-white">
        translated.io
      </h1>
      <section className="bg-gradient-to-r from-boxF/90 to-boxT/90 h-38 w-38 rounded-3xl p-6 backdrop-blur-md">
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
      <section className="bg-gradient-to-r from-boxF/90 to-boxT/90 h-38 w-38 rounded-3xl p-6 backdrop-blur-md">
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
