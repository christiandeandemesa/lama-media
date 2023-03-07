// SHARE A POST
import { useContext } from "react";

import { AuthContext } from "../../contexts/authContext";

import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";

import "./Share.scss";

function Share() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="share">
      <div className="container">
        {/* TOP PART OF CONTAINER */}
        <div className="top">
          {/* USER AVATER */}
          <img src={currentUser.profilePic} alt="" />

          {/* POST INPUT */}
          <input
            type="text"
            placeholder={`What's on your mind ${currentUser.name}?`}
          />
        </div>

        <hr />

        {/* BOTTOM PART OF CONTAINER */}
        <div className="bottom">
          <div className="left">
            {/* ADD IMAGE BUTTON */}
            <input type="file" id="file" style={{ display: "none" }} />
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
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
