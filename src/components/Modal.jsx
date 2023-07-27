import ModalCSS from './styles/Modal.module.css';

export const Modal = ({ isModal, clickFunction, imageLink }) => {
  return (
    <div
      /*className={isModal ? css.visible : css.hidden}*/
      onClick={clickFunction}
      class={ModalCSS.Overlay}
    >
      <div class={ModalCSS.Modal}>
        <img src={imageLink} alt="" />
      </div>
    </div>
  );
};
