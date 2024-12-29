export interface Business {
  _id: string;
  name: string;
  description: string;
  category: string;
}

export type BusinessWithoutId = Omit<Business, "_id">;
