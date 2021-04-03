import Head from "next/head";
import Button from "../components/Button";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import StyledLink from "../components/StyledLink";

export default function SignUp() {
  const handleSignUp = () => null;
  return (
    <div className="">
      <Head>
        <title>Captain's Log | Sign Up</title>
      </Head>
      <NavBar />

      <main className="mt-16 flex flex-col items-center">
        <h1 className="text-5xl text-center">Ahoy there Scallywag!</h1>
        <p className="font-mono mt-3">
          Create an account to start your own diary
        </p>

        <form onSubmit={handleSignUp} className="mt-4 mb-16">
          <Input
            required
            placeholder="Blackbeard"
            id="firstName"
            type="text"
            label="First Name"
          />
          <Input
            required
            placeholder="captain@annes-revenge.com"
            id="email"
            type="email"
            label="Email"
          />
          <Input
            required
            placeholder="••••••"
            id="password"
            type="password"
            label="Password"
          />
          <Button label="Go on account" className="mt-6" type="submit" />
        </form>
      </main>
    </div>
  );
}
