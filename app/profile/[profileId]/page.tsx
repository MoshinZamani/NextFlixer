"use client";
import CreateWatchlistForm from "@/app/components/CreateWatchlistForm";
import WatchlistsList from "@/app/components/WatchlistsList";
import { useState } from "react";

type Props = {
  params: { profileId: number };
};

type NewWatchListData = {
  name: string;
  profileId: number;
};

async function DisplayProfile({ params: { profileId } }: Props) {
  const [watchlists, setWatchlists] = useState<Watchlist[]>();
  const [Idprofile, setIdProfile] = useState<number>(0);
  //   try {
  //     const watchlistsArrayData = await fetch(
  //       `/api/watchlist?profileId=${profileId}`
  //     );
  //     const watchlistsArray = await watchlistsArrayData.json();
  //     setIdProfile(profileId);
  //     setWatchlists(watchlistsArray);
  //   } catch (err) {
  //     console.log("No profiles found");
  //     setIdProfile(0);
  //     setWatchlists([]);
  //   }

  const handleWatchlistCreate = async (newWatchlistData: NewWatchListData) => {
    const res = await fetch("/api/watchlists/", {
      // Adjust this URL to your API endpoint
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newWatchlistData),
    });
    // if (res.ok) {
    //   const profilesArrayData = await fetch(`/api/profiles?userId=${userId}`);
    //   const profilesArray = await profilesArrayData.json();
    //   setProfiles(profilesArray);
    // }
  };

  return (
    <div>
      <CreateWatchlistForm
        onCreate={handleWatchlistCreate}
        profileId={profileId}
      />
      {/* <WatchlistsList watchlists={watchlists} /> */}
    </div>
  );
}

export default DisplayProfile;
