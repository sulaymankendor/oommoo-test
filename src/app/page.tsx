import { data } from "@/data/events-data";
import Show from "@/components/home-page/Show";

export default function Home() {
  return (
    <main className="bg-[#1A1A1A]">
      <div className="flex flex-wrap pt-[20vh] items-center w-[92vw] mx-auto">
        {data.map((show) => {
          return (
            <Show
              id={show.id}
              title={show.title}
              summary={show.summary}
              thumbnailUrl={show.eventThumbnailUrl}
              numberOfReviews={show.numberOfReviews}
              typeOfEvent={show.typeOfEvent}
              slug={show.slug}
              key={show.id}
            />
          );
        })}
      </div>
    </main>
  );
}
