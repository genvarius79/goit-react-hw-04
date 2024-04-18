import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
// import ImageCard from "../ImageCard/ImageCard.jsx";
// import ImageModal from "../ImageModal/ImageModal.jsx";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import { fetchData } from "../../data-api";
import css from "./App.module.css";

// export default function App() {
//   return (
//     <>
//       <p>APP</p>
//
//       <ImageCard></ImageCard>
//       <ImageGallery></ImageGallery>
//       <ImageModal></ImageModal>
//
//
//       <SearchBar></SearchBar>
//     </>
//   );
// }

export default function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setItems([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getItems() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchData(query, page);
        setItems((prevItems) => {
          return [...prevItems, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getItems();
  }, [page, query]);

  return (
    <div className={css.container}>
      <h1>HTTP requests in React</h1>

      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage />}

      {items.length > 0 && <ImageGallery items={items} />}

      {isLoading && <Loader />}
      {items.length > 0 && !isLoading && (
        <LoadMoreBtn LoadMore={handleLoadMore} />
      )}
    </div>
  );
}
