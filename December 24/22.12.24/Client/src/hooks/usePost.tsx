import { getPosts } from "../services/post.service.tsx";
import { useQuery } from "@tanstack/react-query";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
    // retry: 1,
    // gcTime: 5000, // default to 5 minute
    // refetchOnWindowFocus: false, // default to 5 true
  });
}
// export function usePost(id: string) {
//   return useQuery({
//     queryKey: ["post", id],
//     queryFn: () => getPostDetails(id),
//     // retry: 1,
//     // gcTime: 5000, // default to 5 minute
//     // refetchOnWindowFocus: false, // default to 5 true
//   });
// }
