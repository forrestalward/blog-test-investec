import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a passionate runner and padel enthusiast, finding unmatched joy in
        the rhythm of long-distance running and the strategic intensity of padel
        matches. This extends to my love for outdoor activities, where early
        morning runs provide mental clarity and padel's fast-paced nature keeps
        me sharp and focused. I prefer training in all weather conditions,
        believing that challenging environments build both physical and mental
        resilience.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
