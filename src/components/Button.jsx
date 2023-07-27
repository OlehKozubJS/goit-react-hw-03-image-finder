import ButtonCSS from './styles/Button.module.css';

export const Button = ({ hasJustEntered, isLoadMore, clickFunction }) => {
  return (
    <div
      className={`${ButtonCSS.ButtonContainer} ${
        hasJustEntered ? ButtonCSS.hidden : ButtonCSS.visible
      }`}
    >
      {isLoadMore ? (
        <button onClick={clickFunction} className={ButtonCSS.Button}>
          Load more
        </button>
      ) : (
        <div className={ButtonCSS.NoMoreMessage}>
          We're sorry, but you've reached the end of search results.
        </div>
      )}
    </div>
  );
};
