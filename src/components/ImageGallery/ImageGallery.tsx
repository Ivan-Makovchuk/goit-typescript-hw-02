import { Image } from "../../App";
import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

type Props = {
  data: Image[];
  onImgClick: (imgSrc: string, altText: string) => void;
};

const ImageGallery = ({ data, onImgClick }: Props) => {
  return (
    data.length > 0 && (
      <ul className={css.imgList}>
        {data.map(({ urls: { small, regular }, id, likes, description }) => (
          <li key={id} className={css.imgItem}>
            <ImageCard
              url={small}
              id={id}
              alt={description ?? ""}
              onClick={() => {
                onImgClick(regular, description ?? "");
              }}
            />
            <p>Likes: {likes}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default ImageGallery;
