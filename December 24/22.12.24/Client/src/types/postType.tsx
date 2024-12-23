export type Post = {
  _id: string;
  title: string;
  content: string;
};

export type PostWithoutId = Omit<Post, "_id">;
