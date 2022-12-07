import '../styles/globals.css'
import { ILayoutProps } from '@/pages/components/layout';
import Layout from '@/pages/components/layout';
import type {AppProps} from 'next/app'

const App = (data: AppProps & ILayoutProps) => {
  const { Component, pageProps, navbarData, footerData } = data;
  return (
    <Layout navbarData={navbarData} footerData={footerData}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;
