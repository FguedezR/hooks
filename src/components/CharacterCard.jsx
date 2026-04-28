export default function CharacterCard({ name, image }) {
  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
    </div>
  );
}