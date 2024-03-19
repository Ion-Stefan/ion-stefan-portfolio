import React from "react";

interface Props {
  ButtonText: string;
}

export const StyledButton = ({ ButtonText }: Props) => {
  return (
    <button className="bg-transparent border-purple-700 border-2 rounded-lg p-3">
      <p className="text-2xl">{ButtonText}</p>
    </button>
  );
};
