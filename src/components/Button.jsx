import ButtonCSS from './styles/Button.module.css';

export const Button = ({ isLoadMore, clickFunction }) => {
  return (
    <div>
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
