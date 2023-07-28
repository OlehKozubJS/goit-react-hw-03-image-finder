import ImageGalleryItemCSS from './styles/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  largeImageLink,
  imageLink,
  clickFunction,
}) => {
  return (
    <li
      className={ImageGalleryItemCSS.ImageGalleryItem}
      onClick={() => clickFunction(imageLink)}
    >
      <img
        src={largeImageLink}
        alt=""
        className={ImageGalleryItemCSS.ImageGalleryItemImage}
      />
    </li>
  );
};
