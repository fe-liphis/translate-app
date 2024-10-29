type TranslateTextAreaParams = {
  name: string;
  id: string;
};

function TranslateTextArea({ name, id }: TranslateTextAreaParams) {
  return (
    <textarea
      name={name}
      id={id}
      className="h-full w-full bg-transparent resize-none text-textColor font-semibold p-2"
    ></textarea>
  );
}

export default TranslateTextArea;
