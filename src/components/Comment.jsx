/* eslint-disable react/prop-types */
import { Button } from "./Button";
import { useState } from "react";

export const Comment = ({ handleInsert, handleDelete, data }) => {
  const [inp, setInp] = useState("");
  const [newComment, setNewComment] = useState(false);
  const [bookmark, setBookmark] = useState([]);

  const postComment = () => {
    if (inp.trim().length != 0) {
      handleInsert(data.id, inp);
      setNewComment(false);
    }
    setInp("");
  };

  const handleReply = () => {
    setNewComment(true);
  };

  const deleteComment = () => {
    handleDelete(data.id);
  };

  const handleBookmark = () => {
    setBookmark((prev) => {
      if (prev.includes(data.id)) {
        return prev.filter((d) => d !== data.id);
      }
      return [...prev, data.id];
    });
  };

  return (
    <div className="flex flex-col p-4">
      {data.id === 1 ? (
        <div className="w-1/2 bg-white p-2 pt-4 rounded shadow-lg">
          <div className="flex ml-3">
            <div className="mr-3">
              <img
                src="/avatar.jpg"
                width={50}
                height={50}
                alt="avatar"
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="font-semibold">Adhiraj</h1>
              {/* <p className="text-xs text-gray-500">{data.id}</p> */}
            </div>
          </div>
          <div className="mt-3 p-3 w-full">
            <textarea
              rows="3"
              className="border p-2 rounded w-full"
              placeholder="Write something..."
              value={inp}
              onChange={(e) => setInp(e.target.value)}
            ></textarea>
          </div>

          <div className="flex justify-end mx-3">
            <div>
              <Button handleClick={postComment}>Submit</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-1/2 bg-white p-2 pt-4 rounded shadow-lg">
          <div className="flex ml-3">
            <div className="mr-3">
              <img
                src="/avatar.jpg"
                width={50}
                height={50}
                alt="avatar"
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="font-semibold">Adhiraj</h1>
              {/* <p className="text-xs text-gray-500">{data.id}</p> */}
            </div>
          </div>
          <div className="mt-3 p-3 w-full">
            <div className="p-2 bg-gray-100 rounded">{data.text}</div>
          </div>

          <div className="flex justify-end gap-2 mx-3">
            <Button handleClick={handleReply}>Reply</Button>
            <Button handleClick={deleteComment}>Delete</Button>
            <Button handleClick={handleBookmark}>
              {bookmark.includes(data.id) ? "Unbookmark" : "Bookmark"}
            </Button>
          </div>
        </div>
      )}

      <div className="pl-24">
        {newComment && (
          <div className="w-1/2 bg-white p-2 pt-4 rounded shadow-lg">
            <div className="flex ml-3">
              <div className="mr-3">
                <img
                  src="/avatar.jpg"
                  width={50}
                  height={50}
                  alt="avatar"
                  className="rounded-full"
                />
              </div>
              <div>
                <h1 className="font-semibold">Adhiraj</h1>
                {/* <p className="text-xs text-gray-500">{data.id}</p> */}
              </div>
            </div>
            <div className="mt-3 p-3 w-full">
              <textarea
                rows="2"
                className="border p-2 rounded w-full"
                placeholder="Write something..."
                value={inp}
                onChange={(e) => setInp(e.target.value)}
              ></textarea>
            </div>

            <div className="flex justify-end gap-2 mx-3">
              <Button handleClick={postComment}>Reply</Button>
              <Button handleClick={() => setNewComment(false)}>Cancel</Button>
            </div>
          </div>
        )}

        {data.items?.map((d) => {
          return (
            <Comment
              key={d.id}
              handleDelete={handleDelete}
              handleInsert={handleInsert}
              data={d}
            />
          );
        })}
      </div>
    </div>
  );
};
