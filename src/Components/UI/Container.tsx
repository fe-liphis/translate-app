type ContainerParams = {
  children: React.ReactNode;
} & React.PropsWithChildren;

function Container({ children }: ContainerParams) {
  return (
    <main className="flex items-center justify-center content-center flex-wrap gap-6 w-full h-full">
      {children}
    </main>
  );
}

export default Container;
