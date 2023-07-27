import ModalCSS from './styles/Modal.module.css';

export const Modal = ({ clickFunction, imageLink }) => {
  return (
    <div
      /*className={isModal ? css.visible : css.hidden}*/
      onClick={clickFunction}
      clasName={ModalCSS.Overlay}
    >
      <div className={ModalCSS.Modal}>
        <img src={imageLink} alt="" />
      </div>
    </div>
  );
};
