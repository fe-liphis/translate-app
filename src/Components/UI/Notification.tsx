type NotificationParams = {
  isVisible: boolean;
  children: React.ReactNode;
} & React.PropsWithChildren;

function Notification({ isVisible, children }: NotificationParams) {
  return (
    <p
      className={`${
        isVisible ? "visible opacity-100" : "invisible opacity-0"
      }  absolute bottom-5 right-5 h-10 w-56 bg-white rounded-md transition-all duration-500 flex items-center justify-center gap-2`}
    >
      {children}
    </p>
  );
}

export default Notification;
