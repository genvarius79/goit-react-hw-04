import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";

export default function ImageGallery({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li className={css.item} key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}
