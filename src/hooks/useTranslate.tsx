import { useState } from "react";
import { LangpairSupported } from "../utils/languagesSupported";

function useTranslate() {
  const [textToTranslate, setTextToTranslate] = useState<string>("");
  const [translatedText, setTranslatedText] = useState<string>("");
  const [languageToTranslated, setLanguageToTranslated] =
    useState<LangpairSupported>("en");
  const [language, setLanguage] = useState<LangpairSupported>("br");

  function reverseLanguage() {
    const textAux = textToTranslate;
    setTextToTranslate(translatedText);
    if (translatedText?.length > 0) setTranslatedText(textAux);

    const languageAux = language;
    setLanguage(languageToTranslated);
    setLanguageToTranslated(languageAux);
  }

  return {
    textToTranslate,
    translatedText,
    languageToTranslated,
    language,
    setTextToTranslate,
    setTranslatedText,
    setLanguageToTranslated,
    setLanguage,
    reverseLanguage,
  };
}

export default useTranslate;
