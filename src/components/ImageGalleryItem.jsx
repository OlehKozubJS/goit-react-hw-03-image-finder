import ImageGalleryItemCSS from './styles/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imageLink, clickFunction }) => {
  return (
    <li
      className={ImageGalleryItemCSS.ImageGalleryItem}
      onClick={() => clickFunction(imageLink)}
    >
      <img
        src={imageLink}
        alt=""
        className={ImageGalleryItemCSS.ImageGalleryItemImage}
      />
    </li>
  );
};
