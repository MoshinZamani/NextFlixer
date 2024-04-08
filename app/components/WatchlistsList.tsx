import Link from "next/link";
import React from "react";

type Props = {
  watchlists: Watchlist[];
  onDelete: (watchlistId: number) => void;
  profileId: number;
};

function WatchlistsList({ watchlists, onDelete, profileId }: Props) {
  return (
    <div className="flex flex-col">
      {watchlists.map((watchlist) => (
        <>
          <div key={watchlist.id}>
            <Link href={`/profile/${profileId}/watchlist/${watchlist.id}`}>
              {watchlist.name}
            </Link>
          </div>
          <button onClick={() => onDelete(watchlist.id)}>Delete</button>
        </>
      ))}
    </div>
  );
}

export default WatchlistsList;
