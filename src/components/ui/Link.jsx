export default function Link({ name, children, theme }) {
  return (
    <a
      href={name.includes("@") ? `mailto:${name}` : name}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-semibold ${
        theme && "text-white"
      } inline-flex items-center gap-1`}
    >
      {children}
    </a>
  );
}
