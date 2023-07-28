import { ImageGalleryItem } from './ImageGalleryItem';
import ImageGalleryCSS from './styles/ImageGallery.module.css';

export const ImageGallery = ({ imageGalleryItems, itemClickFunction }) => {
  return (
    <ul className={ImageGalleryCSS.ImageGallery}>
      {imageGalleryItems.map(imageGalleryItem => (
        <ImageGalleryItem
          key={imageGalleryItem.id}
          largeImageLink={imageGalleryItems.largeImageURL}
          imageLink={imageGalleryItem.webformatURL}
          clickFunction={itemClickFunction}
        />
      ))}
    </ul>
  );
};
