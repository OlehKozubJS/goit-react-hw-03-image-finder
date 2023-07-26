export const Button = ({ isLoading }) => {
  return (
    <div className={isLoading ? css.visible : css.hidden}>
      <button>Load more</button>
    </div>
  );
};
