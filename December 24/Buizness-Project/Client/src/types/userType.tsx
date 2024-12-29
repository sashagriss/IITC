export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  plan: "standard" | "gold" | "platinum";
}

export type UserWithoutId = Omit<User, "_id">;

export type SignUpData = Omit<UserWithoutId, "password"> & { password: string };
