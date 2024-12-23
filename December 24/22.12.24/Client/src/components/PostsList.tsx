import { Post } from "@/types/postType";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "@/services/post.service.tsx";
import { usePosts } from "@/hooks/usePost.tsx";
// import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { debounce } from "lodash";
import MyDialog from "./ui/MyDialog";

function PostsList() {
  const [textSearch, setTextSearch] = useState("");
  const queryClient = useQueryClient();
  //   const navigate = useNavigate();
  const { data: posts, error, isLoading } = usePosts();

  const debouncedSetQueryData = useCallback(
    debounce((searchText: string) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.setQueryData(["posts"], (oldPosts: Post[] | undefined) => {
        if (!oldPosts) return [];

        if (searchText === "") return oldPosts;

        return oldPosts.filter((post) => {
          if (!post || !post.title) {
            console.error("Invalid post:", post);
            return false;
          }
          return post.title.toLowerCase().includes(searchText.toLowerCase());
        });
      });
    }, 100),
    [queryClient]
  );

  useEffect(() => {
    if (textSearch !== undefined) {
      debouncedSetQueryData(textSearch);
    }
  }, [textSearch, debouncedSetQueryData]);

  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previousPosts = queryClient.getQueryData<Post[]>(["posts"]);
      queryClient.setQueryData(["posts"], (oldPosts: Post[] | undefined) => {
        if (!oldPosts) return [];
        return oldPosts.filter((post) => post._id !== id);
      });
      return { previousPosts };
    },
    onError: (error, variables, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(["posts"], context.previousPosts);
      }
      console.error("Error deleting post:", error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;
  if (!posts) return <h1>Sorry, posts not found</h1>;

  function handleDelete(id: string) {
    console.log(id);
    deletePostMutation.mutateAsync(id);
  }

  return (
    <div>
      <input
        className="bg-purple-300 w-30 text-2xl m-10 p-5"
        type="text"
        placeholder="search post"
        onChange={(ev) => setTextSearch(ev.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <div
            // onClick={() => navigate(`./postDetails/${post._id}`)}
            key={post._id || index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600 mt-2">{post.content}</p>
            <div className="flex justify-end mt-5 gap-2">
              <MyDialog postToUpdate={post} />
              <button
                onClick={() => handleDelete(post._id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsList;
