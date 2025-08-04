export default function Completion({ endings }) {
  const completed = Object.values(endings).filter(Boolean).length;
  const total = Object.keys(endings).length;
  return (
    <div>
      <p>
        Completion: {completed}/{total} endings unlocked
      </p>
    </div>
  );
}
