import {
  showReviewTotal,
  populateUser,
  showDetails,
  getTopTwoReviews,
  makeMultiple,
} from "./utils";
import { Permissions, LoyaltyUser } from "./enums";
import { Review, Property } from "./interfaces.ts";

const propertyContainer = document.querySelector(".properties");
const reviewContainer = document.querySelector(".reviews");
const container = document.querySelector(".container");
const button = document.querySelector("button");
const footer = document.querySelector(".footer");

let isLoggedIn: boolean;

const reviews: Review[] = [
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

const properties: Property[] = [
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
  {
    image: "../images/karoo.webp",
    title: "Karoo",
    pricePerNight: 300,
    address: "6 N1 rd",
    townCity: "karoo",
    postCode: 7677,
    country: "South Africa",
    contactDetails: [+27876589, "karoogirt@yahoo.com"],
    availableToRent: true,
  },
];

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);

isLoggedIn = true;

properties.forEach((property) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = property.title;
  const image = document.createElement("img");
  image.classList.add("image");
  image.setAttribute("src", property.image);
  card.appendChild(image);
  showDetails(isLoggedIn, card, property.pricePerNight);
  propertyContainer.appendChild(card);
});

let count = 0;
function addReviews(array: Review[]): void {
  if (!count) {
    count++;
    const topTwo = getTopTwoReviews(array);
    for (let i = 0; i < topTwo.length; i++) {
      const card = document.createElement("div");
      card.classList.add("review-card");
      card.innerHTML = topTwo[i].stars + " stars from " + topTwo[i].name;
      reviewContainer.appendChild(card);
    }
    container.removeChild(button);
  }
}

button.addEventListener("click", () => addReviews(reviews));

let currentLocation: [string, string, number] = ["Cape Town", "9:20", 20];
footer.innerHTML = `${currentLocation[0]} its ${currentLocation[1]} in the morning and ${currentLocation[2]}C°`;

class MainProperty {
  src: string;
  title: string;
  reviews: Review[];
  constructor(src: string, title: string, reviews: Review[]) {
    this.src = src;
    this.title = title;
    this.reviews = reviews;
  }
}

let yourMainProperty = new MainProperty("../images/main.jpeg", "Cape Town House", [
  {
    name: "Olive",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "12-04-2021",
  },
]);

const mainImageContainer = document.querySelector(".main-image");
const image = document.createElement("img");
image.setAttribute("src", yourMainProperty.src);
mainImageContainer.appendChild(image);
