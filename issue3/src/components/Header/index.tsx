import Logo from '@assets/logo.svg';
import { UnstyledLink } from '../UnstyledLink';
import './index.scss';

export const Header = () => {
  return (
    <div className='header'>
      <UnstyledLink to='/' className='header__container'>
        <img src={Logo} alt='site logo' className='header__logo' />
        <h1 className='header__title'>{process.env.APP_TITLE}</h1>
      </UnstyledLink>
    </div>
  );
};
