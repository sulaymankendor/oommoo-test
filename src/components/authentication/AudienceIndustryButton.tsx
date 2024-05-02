import { Dispatch, Fragment, SetStateAction, useContext } from "react";
import { Tab } from "@headlessui/react";
import { ResetCurrentHighlightedAccountContext } from "./AuthenticationModal";

export default function AudienceIndustryButton({
  setCurrentHighlightedAccount,
}: {
  setCurrentHighlightedAccount: Dispatch<SetStateAction<string>>;
}) {
  const ResetCurrentHighlightedAccount = useContext(
    ResetCurrentHighlightedAccountContext
  );
  console.log(ResetCurrentHighlightedAccount?.resetCurrentHighlightedAccount);
  return (
    <Tab.Group
      selectedIndex={
        ResetCurrentHighlightedAccount?.resetCurrentHighlightedAccount
          ? 0
          : undefined
      }
    >
      <Tab.List className="flex items-center justify-between w-[60%] ml-auto mb-[6%]">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`${
                selected ? "bg-[#656565] text-white" : "bg-[#D9D9D9] text-black"
              } px-7 py-3 rounded-full font-semibold ml-[2.5vw] outline-none`}
              onClick={() => {
                setCurrentHighlightedAccount("audience");
              }}
            >
              Audience
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={`
              ${
                selected ? "bg-[#656565] text-white" : "bg-[#D9D9D9] text-black"
              } 

              px-7 py-3 rounded-full font-semibold mr-[-2.5vw] outline-none`}
              onClick={() => {
                setCurrentHighlightedAccount("industry");
              }}
            >
              Industry
            </button>
          )}
        </Tab>
      </Tab.List>
    </Tab.Group>
  );
}
