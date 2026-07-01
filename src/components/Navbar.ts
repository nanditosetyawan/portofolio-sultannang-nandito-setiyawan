import { NavbarDesktop } from './NavbarDesktop';
import { NavbarMobile } from './NavbarMobile';

export const Navbar = (): string => {
  return `
    ${NavbarDesktop()}
    ${NavbarMobile()}
  `;
};
