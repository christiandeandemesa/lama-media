// LEFTBAR
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

import "./Leftbar.scss";

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="container">
        {/* FIRST SECTION */}
        <div className="menu">
          {/* USER AVATAR */}
          <div className="user">
            <img
              src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>John Doe</span>
          </div>

          {/* FRIENDS */}
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>

          {/* GROUPS */}
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>

          {/* MARKETPLACE */}
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>

          {/* WATCH */}
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>

          {/* MEMORIES */}
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>

        <hr />

        {/* SECOND SECTION */}
        <div className="menu">
          <span>Your shortcuts</span>

          {/* EVENTS */}
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>

          {/* GAMING */}
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>

          {/* GALLERY */}
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>

          {/* VIDEOS */}
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>

          {/* MESSAGES */}
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>

        <hr />

        {/* THIRD SECTION */}
        <div className="menu">
          <span>Others</span>

          {/* FUNDRAISER */}
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>

          {/* TUTORIALS */}
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>

          {/* COURSES */}
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
