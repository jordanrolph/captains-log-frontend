import Head from "next/head";
import Button from "../components/Button";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import StyledLink from "../components/StyledLink";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Captain's Log</title>
      </Head>
      <NavBar />
      <main className="flex flex-col md:items-center md:text-center items-start text-left">
        <header className="mt-16 md:mt-24">
          <h1 className="text-5xl md:text-6xl">Welcome to Captain's Log</h1>
          <p className="font-mono text-lg mt-5">
            Your daily diary, in the cloud (with a touch of pirate)
          </p>
        </header>
        <StyledLink
          label="Shiver me timbers!"
          href="/sign-up"
          className="mt-8 md:mt-12"
        />
      </main>
    </div>
  );
}
