import "./GuessColor.css";
import { Selection } from "./models";
import { useColorSelector } from "../hooks/useColor";

const GuessColor = () => {
  const {
    color,
    setColor,
    options,
    setOptions,
    isRightSelection,
    setIsRightSelection,
    disabled,
    setDisabled,
    pickColor,
  } = useColorSelector();

  const validateSelection = (answer: string) => {
    if (answer === color) {
      setIsRightSelection(Selection.CORRECT);
      setDisabled(true);
      setTimeout(() => {
        pickColor();
        setIsRightSelection(undefined);
        setDisabled(false);
      }, 1000);
    } else {
      setIsRightSelection(Selection.WRONG);
    }
  };

  return (
    <>
      <div className="guess_color" style={{ background: color }}></div>

      <div className="button_group">
        {options?.map((option) => (
          <button
            disabled={disabled}
            key={option}
            onClick={() => validateSelection(option)}
            className="option_button"
          >
            {option}
          </button>
        ))}
      </div>

      <div className="notification">
        {isRightSelection === Selection.CORRECT && (
          <div className="correct">"Correct!"</div>
        )}

        {isRightSelection === Selection.WRONG && (
          <div className="wrong">"Wrong selection"</div>
        )}
      </div>
    </>
  );
};

export default GuessColor;
