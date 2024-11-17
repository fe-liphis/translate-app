import Container from "./Components/UI/Container";
import CopyIcon from "./Components/UI/CopyIcon";
import Logo from "./Components/UI/Logo";
import TranslateBox from "./Components/UI/TranslateBox";
import TranslateTextArea from "./Components/UI/TranslateTextArea";
import useTranslate from "./hooks/useTranslate";
import { LangpairSupported } from "./utils/languagesSupported";
import Notification from "./Components/UI/Notification";
import useNotification from "./hooks/useNotification";
import TranslateHeader from "./Components/UI/TranslateHeader";
import TranslateFooter from "./Components/UI/TranslateFooter";

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

  const { isVisible, setIsVisible } = useNotification();

  function getTranslatedText() {
    if (textToTranslate.length > 0) {
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
  }

  function copyToClipboard(textArea: "toTranslate" | "translated") {
    if (textArea === "toTranslate" && textToTranslate.length > 0) {
      navigator.clipboard.writeText(textToTranslate);
      setIsVisible(true);
    } else if (translatedText.length > 0) {
      navigator.clipboard.writeText(translatedText);
      setIsVisible(true);
    }
  }

  function speechText(textArea: "toTranslate" | "translated") {
    let textToSpeech: SpeechSynthesisUtterance;
    speechSynthesis.cancel();

    if (textArea === "toTranslate") {
      textToSpeech = new SpeechSynthesisUtterance(textToTranslate);
      textToSpeech.lang = language;
    } else {
      textToSpeech = new SpeechSynthesisUtterance(translatedText);
      textToSpeech.lang = languageToTranslated;
    }

    speechSynthesis.speak(textToSpeech);
  }

  function onClickLanguage(
    type: "toTranslate" | "translated",
    langpair: string
  ) {
    if (type === "toTranslate") {
      if (langpair === languageToTranslated) reverseLanguage();
      else setLanguage(langpair as LangpairSupported);
    } else if (type === "translated") {
      if (langpair === language) reverseLanguage();
      else setLanguageToTranslated(langpair as LangpairSupported);
    }
  }

  return (
    <Container>
      <Logo />
      <TranslateBox>
        <TranslateHeader
          onClickReverse={reverseLanguage}
          onClickLanguage={onClickLanguage}
          type="toTranslate"
          language={language}
        />
        <TranslateTextArea
          id="toTranslate"
          name="toTranslate"
          result={textToTranslate}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            setTextToTranslate(event.target.value)
          }
        />
        <TranslateFooter
          copyToClipboard={copyToClipboard}
          getTranslatedText={getTranslatedText}
          speechText={speechText}
          type="toTranslate"
        />
      </TranslateBox>
      <TranslateBox>
        <TranslateHeader
          onClickReverse={reverseLanguage}
          onClickLanguage={onClickLanguage}
          type="translated"
          language={languageToTranslated}
        />
        <TranslateTextArea
          id="translated"
          name="translated"
          result={translatedText}
          isDisabled
        />
        <TranslateFooter
          copyToClipboard={copyToClipboard}
          getTranslatedText={getTranslatedText}
          speechText={speechText}
          type="translated"
        />
      </TranslateBox>

      <Notification isVisible={isVisible}>
        <CopyIcon />
        Copied to Clipboard
      </Notification>
    </Container>
  );
}
