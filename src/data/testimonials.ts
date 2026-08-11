export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rafiul Islam",
    role: "Client since 2022",
    quote:
      "Best fade I've had in Dhaka, full stop. The stylist actually listens before picking up the clippers.",
    rating: 5,
  },
  {
    id: "2",
    name: "Tanvir Ahmed",
    role: "Client since 2023",
    quote:
      "Went in for a beard trim, stayed for the hot towel shave. The whole place smells like a proper barbershop should.",
    rating: 5,
  },
  {
    id: "3",
    name: "Shahriar Kabir",
    role: "Client since 2021",
    quote:
      "The Hydra Facial genuinely changed my skin. Booked my next session before I even left the chair.",
    rating: 5,
  },
  {
    id: "4",
    name: "Nabil Hasan",
    role: "Client since 2024",
    quote:
      "Booked the Titanium package for my wedding grooming. Every service was on point, no rushing, no shortcuts.",
    rating: 5,
  },
];
