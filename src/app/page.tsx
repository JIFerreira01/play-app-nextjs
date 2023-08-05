'use client'
import dynamic from "next/dynamic";

const PlayerComponent = dynamic(() => import("../components/Player"),{
  ssr: false,
});

const PlaylistComponent = dynamic(() => import("../components/Playlist"),{
  ssr: false,
})


export default function Home() {
  return (
    <section className="grid grid-rows-1 grid-cols-6 gap-x-5 w-8/12 h-96 ">
      <div className="col-span-4">
        {<PlaylistComponent />}
      </div>
      <div className="col-span-2">
        {<PlayerComponent />}
      </div>
    </section>
  )
}
