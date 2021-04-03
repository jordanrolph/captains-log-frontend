import { useEffect } from "react";
import Head from "next/head";
import Router from "next/router";
import NavBar from "../../components/NavBar";
import PropTypes from "prop-types";
import useUser from "../../data/useUser";

const EntryDetail = ({ entryId }) => {
  const { user, loading, loggedOut, mutate } = useUser();
  // if logged out, redirect to the homepage
  useEffect(() => {
    if (loggedOut) {
      Router.replace("/");
    }
  }, [loggedOut]);

  return (
    <div className="">
      <Head>
        <title>Your daily diary, in the cloud | Captain's Log</title>
      </Head>
      <NavBar />

      <main className="mt-10 flex flex-col items-center">Entry Detail</main>
    </div>
  );
};

export default EntryDetail;

EntryDetail.propTypes = {};
