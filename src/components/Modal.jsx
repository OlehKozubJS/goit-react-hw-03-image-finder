export const Modal = ({ imageLink, imageTitle }) => {
  return (
    <div class="overlay">
      <div class="modal">
        <img src={imageLink} alt={imageTitle} />
      </div>
    </div>
  );
};
