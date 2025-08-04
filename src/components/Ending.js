const endingsText = {
  family: (choices, marks) =>
    marks.includes("Good decision") && marks.includes("Good decision")
      ? "Your family will find peace in your thoughtful words."
      : "Your family is left with more questions than comfort...",

  partner: (choices, marks) =>
    marks.filter((m) => m === "Good decision").length >= 1
      ? "Your partner hears your truth at last. The silence between you breaks."
      : "Too many things left unspoken. The void grows wider.",

  commander: (choices, marks) =>
    marks.every((m) => m === "Good decision")
      ? "You are rescued. The commander sends a ship. You live."
      : "Protocol fails. Your message is buried in red tape.",
};

export default function Ending({ path, choices, marks, onRestart }) {
  return (
    <div>
      <h2>Ending: {path}</h2>
      <p>{endingsText[path](choices, marks)}</p>
      <h4>Your choices & decisions:</h4>
      <ul>
        {choices.map((c, i) => (
          <li key={i}>
            {c} - <strong>{marks[i]}</strong>
          </li>
        ))}
      </ul>
      <button onClick={onRestart}>Try Another Path</button>
    </div>
  );
}
