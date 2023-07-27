import css from './styles/styles.module.css';
import ButtonCSS from './styles/Button.module.css';

export const Button = ({ isLoadMore, clickFunction }) => {
  return (
    <div className={isLoadMore ? css.visible : css.hidden}>
      <button onClick={clickFunction} className={ButtonCSS.Button}>
        Load more
      </button>
    </div>
  );
};
