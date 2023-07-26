export const ImageGalleryItem = ({ imageLink }) => {
  return (
    <li class="gallery-item">
      <img src={imageLink} alt="Image" />
    </li>
  );
};
