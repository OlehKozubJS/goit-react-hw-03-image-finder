export const ImageGalleryItem = ({ imageLink }) => {
  return (
    <li className="gallery-item">
      <img src={imageLink} alt="" />
    </li>
  );
};
