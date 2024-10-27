import Container from "./Components/UI/Container";
import Logo from "./Components/UI/Logo";
import TranslateBox from "./Components/UI/TranslateBox";

export default function App() {
  return (
    <Container>
      <Logo />
      <TranslateBox>
        <header className="flex items-center gap-8 border-b border-border p-2 pb-4">
          <button className="text-textColor font-semibold	 px-3 py-2 bg-languageBg rounded-2xl">
            Português
          </button>
        </header>
        <textarea
          name="toTranslate"
          id="toTranslate"
          className="h-full w-full bg-transparent resize-none"
        ></textarea>
        <footer className="flex items-center gap-4">
          <button className="text-textColor2 font-semibold">Ouvir</button>
          <button className="text-textColor2 font-semibold">Copiar</button>
          <button className="text-textColor2 font-semibold">Translate</button>
        </footer>
      </TranslateBox>
      <TranslateBox>
        <header className="flex items-center gap-8 border-b border-border p-2 pb-4">
          <button className="text-textColor2 p-2 font-semibold">English</button>
          <button className="text-textColor2 p-2 font-semibold">
            Inverter
          </button>
        </header>
        <textarea
          name="toTranslate"
          id="toTranslate"
          readOnly
          className="h-full w-full bg-transparent resize-none"
        ></textarea>
        <footer className="flex items-center gap-4">
          <button className="text-textColor2 font-semibold">Ouvir</button>
          <button className="text-textColor2 font-semibold">Copiar</button>
        </footer>
      </TranslateBox>
    </Container>
  );
}
