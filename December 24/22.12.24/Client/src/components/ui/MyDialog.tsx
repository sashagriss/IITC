import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPost, updatePost } from "@/services/post.service";
import { usePosts } from "@/hooks/usePost";
import { Post } from "@/types/postType";

interface MyDialogProps {
  postToUpdate?: Post;
}
function MyDialog({ postToUpdate }: MyDialogProps) {
  const [textButton, setTextButton] = useState("Add Post");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();

  const { data: posts, error, isLoading } = usePosts();

  const AddOrEditPostMutation = useMutation({
    mutationFn: async () => {
      if (postToUpdate) {
        return await updatePost(postToUpdate._id, {
          _id: postToUpdate._id,
          title,
          content,
        });
      } else {
        return await addPost({ title, content });
      }
    },
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previousPosts = queryClient.getQueryData<Post[]>(["posts"]);
      queryClient.setQueryData(["posts"], (oldPosts: Post[] | undefined) => {
        if (!oldPosts) return [];
        if (postToUpdate) {
          return oldPosts.map((post) =>
            post._id === postToUpdate._id ? { ...post, title, content } : post
          );
        }
        return [...oldPosts, { title, content } as Post];
      });
      return { previousPosts };
    },
    onError: (error, variables, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(["posts"], context.previousPosts);
      }
      console.error("Error adding/updating post:", error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  useEffect(() => {
    if (postToUpdate) {
      setTextButton("Update post");
      setTitle(postToUpdate.title);
      setContent(postToUpdate.content);
    } else {
      setTextButton("Add Post");
      setTitle("");
      setContent("");
    }
  }, [postToUpdate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddOrEditPostMutation.mutateAsync();
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (!posts) return <h1>Sorry, posts not found</h1>;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border-2 hover:text-white py-2 p-5 rounded">
          {textButton}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{textButton} Post</DialogTitle>
          <DialogDescription>
            {textButton === "Add Post"
              ? "Add a new post here. Click save when you're done."
              : "Update your post here. Click save when you're done."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => handleSubmit(e)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="content" className="text-right">
              Content
            </Label>
            <Input
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="col-span-3"
            />
          </div>
          <DialogTrigger>
            <DialogFooter>
              <Button type="submit">{textButton}</Button>
            </DialogFooter>
          </DialogTrigger>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default MyDialog;
