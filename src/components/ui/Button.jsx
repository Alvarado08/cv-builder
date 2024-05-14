export default function Button({ name, color, onClick, children }) {
  return (
    <button className={`btn ${color}`} onClick={onClick}>
      {name ? name : null}
      {children}
    </button>
  );
}
