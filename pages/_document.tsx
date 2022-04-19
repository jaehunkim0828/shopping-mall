import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html>
    <Head>
        <script type="text/javascript" src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" charSet="utf-8"></script>
        <script
            defer
            src="https://developers.kakao.com/sdk/js/kakao.js"
        ></script>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        <meta name='google-signin-client_id' content='276951531614-70ik3cav652m0mrlsuvfnqfin0mcim3f.apps.googleusercontent.com'></meta>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document