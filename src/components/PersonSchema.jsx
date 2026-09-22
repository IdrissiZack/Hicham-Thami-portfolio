import { profile } from "../data/profile";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",

    "@id": "https://hicham-thami-portfolio.vercel.app/#profile",

    mainEntity: {
      "@type": "Person",

      "@id": "https://hicham-thami-portfolio.vercel.app/#person",

      name: profile.name,

      alternateName: [
        "هشام التهامي",
        "Hicham Tehami",
      ],

      description: profile.tagline,

      image: [
        "https://hicham-thami-portfolio.vercel.app/images/profile/portrait.jpg",
        "https://hicham-thami-portfolio.vercel.app/images/profile/profile-02.jpg",
      ],

      jobTitle: profile.title,

      url: "https://hicham-thami-portfolio.vercel.app/",

      sameAs: [
        profile.social.linkedin,
        profile.social.instagram,
      ].filter(Boolean),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}