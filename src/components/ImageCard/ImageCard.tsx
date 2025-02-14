import css from "../ImageCard/ImageCard.module.css";

type Props = {
  url: string;
  id: string;
  alt?: string;
  onClick: () => void;
};

const ImageCard = ({ url, id, alt, onClick }: Props) => {
  return (
    <div>
      <img src={url} alt={alt} id={id} className={css.imgs} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
