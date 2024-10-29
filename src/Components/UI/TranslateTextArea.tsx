type TranslateTextAreaParams = {
  name: string;
  id: string;
  isDisabled?: boolean;
  result?: string;
};

function TranslateTextArea({
  name,
  id,
  isDisabled,
  result,
}: TranslateTextAreaParams) {
  return (
    <textarea
      name={name}
      id={id}
      disabled={isDisabled}
      value={result}
      className="h-full w-full bg-transparent resize-none text-textColor font-semibold p-2"
    />
  );
}

export default TranslateTextArea;
