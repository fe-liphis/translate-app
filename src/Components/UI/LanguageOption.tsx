type LanguageOptionParams = {
  name: string;
};

function LanguageOption({ name }: LanguageOptionParams) {
  return (
    <button className="text-textColor font-semibold	px-3 py-2 bg-languageBg rounded-2xl">
      {name}
    </button>
  );
}

export default LanguageOption;
