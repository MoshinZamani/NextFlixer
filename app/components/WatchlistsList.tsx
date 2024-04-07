import React from "react";

type Props = {
  watchlists: Watchlist[];
};

function WatchlistsList({ watchlists }: Props) {
  return (
    <div>
      {watchlists.map((watchlist) => (
        <li key={watchlist.id}>{watchlist.name}</li>
      ))}
    </div>
  );
}

export default WatchlistsList;
