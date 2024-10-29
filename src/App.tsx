import Container from "./Components/UI/Container";
import LanguageOption from "./Components/UI/LanguageOption";
import Logo from "./Components/UI/Logo";
import TranslateBox from "./Components/UI/TranslateBox";

export default function App() {
  return (
    <Container>
      <Logo />
      <TranslateBox>
        <header className="flex items-center gap-8 border-b border-border p-2 pb-4">
          <LanguageOption name="Português" />
        </header>
        <textarea
          name="toTranslate"
          id="toTranslate"
          className="h-full w-full bg-transparent resize-none text-textColor font-semibold p-2"
        ></textarea>
        <footer className="flex items-center gap-4 justify-between">
          <fieldset className="flex items-center gap-4">
            <button className="text-textColor2 font-semibold">Ouvir</button>
            <button className="text-textColor2 font-semibold">Copiar</button>
          </fieldset>
          <button className="text-textColor2 font-semibold">Translate</button>
        </footer>
      </TranslateBox>
      <TranslateBox>
        <header className="flex items-center justify-between gap-8 border-b border-border p-2 pb-4">
          <fieldset>
            <LanguageOption name="English" />
          </fieldset>
          <button className="text-textColor2 p-2 font-semibold">
            Inverter
          </button>
        </header>
        <textarea
          name="toTranslate"
          id="toTranslate"
          readOnly
          className="h-full w-full bg-transparent resize-none text-textColor font-semibold p-2"
        ></textarea>
        <footer className="flex items-center gap-4">
          <fieldset className="flex items-center gap-4">
            <button className="text-textColor2 font-semibold">Ouvir</button>
            <button className="text-textColor2 font-semibold">Copiar</button>
          </fieldset>
        </footer>
      </TranslateBox>
    </Container>
  );
}
