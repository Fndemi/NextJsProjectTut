import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { type StartupTypeCard } from "@/components/StartupCard"; // ✅ reuse the type

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts: StartupTypeCard[] = [
    {
      _createdAt: new Date().toISOString(),
      views: 55,
      author: { _id: 1, name: "Adrian" },
      _id: 1,
      description: "This is a description",
      image:
        "https://www.google.com/imgres?q=trobots&imgurl=https%3A%2F%2Fyt3.googleusercontent.com%2Fytc%2FAIdro_lMiOzxJXmfW3_HJOU9Kdpp5dM-UkdXTDvZxyaAYCJbS5M%3Ds900-c-k-c0x00ffffff-no-rj&imgrefurl=https%3A%2F%2Fwww.youtube.com%2F%405013Trobots&docid=M8LAxi_pwyMezM&tbnid=sNG4DfMXe6-BZM&vet=12ahUKEwj-4qmJha2PAxWFTKQEHSGNAmAQM3oECBcQAA..i&w=900&h=900&hcb=2&ved=2ahUKEwj-4qmJha2PAxWFTKQEHSGNAmAQM3oECBcQAA",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your StartUp,
          <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All StartUps"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}
