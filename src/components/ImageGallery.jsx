import { ImageGalleryItem } from './ImageGalleryItem';
import ImageGalleryCSS from './styles/ImageGallery.module.css';

export const ImageGallery = ({ imageGalleryItems }) => {
  return (
    <ul className={ImageGalleryCSS.ImageGallery}>
      {imageGalleryItems.map(imageGalleryItem => (
        <ImageGalleryItem
          key={imageGalleryItem.id}
          imageLink={imageGalleryItem.webformatURL}
        />
      ))}
    </ul>
  );
};
