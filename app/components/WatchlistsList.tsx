import React from "react";

type Props = {
  watchlists: Watchlist[];
  onDelete: (watchlistId: number) => void;
};

function WatchlistsList({ watchlists, onDelete }: Props) {
  return (
    <div className="flex flex-col">
      {watchlists.map((watchlist) => (
        <>
          <div key={watchlist.id}>{watchlist.name}</div>
          <button onClick={() => onDelete(watchlist.id)}>Delete</button>
        </>
      ))}
    </div>
  );
}

export default WatchlistsList;
