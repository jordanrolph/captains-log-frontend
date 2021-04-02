import Head from "next/head";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="">
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
      <main className="px-4">
        <header className="mt-8">
          <h1 className="font-serif text-4xl">Welcome to Captain's Log</h1>
          <p className="font-mono text-lg mt-3">
            Your daily diary, in the cloud (with a touch of pirate)
          </p>
        </header>
        <Button label="Shiver me timbers!" className="mt-6" />
      </main>
    </div>
  );
}
