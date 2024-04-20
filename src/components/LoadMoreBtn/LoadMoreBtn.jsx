import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ LoadMore }) {
  const handleClick = () => {
    // тут виконуєш код
  };

  return (
    <>
      <button className={css.btn} onClick={LoadMore}>
        Load more items
      </button>
    </>
  );
}
