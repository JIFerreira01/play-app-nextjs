'use client';
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { withAccessToken } from "@/services/auth";

const PlayerComponent = dynamic(() => import("../components/Player"),{
  ssr: false,
});

const PlaylistComponent = dynamic(() => import("../components/Playlist"),{
  ssr: false,
})



export function Home(props: any) {
  return (
        <section className="grid grid-rows-1 grid-cols-7 gap-x-5 w-8/12 h-96 ">
          <div className="col-span-5">
            {<PlaylistComponent />}
          </div>
          <div className="col-span-2">
            {<PlayerComponent />}
          </div>
        </section>
  )
}

export default withAccessToken(Home);
