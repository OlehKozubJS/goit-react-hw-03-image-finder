import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <InfinitySpin width="300" color="#3f51b5" />
    </div>
  );
};
