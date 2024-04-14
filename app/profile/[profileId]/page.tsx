"use client";
import CreateWatchlistForm from "@/app/components/CreateWatchlistForm";
import WatchlistsList from "@/app/components/WatchlistsList";
import { useEffect, useState } from "react";

type Props = {
  params: { profileId: number };
};

type NewWatchListData = {
  profileId: number;
};

function DisplayProfile({ params: { profileId } }: Props) {
  const [watchlists, setWatchlists] = useState<Watchlist[]>([]);
  const [Idprofile, setIdProfile] = useState<number>(0);

  const fetchWatchlists = async () => {
    try {
      const res = await fetch(`/api/watchlists?profileId=${profileId}`);
      const watchlistsArray = await res.json();
      setWatchlists(watchlistsArray);
      setIdProfile(profileId);
    } catch (error) {
      console.error(error);
      setIdProfile(0);
      setWatchlists([]);
    }
  };
  useEffect(() => {
    fetchWatchlists();
  }, []);

  const handleWatchlistCreate = async (newWatchlistData: NewWatchListData) => {
    const res = await fetch("/api/watchlists/", {
      // Adjust this URL to your API endpoint
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWatchlistData),
    });
    if (res.ok) {
      const watchlistsArrayData = await fetch(
        `/api/watchlists?profileId=${profileId}`
      );
      const watchlistsArray = await watchlistsArrayData.json();
      setWatchlists(watchlistsArray);
    }
  };

  const handleWatchlistDelete = async (watchlistId: number) => {
    const res = await fetch(`/api/watchlists?watchlistId=${watchlistId}`, {
      // Adjust this URL to your API endpoint
      method: "DELETE",
    });
    if (res.ok) {
      const watchlistsArrayData = await fetch(
        `/api/watchlists?profileId=${profileId}`
      );
      const watchlistsArray = await watchlistsArrayData.json();
      setWatchlists(watchlistsArray);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <CreateWatchlistForm
        onCreate={handleWatchlistCreate}
        profileId={profileId}
      />
      <WatchlistsList
        watchlists={watchlists}
        onDelete={handleWatchlistDelete}
        profileId={profileId}
      />
    </div>
  );
}

export default DisplayProfile;
