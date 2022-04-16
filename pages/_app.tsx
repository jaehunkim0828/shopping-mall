import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import { useEffect } from 'react'

import { wrapper } from '../store';

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    try {
      if (!window.Kakao.isInitialized() && window.Kakao) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT);
      }
    } catch(e) { console.log(e)}

  }, [])
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}

export default wrapper.withRedux(MyApp)
