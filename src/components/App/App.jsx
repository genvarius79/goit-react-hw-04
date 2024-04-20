import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";
import Loader from "../Loader/Loader.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { useEffect, useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import { fetchData } from "../../data-api";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");
import css from "./App.module.css";

export default function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [likes, setLikes] = useState("");
  const [author, setAuthor] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setItems([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = (item) => {
    setShowModal(true);
    setModalUrl(item.urls.regular);
    setModalAlt(item.alt_description);
    setLikes(item.likes);
    setAuthor(item.user.name);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
      <ImageModal />
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage />}

      {items.length > 0 && (
        <ImageGallery items={items} modal={handleOpenModal} />
      )}

      {isLoading && <Loader />}
      {items.length > 0 && !isLoading && (
        <LoadMoreBtn LoadMore={handleLoadMore} />
      )}
      {items.length > 0 && (
        <ImageModal
          modal={showModal}
          onClose={handleCloseModal}
          url={modalUrl}
          alt={modalAlt}
          likes={likes}
          author={author}
        />
      )}
    </div>
  );
}
