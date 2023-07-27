import ImageFinderCSS from './styles/ImageFinder.module.css';
import ButtonCSS from './styles/Button.module.css';

export const Button = ({ isLoadMore, clickFunction }) => {
  return (
    <div
      className={isLoadMore ? ImageFinderCSS.visible : ImageFinderCSS.hidden}
    >
      <button onClick={clickFunction} className={ButtonCSS.Button}>
        Load more
      </button>
    </div>
  );
};
