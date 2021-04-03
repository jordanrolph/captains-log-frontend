import React from "react";
import PropTypes from "prop-types";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { API } from "../constants/api";
import EntryCard from "./EntryCard";

const EntryList = () => {
  // Fetch all of the user's diary entries
  const { data, error } = useSWR(`${API}/entries`, fetcher);

  if (error)
    return (
      <div>
        <p className="font-mono text-sm">
          Sorry, there was an error fetching your entries.
        </p>
      </div>
    );

  if (!data) {
    return (
      <div className="mt-8">
        <p className="font-mono text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      {data.map((entry) => {
        return <EntryCard key={entry.entryId} entry={entry} />;
      })}
    </div>
  );
};

export default EntryList;

EntryList.propTypes = {};
