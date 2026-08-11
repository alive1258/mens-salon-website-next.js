export interface SalonVideo {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
}

const thumb = (youtubeId: string) => `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;

export const featuredVideo: SalonVideo = {
  id: "intro",
  title: "Welcome to ScissorHand",
  youtubeId: "znK8vmnDGnY",
  thumbnail: thumb("znK8vmnDGnY"),
};

export const videos: SalonVideo[] = [
  {
    id: "scissor-cut-red-carpet",
    title: "Scissor Cut for Red Carpet Flow",
    youtubeId: "gLIqfj9xEv4",
    thumbnail: thumb("gLIqfj9xEv4"),
  },
  {
    id: "beard-trim",
    title: "Professional Beard Trim",
    youtubeId: "44LYQL1Tvic",
    thumbnail: thumb("44LYQL1Tvic"),
  },
  {
    id: "scissor-cut-tutorial",
    title: "Scissor Cut Tutorial",
    youtubeId: "UkL-JFsY1M0",
    thumbnail: thumb("UkL-JFsY1M0"),
  },
  {
    id: "clipper-scissor-guide",
    title: "Clipper & Scissor Guide",
    youtubeId: "CE39pnHnue0",
    thumbnail: thumb("CE39pnHnue0"),
  },
  {
    id: "slick-back-scissor-cut",
    title: "Slick Back Scissor Cut",
    youtubeId: "t8bh9a9D86o",
    thumbnail: thumb("t8bh9a9D86o"),
  },
  {
    id: "master-the-taper",
    title: "Master the Taper",
    youtubeId: "UNeajh7jfXE",
    thumbnail: thumb("UNeajh7jfXE"),
  },
  {
    id: "full-head-scissor-cut",
    title: "Full Head Scissor Cut",
    youtubeId: "uduIU8X7z5Q",
    thumbnail: thumb("uduIU8X7z5Q"),
  },
  {
    id: "number-3-back-sides",
    title: "Number 3 Back & Sides",
    youtubeId: "2XCDsnLLl74",
    thumbnail: thumb("2XCDsnLLl74"),
  },
  {
    id: "hair-beard-tutorial",
    title: "Hair & Beard Tutorial",
    youtubeId: "Db9o-KbUXCE",
    thumbnail: thumb("Db9o-KbUXCE"),
  },
  {
    id: "old-money-haircut",
    title: "The Old Money Haircut",
    youtubeId: "DcPEAzivCvk",
    thumbnail: thumb("DcPEAzivCvk"),
  },
  {
    id: "cowlicks-double-crown",
    title: "Taming Cowlicks & Double Crown",
    youtubeId: "RQFxP-24-ek",
    thumbnail: thumb("RQFxP-24-ek"),
  },
  {
    id: "side-parting-tutorial",
    title: "Side Parting Tutorial",
    youtubeId: "slxBAkvx6fA",
    thumbnail: thumb("slxBAkvx6fA"),
  },
  {
    id: "hair-loss-solution",
    title: "Non-Surgical Hair Loss Solution",
    youtubeId: "D3LpMF2r5F8",
    thumbnail: thumb("D3LpMF2r5F8"),
  },
  {
    id: "basic-mens-haircut",
    title: "Basic Men's Haircut",
    youtubeId: "4bWSsGhEDLY",
    thumbnail: thumb("4bWSsGhEDLY"),
  },
  {
    id: "fade-hack-guard",
    title: "Fade Hack with #1.5 Guard",
    youtubeId: "uIPwOjXmBHo",
    thumbnail: thumb("uIPwOjXmBHo"),
  },
  {
    id: "choosing-barber-tools",
    title: "Choosing Barber Tools",
    youtubeId: "R_VjIT6LTqI",
    thumbnail: thumb("R_VjIT6LTqI"),
  },
];
