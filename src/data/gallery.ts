const unsplash = (photoId: string, width = 1200) =>
  `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=80`;

export interface GalleryPhoto {
  id: string;
  caption: string;
  image: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  { id: "1", caption: "Beard Sculpting", image: unsplash("1630827020718-3433092696e7") },
  { id: "2", caption: "Precision Beard Trim", image: unsplash("1629189784191-9afdcbcb0398") },
  { id: "3", caption: "Classic Straight Razor", image: unsplash("1517832606299-7ae9b720a186") },
  { id: "4", caption: "The Chair", image: unsplash("1585747860715-2ba37e788b70") },
  { id: "5", caption: "Grooming Station", image: unsplash("1621645582931-d1d3e6564943") },
  { id: "6", caption: "Salon Interior", image: unsplash("1621605815971-fbc98d665033") },
  { id: "7", caption: "Ready for the Chair", image: unsplash("1592647420148-bfcc177e2117") },
  { id: "8", caption: "Barber at Work", image: unsplash("1503951914875-452162b0f3f1") },
  { id: "9", caption: "Fresh Fade in Progress", image: unsplash("1576168056582-0a851a87ab8e") },
];
