type TranslateBoxParams = {
  children: React.ReactNode;
} & React.PropsWithChildren;

function TranslateBox({ children }: TranslateBoxParams) {
  return (
    <section className="bg-gradient-to-r from-boxF/85 to-boxT/85 h-2/5 w-1/3 rounded-3xl p-6 backdrop-blur-md border-2 border-border shadow-xl shadow-white/5 flex flex-col justify-between gap-4">
      {children}
    </section>
  );
}

export default TranslateBox;
