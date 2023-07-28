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
/**
        {!this.state.isLoadMore && ( <div className={ButtonCSS.NoMoreMessage}>
          We're sorry, but you've reached the end of search results.
        </div>)}
 */
