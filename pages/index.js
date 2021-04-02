import Head from "next/head";
import Button from "../components/Button";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import StyledLink from "../components/StyledLink";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Captain's Log</title>
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
      </Head>

      <NavBar />
      <main className="px-4 flex flex-col md:items-center md:text-center items-start text-left container mx-auto flex-grow">
        <header className="mt-16">
          <h1 className="text-5xl md:text-6xl">Welcome to Captain's Log</h1>
          <p className="font-mono text-lg mt-5">
            Your daily diary, in the cloud (with a touch of pirate)
          </p>
        </header>
        <StyledLink
          label="Shiver me timbers!"
          href="/sign-up"
          className="mt-10"
        />
      </main>
      <Footer />
    </div>
  );
}
