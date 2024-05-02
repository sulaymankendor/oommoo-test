"use client";
import AuthenticationModal from "../authentication/AuthenticationModal";
import Header from "./Header";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export const ShowAuthenticationModalContext = createContext<{
  setShowAuthenticationModal: Dispatch<SetStateAction<boolean>>;
} | null>(null);

function HeaderAndAuthModal() {
  const [showAuthenticationModal, setShowAuthenticationModal] = useState(false);
  return (
    <>
      <ShowAuthenticationModalContext.Provider
        value={{ setShowAuthenticationModal }}
      >
        <Header />
        {showAuthenticationModal && (
          <>
            <AuthenticationModal />

            <div
              className="bg-black fixed top-0 left-0 right-0 bottom-0 opacity-60 z-20"
              onClick={() => {
                setShowAuthenticationModal(false);
              }}
            ></div>
          </>
        )}
      </ShowAuthenticationModalContext.Provider>
    </>
  );
}

export default HeaderAndAuthModal;
