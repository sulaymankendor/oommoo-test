import React, { createContext, useState } from "react";
import AudienceIndustryAccount from "./AudienceIndustryAccount";
import Login from "./Login";
import { useBodyScrollLock } from "../../../utilities/lockscroll";
import AudienceSignUp from "./AudienceSignUp";
import "@/components/authentication/auth-modal-styles/auth-modal-styles.css";

export const AuthModalSliderContext = createContext<null | {
  setAuthModalSlider: React.Dispatch<React.SetStateAction<string>>;
}>(null);

export const ResetCurrentHighlightedAccountContext = createContext<null | {
  resetCurrentHighlightedAccount: undefined | boolean;
  setResetCurrentHighlightedAccount: React.Dispatch<
    React.SetStateAction<undefined | boolean>
  >;
}>(null);
function AuthenticationModal() {
  useBodyScrollLock();
  const [authModalSlider, setAuthModalSlider] = useState("translate-x-0");
  const [resetCurrentHighlightedAccount, setResetCurrentHighlightedAccount] =
    useState<undefined | boolean>(undefined);

  return (
    <div className="hide-scroll-bar bg-white h-[87vh] fixed top-[3vh] left-[25vw] w-[50vw] rounded-xl p-8 z-30 overflow-x-hidden">
      <div
        className={`flex items-center w-[200%] ${authModalSlider} transition-transform`}
      >
        <AuthModalSliderContext.Provider
          value={{ setAuthModalSlider: setAuthModalSlider }}
        >
          <ResetCurrentHighlightedAccountContext.Provider
            value={{
              resetCurrentHighlightedAccount,
              setResetCurrentHighlightedAccount,
            }}
          >
            {/* <Login /> */}
            {/* <AudienceIndustryAccount /> */}
            <AudienceSignUp />
          </ResetCurrentHighlightedAccountContext.Provider>
        </AuthModalSliderContext.Provider>
      </div>
    </div>
  );
}

export default AuthenticationModal;
