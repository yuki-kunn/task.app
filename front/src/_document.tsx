import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

import { APP_DATA } from '@/constants/appdata'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang={APP_DATA.LOCALE}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
