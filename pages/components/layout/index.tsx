import { FC } from 'react';
import styles from './index.module.scss';
import { INavBarProps } from '@/pages/components/navbar';
import { IFooterProps } from '@/pages/components/footer';
import NavBar from '@/pages/components/navbar';
import Footer from '@/pages/components/footer';

export interface ILayoutProps {
  navbarData: INavBarProps;
  footerData: IFooterProps;
}

const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
  navbarData,
  footerData,
  children,
}) => {
  return (
    <div className={styles.layout}>
      <NavBar {...navbarData} />
      <main className={styles.main}>{children}</main>
      <Footer {...footerData} />
    </div>
  )
}

export default Layout;
