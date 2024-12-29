export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  plan: "Standard" | "Gold" | "Platinum";
}

export type UserWithoutId = Omit<User, "_id">;
