import { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import NavBar from "../../components/NavBar";
import StyledLink from "../../components/StyledLink";
import EntryList from "../../components/EntryList";
import useUser from "../../data/useUser";

export default function Log() {
  const { user, loading, loggedOut, mutate } = useUser();
  // if logged out, redirect to the homepage
  useEffect(() => {
    if (loggedOut) {
      Router.replace("/");
    }
  }, [loggedOut]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="">
      <Head>
        <title>Your daily diary, in the cloud | Captain's Log</title>
      </Head>
      <NavBar />

      <main className="mt-10 flex flex-col items-center">
        <header className="mb-8 flex flex-col items-center">
          <h1 className="text-5xl text-center">X marks the spot</h1>
          <StyledLink
            label="Add a new entry for today"
            className="mt-8"
            href="/log/2021-04-03" // TODO - use today's date
          />
        </header>
        <EntryList />
      </main>
    </div>
  );
}
