import { useState } from "react";

function useTranslate() {
  const [textToTranslate, setTextToTranslate] = useState<string>();
  const [translatedText, setTranslatedText] = useState<string>();
  const [languageToTranslated, setLanguageToTranslated] =
    useState<string>("en");
  const [language, setLanguage] = useState<string>("pt-Br");

  function reverseLanguage() {
    const textAux = textToTranslate;
    setTextToTranslate(translatedText);
    setTranslatedText(textAux);

    const languageAux = language;
    setLanguage(languageToTranslated);
    setLanguageToTranslated(languageAux);
  }

  return {
    textToTranslate,
    translatedText,
    setTextToTranslate,
    setTranslatedText,
    languageToTranslated,
    language,
    setLanguageToTranslated,
    setLanguage,
    reverseLanguage,
  };
}

export default useTranslate;
