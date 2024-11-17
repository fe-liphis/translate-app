import { useEffect, useState } from "react";
import Container from "./Components/UI/Container";
import CopyIcon from "./Components/UI/CopyIcon";
import LanguageOption from "./Components/UI/LanguageOption";
import Logo from "./Components/UI/Logo";
import ReverseIcon from "./Components/UI/ReverseIcon";
import SoundIcon from "./Components/UI/SoundIcon";
import TranslateBox from "./Components/UI/TranslateBox";
import TranslateIcon from "./Components/UI/TranslateIcon";
import TranslateTextArea from "./Components/UI/TranslateTextArea";
import useTranslate from "./hooks/useTranslate";
import {
  LangpairSupported,
  languagesSupported,
} from "./utils/languagesSupported";
import Notification from "./Components/UI/Notification";

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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const visibleTimeoutId = setTimeout(() => setIsVisible(false), 2000);

    return () => {
      clearTimeout(visibleTimeoutId);
    };
  }, [isVisible]);

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

  function copyToClipboard(textArea: "textToTranslate" | "translatedText") {
    if (textArea === "textToTranslate")
      navigator.clipboard.writeText(textToTranslate);
    else navigator.clipboard.writeText(translatedText);

    setIsVisible(true);
  }

  function speechText(textArea: "textToTranslate" | "translatedText") {
    let textToSpeech: SpeechSynthesisUtterance;
    speechSynthesis.cancel();

    if (textArea === "textToTranslate") {
      textToSpeech = new SpeechSynthesisUtterance(textToTranslate);
      textToSpeech.lang = language;
    } else {
      textToSpeech = new SpeechSynthesisUtterance(translatedText);
      textToSpeech.lang = languageToTranslated;
    }

    speechSynthesis.speak(textToSpeech);
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
            <button
              className="text-textColor2 p-1.5 font-semibold border-2 border-border rounded-xl transition duration-500 hover:bg-textColor2 hover:border-white *:hover:fill-textColor"
              onClick={() => speechText("textToTranslate")}
            >
              <SoundIcon />
            </button>
            <button
              className="text-textColor2 p-1.5 font-semibold border-2 border-border rounded-xl transition duration-500 hover:bg-textColor2 hover:border-white *:hover:fill-textColor"
              onClick={() => copyToClipboard("textToTranslate")}
            >
              <CopyIcon />
            </button>
          </fieldset>
          <button
            className="text-textColor font-semibold bg-btnBlue py-3 px-6 border-btnBorder border-2 rounded-xl flex items-center gap-3 transition duration-500 hover:bg-textColor hover:text-textBlue hover:border-textBlue *:hover:fill-textBlue"
            onClick={getTranslatedText}
          >
            <TranslateIcon />
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
            className="text-textColor2 p-1.5 font-semibold border-2 border-border rounded-xl transition duration-500 hover:bg-textColor2 hover:border-white *:hover:fill-textColor"
            onClick={reverseLanguage}
          >
            <ReverseIcon />
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
            <button
              className="text-textColor2 p-1.5 font-semibold border-2 border-border rounded-xl transition duration-500 hover:bg-textColor2 hover:border-white *:hover:fill-textColor"
              onClick={() => speechText("translatedText")}
            >
              <SoundIcon />
            </button>
            <button
              className="text-textColor2 p-1.5 font-semibold border-2 border-border rounded-xl transition duration-500 hover:bg-textColor2 hover:border-white *:hover:fill-textColor"
              onClick={() => copyToClipboard("translatedText")}
            >
              <CopyIcon />
            </button>
          </fieldset>
        </footer>
      </TranslateBox>

      <Notification isVisible={isVisible}>
        <CopyIcon />
        Copied to Clipboard
      </Notification>
    </Container>
  );
}
