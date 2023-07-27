import ModalCSS from './styles/Modal.module.css';

export const Modal = ({ clickFunction, keyDownFunction, imageLink }) => {
  return (
    <div
      /*className={isModal ? css.visible : css.hidden}*/
      onClick={clickFunction}
      onKeyDown={keyDownFunction}
      className={ModalCSS.Overlay}
    >
      <div className={ModalCSS.Modal}>
        <img src={imageLink} alt="" />
      </div>
    </div>
  );
};
