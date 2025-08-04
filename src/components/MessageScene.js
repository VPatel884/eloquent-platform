const storyPaths = {
  family: [
    {
      question: "Do you want to comfort them or be honest?",
      options: ["Comfort", "Be honest"],
      marks: { Comfort: "Good decision", "Be honest": "Bad decision" },
    },
    {
      question: "Should you say goodbye or say you’ll see them again?",
      options: ["Goodbye", "See you again"],
      marks: { Goodbye: "Good decision", "See you again": "Bad decision" },
    },
  ],
  partner: [
    {
      question: "Do you confess a secret or keep it hidden?",
      options: ["Confess", "Hide it"],
      marks: { Confess: "Good decision", "Hide it": "Bad decision" },
    },
    {
      question: "Do you say 'I love you' or 'Forgive me'?",
      options: ["I love you", "Forgive me"],
      marks: { "I love you": "Good decision", "Forgive me": "Bad decision" },
    },
  ],
  commander: [
    {
      question: "Do you blame command or take responsibility?",
      options: ["Blame", "Take responsibility"],
      marks: { Blame: "Bad decision", "Take responsibility": "Good decision" },
    },
    {
      question: "Reveal the base’s secret or stay silent?",
      options: ["Reveal", "Stay silent"],
      marks: { Reveal: "Good decision", "Stay silent": "Bad decision" },
    },
  ],
};

export default function MessageScene({
  path,
  choices,
  setChoices,
  marks,
  setMarks,
  onFinish,
}) {
  const scenes = storyPaths[path];
  const currentIndex = choices.length;
  const currentScene = scenes[currentIndex];

  const handleChoice = (choice) => {
    const updatedChoices = [...choices, choice];
    const updatedMarks = [...marks, currentScene.marks[choice]];
    setChoices(updatedChoices);
    setMarks(updatedMarks);
    if (updatedChoices.length === scenes.length) onFinish();
  };

  return (
    <div>
      <p>{currentScene.question}</p>
      {currentScene.options.map((opt) => (
        <button key={opt} onClick={() => handleChoice(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}
