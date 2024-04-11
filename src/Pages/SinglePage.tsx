import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Contex/DataContex";
import { useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineComment } from "react-icons/md";
import { TbShare3 } from "react-icons/tb";

interface Comment {
  postId: string | undefined;
  user: string;
  comment: string;
}


const SinglePage = () => {
  const { id } = useParams<{ id: string }>();
  const ContextValue = useContext(MyContext);
  const [commentInput, setCommentInput] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentToggle, setCommentToggle] = useState<boolean>(false);
  const [like, setLike] = useState<number>(0);

  if (!ContextValue) {
    return null;
  }

  const { posts } = ContextValue;
  const post = posts.find((post) => post.postId === id);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(
        JSON.parse(storedComments).filter((comment: Comment) => comment.postId === id)
      );
    }
  
  }, [id]);
  
  const handleLike = () => {
    setLike((prev) => prev + 1);
  };
  
  const handleCommentSubmit = () => {
    if (!commentInput.trim()) return;
    const newComment: Comment = {
      postId: id,
      user: "User",
      comment: commentInput,
    };
    setComments((prevComments) => [...prevComments, newComment]);

    localStorage.setItem("comments", JSON.stringify([...comments, newComment]));
    setCommentInput("");
  };
  
  if (!post) {
    return (
      <div className="flex justify-center items-center text-5xl h-[540px]">
        404, Post not found
      </div>
    );
  }

  return (
    <div>
      <div className="rounded-lg relative overflow-hidden m-3 lg:flex justify-center">
        <div className="w-[400px] text-xl">
          <img
            src={post.submission.thumbnail}
            alt=""
            className="object-cover rounded-lg w-[400px] h-[200px]"
          />
          <div className="mt-3 pr-1">
            <p>
              <span className="font-semibold mr-3">Title:</span>
              {post.submission.title}
            </p>
            <p>
              <span className="font-semibold mr-3">Creator Name:</span>
              {post.creator.name}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-3">Creator user handle:</span>
              {post.creator.handle}
            </p>
            <p className="text-justify">
              <span className="font-semibold mr-3">Description:</span>
              {post.submission.description}
            </p>
          </div>
        </div>
        <video
          src={post.submission.mediaUrl}
          controls={false}
          autoPlay
          loop
          onClick={(e) => (e.target as HTMLVideoElement).paused ? (e.target as HTMLVideoElement).play() : (e.target as HTMLVideoElement).pause()}
          className="rounded-lg h-[700px] ml-3"
        />
        <div className="flex flex-col justify-end items-center ml-2">
          <div className="mb-8 items-center flex flex-col">
            <AiOutlineLike 
              className="hover:bg-slate-300 hover:rounded-full text-[60px] p-3" 
              onClick={handleLike}
            />
            <p className="font-semibold">{like}</p>
          </div>
          <div className="mb-8 items-center flex flex-col">
            <MdOutlineComment
              className="hover:bg-slate-300 hover:rounded-full text-[60px] p-3"
              onClick={() => setCommentToggle((prev) => !prev)}
            />
            <p className="font-semibold">{comments.length}</p>
          </div>
          <div className="mb-8 items-center flex flex-col">
            <TbShare3 
              className="hover:bg-slate-300 hover:rounded-full text-[60px] p-3" 
            />
            <p className="font-semibold">Share</p>
          </div>
        </div>
      </div>
      <div
        className={`fixed right-48 top-56 shadow-2xl rounded-lg ${
          commentToggle ? "block" : "hidden"
        } h-[200px] overflow-y-auto`}
      >
        <div className="flex flex-col justify-center items-center bg-slate-200 border">
          <div className="flex flex-col items-center">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-2">User</th>
                  <th className="p-2">Comment</th>
                </tr>
              </thead>
              <tbody>
                {comments &&
                  comments.map((item, index) => (
                    <tr key={index}>
                      <td className="p-2">{item.user}</td>
                      <td className="p-2">{item.comment}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end">
          <input
            type="text"
            placeholder="Add a comment"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            className="mr-2 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleCommentSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
