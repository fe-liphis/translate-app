import TranslateBox from "./Components/UI/TranslateBox";

export default function App() {
  return (
    <main className="flex items-center justify-center content-center flex-wrap gap-6 w-full h-full">
      <h1 className="text-2xl font-bold text-center w-full mb-10 text-white">
        translated.io
      </h1>
      <TranslateBox>
        <header>
          <button>Português</button>
        </header>
        <textarea name="toTranslate" id="toTranslate"></textarea>
        <footer>
          <button>Ouvir</button>
          <button>Copiar</button>
          <button>Translate</button>
        </footer>
      </TranslateBox>
      <TranslateBox>
        <header>
          <button>English</button>
          <button>Inverter</button>
        </header>
        <textarea name="toTranslate" id="toTranslate" readOnly></textarea>
        <footer>
          <button>Ouvir</button>
          <button>Copiar</button>
        </footer>
      </TranslateBox>
    </main>
  );
}
