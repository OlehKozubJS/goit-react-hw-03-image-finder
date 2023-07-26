export const Button = ({ isLoading, clickFunction }) => {
  return (
    <div className={isLoading ? css.visible : css.hidden}>
      <button onClick={clickFunction}>Load more</button>
    </div>
  );
};
