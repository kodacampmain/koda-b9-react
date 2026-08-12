/**
 * Component for a single character
 * @param {Object} props
 * @param {String} props.img
 * @param {String} props.name
 * @param {String} props.status
 * @returns 
 */
function Character({ img, name, status }) {
  return (
    <article>
      <img src={img} alt={name} />
      <p className="font-bold">{name}</p>
      <p>{status}</p>
    </article>
  );
}

export default Character;
