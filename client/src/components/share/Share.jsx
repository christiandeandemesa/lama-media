// SHARE A POST
import { useContext, useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AuthContext } from "../../contexts/authContext";

import { makeRequest } from "../../axios";

import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";

import "./Share.scss";

function Share() {
  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  // Used when mutating existing data (e.g. creating new data).
  const mutation = useMutation({
    mutationFn: (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  // Creates a post.
  const handleClick = async (e) => {
    e.preventDefault();

    let imgUrl = "";
    if (file) imgUrl = await upload();

    mutation.mutate({ desc, img: imgUrl });

    setFile(null);
    setDesc("");
  };

  // Uploads a post's image.
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="container">
        {/* TOP PART OF CONTAINER */}
        <div className="top">
          <div className="left">
            {/* USER AVATER */}
            <img src={currentUser.profilePic} alt="" />

            {/* POST INPUT */}
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>

        <hr />

        {/* BOTTOM PART OF CONTAINER */}
        <div className="bottom">
          <div className="left">
            {/* ADD IMAGE BUTTON */}
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>

            {/* ADD PLACE BUTTON */}
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>

            {/* TAG FRIENDS BUTTON */}
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>

          {/* SHARE BUTTON */}
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
