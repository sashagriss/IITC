import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import Comments from "./Comments";
import { getAuthTokenFromCookie } from "@/lib/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCommentApi } from "@/services/reviewService";

function DialogComments({ comments, businessId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [newComment, setNewComment] = useState("");
  const queryClient = useQueryClient();

  const addCommentMutation = useMutation({
    mutationFn: ({ id, comment }) => addCommentApi(id, comment),
    onSuccess: () => {
      const token = getAuthTokenFromCookie();
      queryClient.invalidateQueries(["userProfile", token]);
      alert("Successfully added comment");
    },
    onError: (err) => {
      alert(`Error: ${err.message}`);
    },
  });

  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmitComment = () => {
    if (!newComment.trim()) {
      alert("Comment cannot be empty!");
      return;
    }

    addCommentMutation.mutate({ id: businessId, comment: newComment });
    setNewComment("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-green-500 ">
          <FaRegCommentDots className="mr-2" />
          Show Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center font-bold text-2xl">
            Add Review
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Input
              id="comment"
              type="text"
              placeholder="Enter your comment"
              value={newComment}
              onChange={handleNewCommentChange}
              className="mt-2 w-full"
            />
          </div>
          <div className="max-h-[75%] overflow-y-auto">
            <Comments commentsData={comments} businessId={businessId} />
          </div>
        </div>
        <div className="flex justify-center">
          <DialogFooter>
            <Button type="submit" onClick={handleSubmitComment}>
              Add Review
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogComments;
