import css from "./ImageCard.module.css";

export default function ImageCard({ item, modal }) {
  const onHandleClick = () => {
    modal(item);
  };

  return (
    <div className={css.item} onClick={onHandleClick}>
      <img
        className={css.image}
        src={item.urls.small}
        alt={item.alt_description}
        height={200}
      />
      <p className={css.title}>
        Description: <span className={css.text}>{item.alt_description}</span>
      </p>

      <p className={css.title}>
        Likes: <span className={css.text}>{item.likes}</span>
      </p>

      <p className={css.title}>
        Author: <span className={css.text}>{item.user.name}</span>
      </p>
    </div>
  );
}
