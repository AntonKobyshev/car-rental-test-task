import { Watch } from 'react-loader-spinner';
export function Loader() {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#3470FF"
      ariaLabel="watch-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '999',
      }}
      wrapperClass="blocks-wrapper"
    />
  );
}
