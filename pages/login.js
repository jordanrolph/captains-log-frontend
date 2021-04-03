import { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import Button from "../components/Button";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import StyledLink from "../components/StyledLink";
import useUser from "../data/useUser";
import { login } from "../libs/auth";

export default function Login() {
  const { user, mutate } = useUser();

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    mutate(); // revalidate the SWR after logging in
  };

  // if logged in, redirect to the log page
  useEffect(() => {
    if (user) {
      Router.replace("/log");
    }
  }, [user]);

  return (
    <div className="">
      <Head>
        <title>Captain's Log | Sign Up</title>
      </Head>
      <NavBar />

      <main className="mt-16 flex flex-col items-center">
        <h1 className="text-5xl text-center">Ahoy there Scallywag!</h1>
        <p className="font-mono mt-3">Sign in to your existing account</p>

        <form onSubmit={handleLogin} className="mt-4">
          <Input
            placeholder="captain@annes-revenge.com"
            label="Email"
            id="email"
            type="email"
            required
          />
          <Input
            placeholder="••••••"
            label="Password"
            id="password"
            type="password"
            required
          />
          <Button
            label="Batten down the hatches"
            className="mt-6"
            type="submit"
          />
        </form>
        <p className="font-mono mt-16 mb-12">
          Don't have an account?{" "}
          <StyledLink
            variant="link"
            label="Create one"
            href="/sign-up"
            className="inline-flex"
          />
        </p>
      </main>
    </div>
  );
}
