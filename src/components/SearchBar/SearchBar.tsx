import toast, { Toaster } from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";
import React, { FormEvent, useState, ChangeEvent } from "react";
import { Image } from "../../App";

type Props = {
  search: (query: string) => void;
  resetData: (data: Image[]) => void;
};

const SearchBar: React.FC<Props> = ({ search, resetData }) => {
  const [value, setValue] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (value.trim() === "") {
      toast("Please enter some text!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    search(value.trim());
    resetData([]);
    setValue("");
    e.currentTarget.reset();
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.formInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
        <Toaster />
      </form>
    </header>
  );
};

export default SearchBar;
