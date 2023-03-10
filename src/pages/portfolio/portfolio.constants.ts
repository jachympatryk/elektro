import germany1 from "assets/images/germany1.webp";
import ac from "assets/images/ac.jpg";
import ac2 from "assets/images/ac-2.jpg";
import ac3 from "assets/images/ac-3.jpg";
import businessAustria from "assets/images/business-austria.jpg";
import businessPoland from "assets/images/business-poland.jpg";
import businessPoland2 from "assets/images/business-poland2.jpg";
import familyHouse from "assets/images/family-house-poland.jpg";
import groundPoland from "assets/images/ground-poland.jpg";
import groundPoland2 from "assets/images/ground-poland-2.jpg";
import poland1 from "assets/images/poland1.jpg";
import poland2 from "assets/images/poland2.jpg";
import quality from "assets/images/quality.jpg";
import quick from "assets/images/quick.jpg";
import trust from "assets/images/trust.jpg";

export const portfolioData1 = [
  {
    image: germany1,
    power: "16 kWp",
    label: "Implementation in Germany",
  },
  {
    image: poland1,
    label: "Implementation on flat roof in Poland",
  },
  {
    image: quality,
    label: "Exemplary quality",
    wide: true,
  },
  {
    image: familyHouse,
    power: "6,5 kWp",
    label: "Family-house installation in Poland",
  },
  {
    image: businessPoland,
    power: "50 kWp",
    label: "Business Implementation in Poland",
  },
  {
    image: trust,
    label: "Trust and reliability",
  },
  {
    image: businessAustria,
    label: "Business installation in Austria",
    power: "100 kWp",
    wide: true,
  },
  {
    image: poland2,
    label: "Implementation in Poland",
    power: "27 kWp",
  },
  {
    image: businessPoland2,
    power: "66 kWp",
    label: "Business installation in Poland",
  },
  {
    image: groundPoland,
    label: "Implementation on the ground in Poland",
    power: "8 kWp",
  },
  {
    image: groundPoland2,
    label: "Ground installation in Poland",
    power: "10 kWp",
  },
  {
    image: quick,
    label: "Lead time: quick",
    wide: true,
  },
  {
    image: ac,
    power: "AC SITE",
  },
  {
    image: ac2,
    power: "AC SITE",
  },
  {
    image: ac3,
    power: "AC SITE",
  },
];

export const portfolioData2 = [
  {
    image: poland1,
    label: "Implementation on flat roof in Poland",
  },
  {
    image: quality,
    label: "Exemplary quality",
    wide: true,
  },

  {
    image: trust,
    label: "Trust and reliability",
  },

  {
    image: quick,
    label: "Lead time: quick",
    wide: true,
  },
  {
    image: ac,
    power: "AC SITE",
  },
  {
    image: ac2,
    power: "AC SITE",
  },
  {
    image: ac3,
    power: "AC SITE",
  },
];

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 4000 },
    items: 4,
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 4000, min: 1600 },
    items: 4,
    slidesToSlide: 4,
  },
  semiTablet: {
    breakpoint: { max: 1600, min: 1200 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1200, min: 773 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 773, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
