export default function Appearances() {
  const appearances = [
    "Star Wars: Episode IV - A New Hope",
    "Star Wars: Episode V - The Empire Strikes Back",
    "Star Wars: Episode VI - Return of the Jedi",
    "Star Wars: Episode III - Revenge of the Sith",
    "Star Wars: Rebels",
    "Star Wars: Episode VII - The Force Awakens",
    "Star Wars: Forces of Destiny",
    "Star Wars: Episode VIII - The Last Jedi",
    "Star Wars: Episode IX - The Rise of Skywalker",
    "The Mandalorian",
    "The Book of Boba Fett",
    "Obi-Wan Kenobi",
  ];
  return (
    <div>
      <ul>
        {appearances.map((appearance) => (
          <button>{appearance}</button>
        ))}
      </ul>
    </div>
  );
}
