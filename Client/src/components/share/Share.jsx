import "./Share.css";
import { MdPermMedia , MdLabel , MdLocationPin , MdEmojiEmotions} from "react-icons/md";
function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="https://media.istockphoto.com/id/691910455/photo/smiling-businessman-with-brown-bag-walking-in-city.webp?b=1&s=170667a&w=0&k=20&c=3wFO31pmHcINRvK1gruSC0C76CArGfWJAjOBGMlx6ik="
            alt="User Image"
            className="shareProfileImg"
          />
          <input placeholder="What's on Your Mind" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <MdPermMedia style={{color:'tomato'}} className="shareIcon"/>
              <span className="shareOptionText"> Photo or Video</span>
            </div>
            <div className="shareOption">
              <MdLabel style={{color:'blue'}} className="shareIcon"/>
              <span className="shareOptionText"> Tag</span>
            </div>
            <div className="shareOption">
              <MdLocationPin style={{color:'green'}} className="shareIcon"/>
              <span className="shareOptionText"> Location</span>
            </div>
            <div className="shareOption">
              <MdEmojiEmotions style={{color:'goldenrod'}} className="shareIcon"/>
              <span className="shareOptionText"> Feelings</span>
            </div>
            <button className="shareButton"> Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
