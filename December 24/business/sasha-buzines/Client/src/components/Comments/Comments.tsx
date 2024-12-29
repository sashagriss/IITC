import { useUserProfile } from "@/hooks/useUsere";
import { getAuthTokenFromCookie } from "@/lib/auth";
import { editCommentApi, deleteCommentApi } from "@/services/reviewService";
import { useState } from "react";
import { FaPencilAlt, FaTrashAlt, FaSave } from "react-icons/fa";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Comment = {
  _id: string;
  comment: string;
  userId: {
    _id: string;
    name: string;
  };
};

type CommentsProps = {
  commentsData: Comment[];
  businessId: string;
};

const LoadingIndicator = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
    <div className="animate-spin rounded-full border-4 border-t-4 border-gray-600 w-12 h-12"></div>
  </div>
);

const Comments = ({ commentsData, businessId }: CommentsProps) => {
  const [editedComment, setEditedComment] = useState<string>("");
  const [isEditCommentId, setIsEditCommentId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const {
    data: userProfile,
    error,
    isLoading: userProfileLoading,
  } = useUserProfile();
  const queryClient = useQueryClient();

  const handleSaveEditComment = (commentId: string, newComment: string) => {
    setIsEditing(true);
    setIsLoading(true);
    editCommentMutation.mutate({
      businessId: businessId,
      reviewId: commentId,
      updatedComment: newComment,
    });
    setIsEditCommentId(null);
  };

  const handleDeleteComment = (commentId: string) => {
    setIsLoading(true);
    setIsDeleting(true);
    deleteCommentMutation.mutate({ commentId, businessId });
  };

  const deleteCommentMutation = useMutation({
    mutationFn: ({
      commentId,
      businessId,
    }: {
      commentId: string;
      businessId: string;
    }) => deleteCommentApi(commentId, businessId),
    onSuccess: () => {
      setIsLoading(false);
      setIsDeleting(false);
      const token = getAuthTokenFromCookie();
      queryClient.invalidateQueries(["userProfile", token]);
    },
    onError: (err: Error) => {
      setIsLoading(false);
      setIsDeleting(false);
      alert(`Error: ${err.message}`);
    },
  });

  const editCommentMutation = useMutation({
    mutationFn: ({
      businessId,
      reviewId,
      updatedComment,
    }: {
      businessId: string;
      reviewId: string;
      updatedComment: string;
    }) => editCommentApi(businessId, reviewId, updatedComment),
    onSuccess: () => {
      setIsLoading(false);
      setIsEditing(false);
      const token = getAuthTokenFromCookie();
      queryClient.invalidateQueries(["userProfile", token]);
    },
    onError: (err: Error) => {
      setIsLoading(false);
      setIsEditing(false);
      alert(`Error: ${err.message}`);
    },
  });

  return (
    <div className="flex flex-col gap-2 relative">
      {(isDeleting || isEditing) && <LoadingIndicator />}

      {commentsData.map((comment) => (
        <div
          key={comment._id}
          className="flex items-center border rounded-md p-2 hover:bg-gray-100"
        >
          <p className="font-medium">{comment.userId.name}:</p>
          {comment.userId._id === userProfile._id &&
          isEditCommentId === comment._id ? (
            <div className="flex">
              <input
                type="text"
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
                className=" ml-2 border p-2 rounded"
              />
              <button
                onClick={() =>
                  handleSaveEditComment(comment._id, editedComment)
                }
                className="flex items-center bg-green-500 text-white hover:bg-green-700 rounded-lg px-4 py-2 transition duration-200"
              >
                <FaSave className="w-5 h-5 mr-2" />
                Save
              </button>
            </div>
          ) : (
            <p className="ml-2">{comment.comment}</p>
          )}
          {isEditCommentId !== comment._id &&
            comment.userId._id === userProfile._id && (
              <div className="flex ml-auto space-x-2">
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  onClick={() => {
                    setIsEditCommentId(comment._id);
                    setEditedComment(comment.comment);
                  }}
                >
                  <FaPencilAlt className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                  onClick={() => handleDeleteComment(comment._id)}
                >
                  {<FaTrashAlt className="w-4 h-4" />}
                </button>
              </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default Comments;
