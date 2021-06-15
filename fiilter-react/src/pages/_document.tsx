import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

const APP_NAME = 'FIIlter React';
const APP_DESCRIPTION =
  'Um gerenciador para Fundos de Investimento Imobiliario';

export default class extends Document {
  static getInitialProps = async (
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> => {
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => ({
          ...materialSheets.collect(<App {...props} />),
        }),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: <>{materialSheets.getStyleElement()}</>,
    };
  };

  render(): JSX.Element {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='application-name' content={APP_NAME} />
          <title>{APP_NAME}</title>
          <meta name='description' content={APP_DESCRIPTION} />
          <link rel='icon' href='/favicon.ico' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
