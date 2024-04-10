export default function Cv({ theme }) {
  return (
    <div>
      <div className={`p-5 ${theme} rounded`}>
        <h1
          className={`text-3xl font-bold ${
            theme === "bg-blue-500" && "text-white"
          }`}
        >
          John Doe
        </h1>
      </div>
    </div>
  );
}
