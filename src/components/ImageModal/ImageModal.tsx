import css from "../ImageModal/ImageModal.module.css";
import React from "react";
import ReactModal from "react-modal";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  imgSrc: string;
  altText: string;
};

const ImageModal = ({ isOpen, onRequestClose, imgSrc, altText }: Props) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img src={imgSrc} alt={altText} className={css.modalImage} />
    </ReactModal>
  );
};

export default ImageModal;
