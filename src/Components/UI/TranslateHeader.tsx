import {
  LangpairSupported,
  languagesSupported,
} from "../../utils/languagesSupported";
import LanguageOption from "./LanguageOption";
import ReverseIcon from "./ReverseIcon";

type TranslateHeaderParams = {
  type: "toTranslate" | "translated";
  language: string;
  onClickLanguage: (
    type: "toTranslate" | "translated",
    langpair: string
  ) => void;
  onClickReverse: () => void;
};

function TranslateHeader({
  type,
  language,
  onClickLanguage,
  onClickReverse,
}: TranslateHeaderParams) {
  return (
    <header className="flex items-center justify-between border-b border-border p-2 pb-4">
      <fieldset className="flex items-center gap-4">
        {Object.keys(languagesSupported).map((langpair) => (
          <LanguageOption
            key={"languageToTranslate:" + langpair}
            name={languagesSupported[langpair as LangpairSupported]}
            isActive={langpair === language}
            onClick={() => onClickLanguage(type, langpair)}
          />
        ))}
      </fieldset>
      {type === "translated" && (
        <button
          className="text-textColor2 p-1.5 font-semibold border-2 border-border rounded-xl transition duration-500 hover:bg-textColor2 hover:border-white *:hover:fill-textColor"
          onClick={onClickReverse}
        >
          <ReverseIcon />
        </button>
      )}
    </header>
  );
}

export default TranslateHeader;
