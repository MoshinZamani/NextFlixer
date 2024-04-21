import { profile } from "console";
import Link from "next/link";
import React from "react";

type Props = {
  watchlists: Watchlist[];
  onDelete: (watchlistId: number) => void;
  profileId: number;
};

function WatchlistsList({ watchlists, onDelete, profileId }: Props) {
  return (
    <div className="flex flex-col w-1/2 border-4 border-black h-60 mt-4 bg-gray-800 text-white p-4">
      <h1 className="text-center text-2xl mb-2">list of watchlists</h1>
      <div className="flex flex-col">
        {watchlists.map((watchlist) => (
          <div
            className="flex justify-around bg-white py-2 text-black mb-2 rounded hover:bg-green-200"
            key={watchlist.id}
          >
            <div key={watchlist.id}>
              <Link
                href={`/profile/${profileId}/watchlist/${watchlist.id}`}
                className="underline font-bold"
              >
                {watchlist.name}
              </Link>
            </div>
            <div>
              <Link
                href={`/movies/${watchlist.id}/${watchlist.name}/${profileId}`}
                className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Add movie
              </Link>
              <button
                onClick={() => onDelete(watchlist.id)}
                className="button bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchlistsList;
