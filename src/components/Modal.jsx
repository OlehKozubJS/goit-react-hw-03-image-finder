export const Modal = ({ imageLink }) => {
  return (
    <div className={isLoadMore ? css.visible : css.hidden} class="overlay">
      <div class="modal">
        <img src={imageLink} alt="Image" />
      </div>
    </div>
  );
};
