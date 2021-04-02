import { useEffect, useReducer } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import Button from "../components/Button";
import Input from "../components/Input";
import { API } from "../constants/api";
import NavBar from "../components/NavBar";
import StyledLink from "../components/StyledLink";
import EntryCard from "../components/EntryCard";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const types = {
  FETCHING: "FETCHING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.FETCHING:
      return {
        ...initialState,
        loading: true,
      };
    case types.SUCCESS:
      return {
        ...initialState,
        data: action.payload,
      };
    case types.ERROR:
      return {
        ...initialState,
        error: action.payload,
      };
    default:
      return initialState;
  }
};

export default function Log() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch all of the user's diary entries
  useEffect(() => {
    dispatch({ type: types.FETCHING });

    axios
      .get(`${API}/entries`)
      .then((response) => {
        dispatch({ type: types.SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: types.ERROR, payload: error });
      });
  }, []);

  return (
    <div className="">
      <Head>
        <title>Captain's Log | Sign Up</title>
      </Head>
      <NavBar />

      <main className="mt-12 flex flex-col items-center">
        <header className="mt-12 flex flex-col items-center">
          <h1 className="text-5xl text-center">X marks the spot</h1>
          <Button label="Add a new entry for today" className="mt-8" />
        </header>
        <div className="mt-8">
          {state.loading && <p className="font-mono text-sm">Loading...</p>}
          {state.error && (
            <p className="font-mono text-sm">
              Sorry, there was an error fetching your entries.
            </p>
          )}
          {state.data &&
            state.data.map((entry) => {
              return <EntryCard key={entry.entryId} entry={entry} />;
            })}
        </div>
      </main>
    </div>
  );
}
