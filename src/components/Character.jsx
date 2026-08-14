import { Link } from "react-router";
import slugify from "slugify";
/**
 * Component for a single character
 * @param {Object} props
 * @param {String} props.img
 * @param {String} props.name
 * @param {String} props.status
 * @param {Number} props.id
 * @returns
 */
function Character({ img, name, status, id }) {
  return (
    <article>
      <Link to={`/rick/${id}/${slugify(name)}`}>
        <img src={img} alt={name} />
        <p className="font-bold">{name}</p>
        <p>{status}</p>
      </Link>
    </article>
  );
}

export default Character;
