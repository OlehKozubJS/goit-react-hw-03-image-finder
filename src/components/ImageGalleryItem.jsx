import ImageGalleryItemCSS from './styles/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imageLink }) => {
  return (
    <li className={ImageGalleryItemCSS.ImageGalleryItem}>
      <img
        src={imageLink}
        alt=""
        className={ImageGalleryItemCSS.ImageGalleryItemImage}
      />
    </li>
  );
};
