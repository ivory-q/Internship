import './index.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <p className='footer__copyright'>
          Copyright {new Date().getFullYear()}, {process.env.APP_TITLE}
        </p>
      </div>
    </div>
  );
};
