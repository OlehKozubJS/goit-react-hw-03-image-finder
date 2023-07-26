export const Modal = ({ imageLink }) => {
  return (
    <div class="overlay">
      <div class="modal">
        <img src={imageLink} alt="Image" />
      </div>
    </div>
  );
};
