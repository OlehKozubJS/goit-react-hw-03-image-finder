export const ImageGalleryItem = ({ imageLink, imageTitle }) => {
  return (
    <li class="gallery-item">
      <img src={imageLink} alt={imageTitle} />
    </li>
  );
};
