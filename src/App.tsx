import Container from "./Components/UI/Container";
import LanguageOption from "./Components/UI/LanguageOption";
import Logo from "./Components/UI/Logo";
import TranslateBox from "./Components/UI/TranslateBox";
import TranslateTextArea from "./Components/UI/TranslateTextArea";
import useTranslate from "./hooks/useTranslate";
import {
  LangpairSupported,
  languagesSupported,
} from "./utils/languagesSupported";

type ApiResponseParams = {
  responseData: {
    translatedText: string;
  };
};

export default function App() {
  const {
    language,
    languageToTranslated,
    textToTranslate,
    translatedText,
    setTextToTranslate,
    setTranslatedText,
    reverseLanguage,
    setLanguage,
    setLanguageToTranslated,
  } = useTranslate();

  function getTranslatedText() {
    setTranslatedText("Waiting translate...");

    fetch(
      `https://api.mymemory.translated.net/get?q=${textToTranslate}!&langpair=${language}|${languageToTranslated}`
    )
      .then((res) => res.json())
      .then(({ responseData }: ApiResponseParams) => {
        setTranslatedText(responseData.translatedText);
        console.log(responseData);
      })
      .catch((error) => {
        setTranslatedText("An error occured, try again later...");
        console.log(error);
      });
  }

  return (
    <Container>
      <Logo />
      <TranslateBox>
        <header className="flex items-center gap-4 border-b border-border p-2 pb-4">
          {Object.keys(languagesSupported).map((langpair) => (
            <LanguageOption
              key={"language:" + langpair}
              name={languagesSupported[langpair as LangpairSupported]}
              isActive={langpair === language}
              onClick={() => {
                if (langpair === languageToTranslated) reverseLanguage();
                else setLanguage(langpair as LangpairSupported);
              }}
            />
          ))}
        </header>
        <TranslateTextArea
          id="toTranslate"
          name="toTranslate"
          result={textToTranslate}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setTextToTranslate(event.target.value)
          }
        />
        <footer className="flex items-end gap-4 justify-between">
          <fieldset className="flex items-center gap-4">
            <button className="text-textColor2 font-semibold">Ouvir</button>
            <button className="text-textColor2 font-semibold">Copiar</button>
          </fieldset>
          <button
            className="text-textColor font-semibold bg-btnBlue py-3 px-8 border-btnBorder border rounded-xl"
            onClick={getTranslatedText}
          >
            Translate
          </button>
        </footer>
      </TranslateBox>
      <TranslateBox>
        <header className="flex items-center justify-between border-b border-border p-2 pb-4">
          <fieldset className="flex items-center gap-4">
            {Object.keys(languagesSupported).map((langpair) => (
              <LanguageOption
                key={"languageToTranslate:" + langpair}
                name={languagesSupported[langpair as LangpairSupported]}
                isActive={langpair === languageToTranslated}
                onClick={() => {
                  if (langpair === language) reverseLanguage();
                  else setLanguageToTranslated(langpair as LangpairSupported);
                }}
              />
            ))}
          </fieldset>
          <button
            className="text-textColor2 p-2 font-semibold"
            onClick={reverseLanguage}
          >
            Inverter
          </button>
        </header>
        <TranslateTextArea
          id="translated"
          name="translated"
          result={translatedText}
          isDisabled
        />
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
