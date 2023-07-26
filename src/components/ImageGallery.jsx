import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ imageGalleryItems }) => {
  return (
    <ul class="gallery">
      {imageGalleryItems.map(imageGalleryItem => (
        <ImageGalleryItem
          imageId={imageGalleryItem.id}
          imageLink={imageGalleryItem.webformatURL}
        />
      ))}
    </ul>
  );
};
