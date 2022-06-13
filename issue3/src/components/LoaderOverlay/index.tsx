import Loader from '@assets/icons/loader.svg';
import './index.scss';

interface ILoaderOverlayProps {
  show?: boolean;
}

export const LoaderOverlay = ({ show }: ILoaderOverlayProps) => {
  return (
    <>
      {show && (
        <div className='loader__overlay'>
          <div className='loader__icon'>
            <img src={Loader} alt='Loading' />
          </div>
        </div>
      )}
    </>
  );
};
