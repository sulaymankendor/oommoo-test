import React, { createContext, useState } from "react";
import AudienceIndustryAccount from "./AudienceIndustryAccount";
import Login from "./Login";
import { useBodyScrollLock } from "../../../utilities/lockscroll";

export const AuthModalSliderContext = createContext<null | {
  setAuthModalSlider: React.Dispatch<React.SetStateAction<string>>;
}>(null);

export const ResetCurrentHighlightedAccountContext = createContext<null | {
  resetCurrentHighlightedAccount: boolean;
  setResetCurrentHighlightedAccount: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}>(null);
function AuthenticationModal() {
  useBodyScrollLock();
  const [authModalSlider, setAuthModalSlider] = useState("translate-x-0");
  const [resetCurrentHighlightedAccount, setResetCurrentHighlightedAccount] =
    useState(false);

  return (
    <div className="bg-white fixed top-[11vh] left-[25vw] w-[50vw] rounded-xl p-8 z-30 overflow-x-hidden">
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
            <Login />
            <AudienceIndustryAccount />
          </ResetCurrentHighlightedAccountContext.Provider>
        </AuthModalSliderContext.Provider>
      </div>
    </div>
  );
}

export default AuthenticationModal;
