import ButtonCSS from './styles/Button.module.css';
import ImageFinderCSS from './styles/ImageFinder.module.css';

export const Button = ({ hasJustEntered, isLoadMore, clickFunction }) => {
  return (
    <div
      className={`${ButtonCSS.ButtonContainer} ${
        hasJustEntered ? ImageFinderCSS.visible : ImageFinderCSS.hidden
      }`}
    >
      {isLoadMore ? (
        <button onClick={clickFunction} className={ButtonCSS.Button}>
          Load more
        </button>
      ) : (
        <div>We're sorry, but you've reached the end of search results.</div>
      )}
    </div>
  );
};
