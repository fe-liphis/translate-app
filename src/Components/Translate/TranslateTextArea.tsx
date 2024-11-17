import { useEffect, useState } from "react";

type TranslateTextAreaParams = {
  name: string;
  id: string;
  isDisabled?: boolean;
  result?: string;
} & React.HTMLProps<HTMLTextAreaElement>;

function TranslateTextArea({
  name,
  id,
  isDisabled,
  result,
  ...rest
}: TranslateTextAreaParams) {
  const [length, setLength] = useState(result?.length || 0);

  useEffect(() => {
    if (!isDisabled) {
      setLength(result?.length || 0);
    }
  }, [result, isDisabled]);

  return (
    <div className="relative h-full w-full">
      <textarea
        name={name}
        id={id}
        disabled={isDisabled}
        value={result}
        maxLength={250}
        className="h-full w-full bg-transparent resize-none text-textColor font-semibold p-2"
        {...rest}
      />
      {!isDisabled && (
        <span className="absolute bottom-1 right-3 text-sm text-textColor2">
          {`${length}/250`}
        </span>
      )}
    </div>
  );
}

export default TranslateTextArea;
