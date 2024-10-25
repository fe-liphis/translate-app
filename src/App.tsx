export default function App() {
  return (
    <main className="grid-rows-2">
      <h1 className="text-2xl font-bold text-center">Translated.io</h1>
      <div>
        <section>
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
        <section>
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
      </div>
    </main>
  );
}
