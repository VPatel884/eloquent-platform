export default function Intro({ onContinue }) {
  return (
    <div>
      <p>
        You awaken on a dying moon base. Only one message can be sent before
        power fails. Who will you contact?
      </p>
      <button onClick={onContinue}>Continue</button>
    </div>
  );
}
