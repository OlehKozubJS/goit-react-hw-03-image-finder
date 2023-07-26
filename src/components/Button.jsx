import css from './styles/styles.module.css';

export const Button = ({ isLoadMore, clickFunction }) => {
  return (
    <div className={isLoadMore ? css.visible : css.hidden}>
      <button onClick={clickFunction}>Load more</button>
    </div>
  );
};
