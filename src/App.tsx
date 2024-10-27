import Container from "./Components/UI/Container";
import Logo from "./Components/UI/Logo";
import TranslateBox from "./Components/UI/TranslateBox";

export default function App() {
  return (
    <Container>
      <Logo />
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
    </Container>
  );
}
