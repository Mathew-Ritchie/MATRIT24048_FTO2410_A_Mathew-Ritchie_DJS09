enum LoyaltyUser {
  GOLD_USER = "GOLD_USER",
  SILVER_USER = "SILVER_USER",
  BRONZE_USER = "BRONZE_USER",
}

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}

export interface Property {
  image: string;
  title: string;
  pricePerNight: number;
  address: string;
  townCity: string;
  postCode: number;
  country: string;
  contactDetails: [number, string];
  availableToRent: boolean;
}
