import { hexColor, shuffle } from "../utils";
import { Selection } from "../component/models";
import { useEffect, useState } from "react";

export const useColorSelector = () => {
  const [color, setColor] = useState<string>("");
  const [options, setOptions] = useState<string[]>([]);
  const [isRightSelection, setIsRightSelection] = useState<
    Selection | undefined
  >(undefined);
  const [disabled, setDisabled] = useState(false);

  const pickColor = () => {
    const generatedColor = hexColor();
    setColor(generatedColor);
    setOptions(shuffle([generatedColor, hexColor(), hexColor()]));
  };

  useEffect(() => {
    pickColor();
    console.log("use effect");
  }, []);

  return {
    color,
    setColor,
    options,
    setOptions,
    isRightSelection,
    setIsRightSelection,
    disabled,
    setDisabled,
    pickColor,
  };
};
