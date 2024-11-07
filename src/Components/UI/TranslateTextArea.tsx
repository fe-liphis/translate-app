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
  return (
    <textarea
      name={name}
      id={id}
      disabled={isDisabled}
      value={result}
      className="h-full w-full bg-transparent resize-none text-textColor font-semibold p-2"
      {...rest}
    />
  );
}

export default TranslateTextArea;
