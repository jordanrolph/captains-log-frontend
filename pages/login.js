import Head from "next/head";
import Button from "../components/Button";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import StyledLink from "../components/StyledLink";
import Link from "next/link";

export default function Login() {
  const handleLogin = () => null;
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
          />
          <Input
            placeholder="••••••"
            label="Password"
            id="password"
            type="password"
          />
          <Button label="Batten down the hatches" className="mt-6" />
        </form>
        <p className="font-mono mt-16 mb-12">
          Don't have an account?{" "}
          <Link href="/sign-up">
            <a className="underline focus:outline-dark hover:outline-dark">
              Create one
            </a>
          </Link>
        </p>
      </main>
    </div>
  );
}
