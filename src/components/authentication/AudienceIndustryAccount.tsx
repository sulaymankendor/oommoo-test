import CircularCheckMark from "@/svgs/CircularCheckMark";
import "@/components/authentication/auth-modal-styles/auth-modal-styles.css";
import Minus from "@/svgs/Minus";
import AudienceIndustryButton from "./AudienceIndustryButton";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { AuthModalSliderContext } from "./AuthenticationModal";

function AudienceIndustryAccount() {
  const [currentHighlightedAccount, setCurrentHighlightedAccount] =
    useState("audience");
  const setAuthModalSlider = useContext(AuthModalSliderContext);

  return (
    <div className="w-full ml-24">
      <AudienceIndustryButton
        setCurrentHighlightedAccount={setCurrentHighlightedAccount}
      />
      <table className="w-full">
        <tbody>
          <tr>
            <td>Show rating</td>
            <td>
              <CircularCheckMark
                currentHighlightedAccount={currentHighlightedAccount}
                checkMarkAccountType="audience"
              />
            </td>
            <td></td>
            <td>
              <CircularCheckMark
                currentHighlightedAccount={currentHighlightedAccount}
                checkMarkAccountType="industry"
              />
            </td>
          </tr>
          <tr>
            <td>User profile</td>
            <td>
              <CircularCheckMark
                currentHighlightedAccount={currentHighlightedAccount}
                checkMarkAccountType="audience"
              />
            </td>
            <td></td>
            <td>
              <CircularCheckMark
                currentHighlightedAccount={currentHighlightedAccount}
                checkMarkAccountType="industry"
              />
            </td>
          </tr>
          <tr>
            <td>Comment features</td>
            <td>
              <CircularCheckMark
                currentHighlightedAccount={currentHighlightedAccount}
                checkMarkAccountType="audience"
              />
            </td>
            <td></td>
            <td>
              <CircularCheckMark
                currentHighlightedAccount={currentHighlightedAccount}
                checkMarkAccountType="industry"
              />
            </td>
          </tr>
          <tr>
            <td>Diversity filter</td>
            <td>
              <Minus />
            </td>
            <td></td>
            <td>
              <CircularCheckMark
                currentHighlightedAccount={currentHighlightedAccount}
                checkMarkAccountType="industry"
              />
            </td>
          </tr>
          <tr>
            <td>Create pages</td>
            <td>
              <Minus />
            </td>
            <td></td>
            <td>
              <CircularCheckMark
                currentHighlightedAccount={currentHighlightedAccount}
                checkMarkAccountType="industry"
              />
            </td>
          </tr>
          <tr>
            <td>User rating metric</td>
            <td>
              <Minus />
            </td>
            <td></td>
            <td>
              <CircularCheckMark
                currentHighlightedAccount={currentHighlightedAccount}
                checkMarkAccountType="industry"
              />
            </td>
          </tr>
          <tr>
            <td>Diversity metric</td>
            <td>
              <Minus />
            </td>
            <td></td>
            <td>
              <CircularCheckMark
                currentHighlightedAccount={currentHighlightedAccount}
                checkMarkAccountType="industry"
              />
            </td>
          </tr>
          <tr>
            <td>Dashboard</td>
            <td>
              <Minus />
            </td>
            <td></td>
            <td>
              <CircularCheckMark
                currentHighlightedAccount={currentHighlightedAccount}
                checkMarkAccountType="industry"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center ml-auto mr-auto w-[70%] justify-between mt-5">
        <div className="flex items-center">
          <p className="text-[13px] text-gray-600">Already a member?</p>
          <button
            className="font-bold text-[13px] ml-1"
            onClick={() => {
              setAuthModalSlider?.setAuthModalSlider("translate-x-0");
              setCurrentHighlightedAccount("audience");
            }}
          >
            Log in
          </button>
        </div>
        <Button className="rounded-full px-8 py-3 bg-[#1D9FFF] hover:bg-sky-600 font-semibold">
          Create Account
        </Button>
      </div>
    </div>
  );
}

export default AudienceIndustryAccount;
