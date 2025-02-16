import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./components/api-request";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

export type Image = {
  id: string;
  likes: number;
  description: string | null;
  urls: {
    small: string;
    regular: string;
  };
};

function App() {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLastPage, setIsLastPage] = useState<boolean>(true);

  const [modal, setModal] = useState<{ isOpen: boolean; imgSrc: string; altText: string }>(
    { isOpen: false, imgSrc: "", altText: "" }
  );

  const openModal = (imgSrc: string, altText: string): void => {
    setModal({ isOpen: true, imgSrc, altText });
  };

  const closeModal = (): void => {
    setModal({ isOpen: false, imgSrc: "", altText: "" });
  };

  useEffect(() => {
    const fetchRequest = async (): Promise<void> => {
      if (!query.trim()) return;

      try {
        setIsLoad(true);
        setIsError(false);
        setIsLastPage(true);

        const response = await fetchImages(query, page);
        setData((prev) => [...prev, ...response.results]);

        if (response.total_pages === page) {
          setIsLastPage(false);
        }
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoad(false);
      }
    };

    fetchRequest();
  }, [query, page]);

  return (
    <>
      <SearchBar search={setQuery} resetData={setData} />
      <ImageGallery data={data} onImgClick={openModal} />
      <Loader load={isLoad} />
      {isError && <ErrorMessage />}
      {data.length > 0 && isLastPage && (
        <LoadMoreBtn changePage={() => setPage((prev) => prev + 1)} />
      )}
      <ImageModal
        isOpen={modal.isOpen}
        onRequestClose={closeModal}
        imgSrc={modal.imgSrc}
        altText={modal.altText}
      />
    </>
  );
}

export default App;