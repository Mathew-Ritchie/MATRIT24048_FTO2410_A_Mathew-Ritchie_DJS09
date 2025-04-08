const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");
import { LoyaltyUser } from "./enums";

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
