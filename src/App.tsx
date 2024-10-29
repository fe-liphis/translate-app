import Container from "./Components/UI/Container";
import LanguageOption from "./Components/UI/LanguageOption";
import Logo from "./Components/UI/Logo";
import TranslateBox from "./Components/UI/TranslateBox";
import TranslateTextArea from "./Components/UI/TranslateTextArea";

export default function App() {
  return (
    <Container>
      <Logo />
      <TranslateBox>
        <header className="flex items-center gap-8 border-b border-border p-2 pb-4">
          <LanguageOption name="Português" />
        </header>
        <TranslateTextArea id="toTranslate" name="toTranslate" />
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
        <TranslateTextArea id="translated" name="translated" />
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
