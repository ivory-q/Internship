import { ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import './index.scss';

interface IUnstyledLinkProps extends LinkProps {
  children?: ReactNode;
}

export const UnstyledLink = ({
  children,
  className,
  ...props
}: IUnstyledLinkProps) => {
  return (
    <Link className={`unstyled ${className}`} {...props}>
      {children}
    </Link>
  );
};
