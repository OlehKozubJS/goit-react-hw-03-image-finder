export const Loader = ({ isLoading }) => {
  return (
    <div className={isLoading ? css.visible : css.hidden}>
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
};
