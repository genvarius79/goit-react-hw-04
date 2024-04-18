import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.elements.query.value === "") {
      toast("Text must be entered to search for images!!!");
    }

    onSubmit(form.elements.query.value);
    form.reset();
  };

  return (
    <header>
      <Toaster
        toastOptions={{
          className: css.toaster,
        }}
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
