// NavLinkT.tsx
import type { PropsWithChildren } from "react";
import { NavLink, type NavLinkProps } from "react-router";

export const NavLinkT = ({
  children,
  ...rest
}: PropsWithChildren<NavLinkProps>) => {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (!document.startViewTransition) return;

    // Tıkladığımızda anında sayfa geçişi yapmasın diye prevent ediyoruz
    e.preventDefault();
    // Gidilecek sayfanın linkini alıyoruz
    const href = (e.currentTarget as HTMLAnchorElement).href;

    document.startViewTransition(() => {
      // Ileri geri butonları çalışsın diye history state'e link eklenir
      window.history.pushState({}, "", href);

      window.dispatchEvent(new PopStateEvent("popstate"));
    });
  };

  return (
    // Normal Navlink sadece onClick ekledik
    <NavLink {...rest} onClick={handleClick}>
      {children}
    </NavLink>
  );
};
