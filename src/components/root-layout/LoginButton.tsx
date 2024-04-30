import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { ShowAuthenticationModalContext } from "./HeaderAndAuthModal";

function LoginButton() {
  const showAuthenticationModal = useContext(ShowAuthenticationModalContext);

  return (
    <Button
      variant="secondary"
      className="bg-white px-[2.9vw] h-0 py-[2.4vh] text-[2.2vh] font-extrabold -mt-4 rounded-full"
      onClick={() => {
        showAuthenticationModal?.setShowAuthenticationModal(true);
      }}
    >
      Login
    </Button>
  );
}

export default LoginButton;
