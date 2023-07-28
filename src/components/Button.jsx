import ButtonCSS from './styles/Button.module.css';

export const Button = ({ clickFunction }) => {
  return (
    <div className={ButtonCSS.ButtonContainer}>
      <button onClick={clickFunction} className={ButtonCSS.Button}>
        Load more
      </button>
    </div>
  );
};
