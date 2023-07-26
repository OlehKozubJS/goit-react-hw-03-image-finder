import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ imageGalleryItems }) => {
  return (
    <ul className="gallery">
      {imageGalleryItems.map(imageGalleryItem => (
        <ImageGalleryItem
          key={imageGalleryItem.id}
          imageLink={imageGalleryItem.webformatURL}
        />
      ))}
    </ul>
  );
};
