import { useEffect, useState } from "react";
import Intro from "./Intro";
import PathSelect from "./PathSelect";
import MessageScene from "./MessageScene";
import Ending from "./Ending";
import Completion from "./Completion";

export default function Game() {
  const [scene, setScene] = useState("intro");
  const [path, setPath] = useState(null);
  const [choices, setChoices] = useState([]);
  const [marks, setMarks] = useState([]);
  const [endings, setEndings] = useState(() => {
    const saved = localStorage.getItem("endings");
    return saved
      ? JSON.parse(saved)
      : {
          family: false,
          partner: false,
          commander: false,
        };
  });

  useEffect(() => {
    localStorage.setItem("endings", JSON.stringify(endings));
  }, [endings]);

  const handlePathSelect = (selected) => {
    setPath(selected);
    setScene("message");
  };

  const handleFinish = () => {
    setEndings((prev) => ({ ...prev, [path]: true }));
    setScene("ending");
  };

  const handleRestart = () => {
    setScene("select");
    setChoices([]);
    setMarks([]);
    setPath(null);
  };

  return (
    <div>
      {scene === "intro" && <Intro onContinue={() => setScene("select")} />}
      {scene === "select" && <PathSelect onSelect={handlePathSelect} />}
      {scene === "message" && (
        <MessageScene
          path={path}
          choices={choices}
          setChoices={setChoices}
          marks={marks}
          setMarks={setMarks}
          onFinish={handleFinish}
        />
      )}
      {scene === "ending" && (
        <Ending
          path={path}
          choices={choices}
          marks={marks}
          onRestart={handleRestart}
        />
      )}
      <Completion endings={endings} />
    </div>
  );
}
