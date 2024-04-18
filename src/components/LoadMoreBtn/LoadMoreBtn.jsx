import "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ LoadMore }) {
  return (
    <>
      <button onClick={LoadMore}>Load more items</button>
    </>
  );
}
