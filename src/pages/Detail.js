import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useLocation} from "react-router-dom"

const Detail = () => {
    const location = useLocation()
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.data);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments").then(({data})=>dispatch({type: "GET_COMMENT", payload:{data:data.slice(0,10)}}))
    }, []);

    const {item, photoDetails} = location.state


  const [newComment, setNewComment] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: "ADD_NEW_COMMENT", payload:{newComment}});
  };
  return (
    <div className="center">
      <div className="navbar">
        <button>
          <img
            className="camera"
            src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/camera-512.png"
            alt="camera"
            width="15%"
          />
        </button>
        <img
          className="insta"
          src="https://thepracticaldev.s3.amazonaws.com/i/9dgus6e6o80pv1gx8y7t.png"
          alt="logo"
          width="25%"
        />
        <button>
          <img
            className="send"
            src="https://pngimage.net/wp-content/uploads/2018/06/send-button-icon-png-6.png"
            alt="dm"
          />{" "}
        </button>
      </div>

      <div className="profile">
        <p className="photo-info">{item.title}</p>
        <img src={photoDetails} alt="images" width="100%" />

        {comments.length > 0 &&
          comments.map((comment) => (
            <>
              <p className="photo-info">
                <span>{comment?.name}</span> - {comment?.body}
              </p>
            </>
          ))}
        <form onSubmit={handleSubmit}>
          <input
            onChange={(event) =>
              setNewComment({ name: "Anonymus", body: event.target.value })
            }
            value={newComment.body}
          />
          <button type="submit">Add new comment</button>
        </form>
      </div>

      <div className="navbar2">
        <img className="bar" />
      </div>
    </div>
  );
};

export default Detail;
