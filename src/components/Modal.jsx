export const Modal = ({ isModal, imageLink }) => {
  return (
    <div className={isModal ? css.visible : css.hidden} class="overlay">
      <div class="modal">
        <img src={imageLink} alt="Image" />
      </div>
    </div>
  );
};
