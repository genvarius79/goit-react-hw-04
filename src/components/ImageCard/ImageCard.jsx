import css from "./ImageCard.module.css";

export default function ImageCard({ item }) {
  return (
    <div className={css.item}>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.alt_description}
        height={200}
      />
      <p className={css.description}>Description: {item.alt_description}</p>
      <p className={css.likes}>Likes: {item.likes}</p>
      <p className={css.name}>Author: {item.user.name}</p>
      {console.log(item)}
    </div>
  );
}
