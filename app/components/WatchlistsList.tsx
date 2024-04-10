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
        <div className="flex justify-between" key={watchlist.id}>
          <div key={watchlist.id}>
            <Link
              href={`/profile/${profileId}/watchlist/${watchlist.id}/${watchlist.name}`}
            >
              {watchlist.name}
            </Link>
          </div>
          <div>
            <Link
              href={`/movies/${watchlist.id}/${watchlist.name}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              +
            </Link>
            <button
              onClick={() => onDelete(watchlist.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WatchlistsList;
