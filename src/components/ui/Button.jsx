export default function Button({ name, color, onClick }) {
  return (
    <button className={`btn ${color}`} onClick={onClick}>
      {name}
    </button>
  );
}
