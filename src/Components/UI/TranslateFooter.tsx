import CopyIcon from "./CopyIcon";
import SoundIcon from "./SoundIcon";
import TranslateIcon from "./TranslateIcon";

type TranslateFooterParams = {
  type: "toTranslate" | "translated";
  speechText: (type: "toTranslate" | "translated") => void;
  copyToClipboard: (type: "toTranslate" | "translated") => void;
  getTranslatedText: () => void;
};

function TranslateFooter({
  type,
  speechText,
  copyToClipboard,
  getTranslatedText,
}: TranslateFooterParams) {
  return (
    <footer className="flex items-end gap-4 justify-between">
      <fieldset className="flex items-center gap-4">
        <button
          className="text-textColor2 p-1.5 font-semibold border-2 border-border rounded-xl transition duration-500 hover:bg-textColor2 hover:border-white *:hover:fill-textColor"
          onClick={() => speechText(type)}
        >
          <SoundIcon />
        </button>
        <button
          className="text-textColor2 p-1.5 font-semibold border-2 border-border rounded-xl transition duration-500 hover:bg-textColor2 hover:border-white *:hover:fill-textColor"
          onClick={() => copyToClipboard(type)}
        >
          <CopyIcon />
        </button>
      </fieldset>
      {type === "toTranslate" && (
        <button
          className="text-textColor font-semibold bg-btnBlue py-3 px-6 border-btnBorder border-2 rounded-xl flex items-center gap-3 transition duration-500 hover:bg-textColor hover:text-textBlue hover:border-textBlue *:hover:fill-textBlue"
          onClick={getTranslatedText}
        >
          <TranslateIcon />
          Translate
        </button>
      )}
    </footer>
  );
}

export default TranslateFooter;
