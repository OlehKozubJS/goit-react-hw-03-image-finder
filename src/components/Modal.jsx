export const Modal = ({ isModal, clickFunction, imageLink }) => {
  return (
    <div
      className={isModal ? css.visible : css.hidden}
      onClick={clickFunction}
      class="overlay"
    >
      <div class="modal">
        <img src={imageLink} alt="Image" />
      </div>
    </div>
  );
};
