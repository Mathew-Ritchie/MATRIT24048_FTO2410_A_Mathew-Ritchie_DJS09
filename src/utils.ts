const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");
import { LoyaltyUser, Permissions } from "./enums";
import { Review } from "./interfaces";

export function showReviewTotal(value: number, name: string, isLoyalty: LoyaltyUser) {
  reviewTotalDisplay.innerHTML = `${value.toString()} review${makeMultiple(
    value
  )} | last reviewed by 
    ${name} ${isLoyalty === LoyaltyUser.GOLD_USER ? "⭐️" : ""}`;
}

export function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

export function makeMultiple(value: number): string {
  if (value > 1 || value === 0) {
    return "s";
  } else {
    ("");
  }
}

export function getTopTwoReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
  return sortedReviews.slice(0, 2);
}

export function showDetails(
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
