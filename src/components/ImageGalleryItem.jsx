export const ImageGalleryItem = ({ imageId, imageLink }) => {
  return (
    <li class="gallery-item" key={imageId}>
      <img src={imageLink} alt="Image" />
    </li>
  );
};
