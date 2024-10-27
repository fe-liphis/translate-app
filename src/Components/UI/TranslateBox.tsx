type TranslateBoxParams = {
  children: React.ReactNode;
} & React.PropsWithChildren;

function TranslateBox({ children }: TranslateBoxParams) {
  return (
    <section className="bg-gradient-to-r from-boxF/95 to-boxT/95 h-2/5 w-1/3 rounded-3xl p-6 backdrop-blur-md border border-border/35 shadow-xl shadow-white/5">
      {children}
    </section>
  );
}

export default TranslateBox;
