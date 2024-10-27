import Container from "./Components/UI/Container";
import Logo from "./Components/UI/Logo";
import TranslateBox from "./Components/UI/TranslateBox";

export default function App() {
  return (
    <Container>
      <Logo />
      <TranslateBox>
        <header className="flex items-center gap-8">
          <button className="text-textColor">Português</button>
        </header>
        <textarea
          name="toTranslate"
          id="toTranslate"
          className="h-full w-full bg-transparent resize-none"
        ></textarea>
        <footer className="flex items-center gap-4">
          <button className="text-textColor">Ouvir</button>
          <button className="text-textColor">Copiar</button>
          <button className="text-textColor">Translate</button>
        </footer>
      </TranslateBox>
      <TranslateBox>
        <header className="flex items-center gap-8">
          <button className="text-textColor">English</button>
          <button className="text-textColor">Inverter</button>
        </header>
        <textarea
          name="toTranslate"
          id="toTranslate"
          readOnly
          className="h-full w-full bg-transparent resize-none"
        ></textarea>
        <footer className="flex items-center gap-4">
          <button className="text-textColor">Ouvir</button>
          <button className="text-textColor">Copiar</button>
        </footer>
      </TranslateBox>
    </Container>
  );
}
