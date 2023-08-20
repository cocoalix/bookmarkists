import React from "react";
import { PrimitiveAtom, useAtom } from "jotai";

export type ToggleButtonProps = {
  atom: PrimitiveAtom<boolean>;
  label: string;
};

const ToggleButton = (props: ToggleButtonProps) => {
  const [state, setState] = useAtom(props.atom);
  return (
    <>
      <label className="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" value={state ? 1 : 0} className="sr-only peer" />
        <div
          className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[ dark:peer-focus:ring-blue-800''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          onClick={() => setState(!state)}
        >
        </div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {props.label}
        </span>
      </label>
    </>
  );
};

export default ToggleButton;
