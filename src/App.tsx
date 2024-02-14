import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    if (noCount > 5) {
      setNoCount(1);
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
    "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif",
    "https://media1.tenor.com/m/ykIUJGhcaVcAAAAC/milk-and-mocha-bear-couple.gif",
    "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif",
    "https://media1.tenor.com/m/ykIUJGhcaVcAAAAC/milk-and-mocha-bear-couple.gif",
    "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif",
    "https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif",
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
            <img src="https://media.tenor.com/qeJtDi4BOkwAAAAi/tkthao219-bubududu.gif" />
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
            <h1 className="text-container">Will you be my Valentine?</h1>
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
