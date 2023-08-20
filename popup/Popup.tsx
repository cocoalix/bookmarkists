import React from "react";
import browser from "webextension-polyfill";

import { Octokit } from "@octokit/rest";

import { atom, useAtom } from "jotai";

import ToggleButton from "./component/ToggleButton";

const isEnableAtom = atom(false);

const octokit = new Octokit();

export const Popup: React.FC = () => {
  const handleClick = async (): Promise<void> => {
    await browser.tabs.create({ url: "https://example.com/" });
  };

  // a button to open example.com
  return (
    <>
      <ToggleButton atom={isEnableAtom} label={""} />
    </>
  );
};
