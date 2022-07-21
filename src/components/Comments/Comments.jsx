import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { productsContext } from "../../contexts/productsContext";

const Comments = ({ comments }) => {
  const { id } = useParams();
  const { createComments, deleteComments } = useContext(productsContext);
  const [newComment, setNewComment] = useState("");
  function handleSave() {
    const comment = {
      text: newComment,
      id: id,
    };
    createComments(comment, id);
    setNewComment("");
  }
  return (
    <div className="container">
      <input
        type="text"
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
      />
      <button onClick={handleSave}>Post</button>
      {console.log(comments)}
    </div>
  );
};

export default Comments;
