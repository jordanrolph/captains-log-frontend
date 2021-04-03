import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import Footer from "../components/Footer";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
            rel="stylesheet"
          ></link>
          {/* Favicons */}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#041D35" />
          {/* Open Graph */}
          <meta property="og:title" content="Captain's Log" />
          <meta
            property="og:description"
            content="Your daily diary, in the cloud (with a touch of pirate)."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://captainslog.xyz" />
          <meta
            property="og:image"
            content="https://captainslog.xyz/public/og_image.png"
          />
        </Head>
        <body className="bg-light bg-pattern-light bg-repeat text-dark font-serif">
          <div className="min-h-screen flex flex-col">
            <div className="flex-grow container mx-auto">
              <div className="px-4">
                <Main />
                <NextScript />
              </div>
            </div>
            <Footer />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
