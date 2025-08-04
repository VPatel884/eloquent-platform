export default function PathSelect({ onSelect }) {
  return (
    <div>
      <p>Select your final contact:</p>
      <button onClick={() => onSelect("family")}>Family</button>
      <button onClick={() => onSelect("partner")}>Partner</button>
      <button onClick={() => onSelect("commander")}>Commander</button>
    </div>
  );
}
