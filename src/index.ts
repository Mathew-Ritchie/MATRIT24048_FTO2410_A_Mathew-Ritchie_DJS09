import { showReviewTotal, populateUser } from "./utils";
import { Permissions, LoyaltyUser } from "./enums";
import { Price, Country } from "./aliases.ts";

const propertyContainer = document.querySelector(".properties");
const footer = document.querySelector(".footer");

let isLoggedIn: boolean;

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
  },
];

const you = {
  firstName: "Bobby",
  lastName: "Brown",
  permissions: Permissions.ADMIN,
  age: 5,
  isReturning: true,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

const properties: {
  image: string;
  title: string;
  pricePerNight: number;
  address: string;
  townCity: string;
  postCode: number;
  country: Country;
  contactDetails: [number, string];
  availableToRent: boolean;
}[] = [
  {
    image: "../images/download.jpeg",
    title: "Mansion",
    pricePerNight: 300,
    address: "3 flower rd",
    townCity: "Cape Town",
    postCode: 7777,
    country: "South Africa",
    contactDetails: [+287566589, "billybob@gmail.com"],
    availableToRent: true,
  },
  {
    image: "../images/images.jpeg",
    title: "forrest",
    pricePerNight: 200,
    address: "4 mountain rd",
    townCity: "Cape Town",
    postCode: 7987,
    country: "South Africa",
    contactDetails: [+27897689, "hulk@live.com"],
    availableToRent: false,
  },
  {
    image: "../images/cape-town-frommers.jpg",
    title: "campsite",
    pricePerNight: 100,
    address: "6 main rd",
    townCity: "Cape Town",
    postCode: 7677,
    country: "South Africa",
    contactDetails: [+27876589, "freddyfreak@candycane.com"],
    availableToRent: true,
  },
];

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);

let authorityStatus: any;

isLoggedIn = true;

function showDetails(
  authorityStatus: boolean | Permissions,
  element: HTMLDivElement,
  pricePerNight: number
) {
  if (authorityStatus) {
    const priceDisplay = document.createElement("div");
    priceDisplay.innerHTML = `R${pricePerNight.toString()} per night`;
    element.appendChild(priceDisplay);
  }
}

properties.forEach((property) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = property.title;
  const image = document.createElement("img");
  image.classList.add("image");
  image.setAttribute("src", property.image);
  card.appendChild(image);
  propertyContainer.appendChild(card);
  showDetails(isLoggedIn, card, property.pricePerNight);
});

let currentLocation: [string, string, number] = ["Cape Town", "9:20", 20];
footer.innerHTML = `${currentLocation[0]} its ${currentLocation[1]} in the morning and ${currentLocation[2]}C°`;
