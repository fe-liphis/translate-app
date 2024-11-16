type LanguageOptionParams = {
  name: string;
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function LanguageOption({ name, isActive, ...rest }: LanguageOptionParams) {
  return (
    <button
      className={`${
        isActive ? "text-textColor bg-languageBg" : "text-textColor2 bg-none"
      }  font-semibold px-3 py-2 rounded-2xl transition duration-500 hover:text-textColor`}
      {...rest}
    >
      {name}
    </button>
  );
}

export default LanguageOption;
