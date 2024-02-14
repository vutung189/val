import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    if (noCount > 5) {
      setNoCount(0);
      return;
    }
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  const phrases = [
    "01.gif",
    "02.gif",
    "03.gif",
    "04.gif",
    "04.gif",
    "06.gif",
    "05.gif",
  ];

  const renderImage = () => {
    console.log("tungvt " + noCount);
    const imageCode = phrases[Math.min(noCount, phrases.length - 1)];

    return (
      <img
        src={imageCode}
        className="h-[200px]"
        style={{ width: "400x", height: "240px" }}
      />
    );
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="ok.gif" />
            <div className="text-container">Nga Suxi!!!</div>
          </>
        ) : (
          <>
            <p>{renderImage()}</p>
            {/* <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src={{getImg()}}
            /> */}
            <h4 className="text-container">Will you be my Valentine?</h4>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
