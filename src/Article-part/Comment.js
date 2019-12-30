import React from "react";
import HomeBar from "../Home-bar";
import Response from "./Response";
import Avatar from "@material-ui/core/Avatar";
import "./Articlepart.css";

export default function Comment() {
  const comments = [
    {
      image:
        "https://sportstar.thehindu.com/third-party/opta/article29935418.ece/alternates/FREE_560/messi-cropped1757zff7a15hd10g7lmuwegk7cjpg",
      name: "Edi",
      contain: "artikel yang sangat bermanfaat:-)"
    },
    {
      image:
        "https://www.thoughtco.com/thmb/nJes21qGblsGLqhtP1OBG8dgQMI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/jihadist-56a944ac3df78cf772a55971.jpg",
      name: "Hasan",
      contain: "sangat bermanfaat"
    },
    {
      image:
        "https://assets.rappler.com/612F469A6EA84F6BAE882D2B94A4B421/img/08A17C2ACEA3428D9A17C432D2633C2D/sj_01_08A17C2ACEA3428D9A17C432D2633C2D.jpg",
      name: "Jamal",
      contain:
        "banyak sekali manfaat yang bisa diambil dari artikel tersebut:-)"
    }
  ];

  return (
    <div>
      <HomeBar />
      {/* showing response for */}
      <p id="comment-1-title">Showing response for:</p>
      <div id="comment-1">
        <div id="comment-title">
          <p>If You Only Read A Few Books In 2018, Read These</p>
        </div>
      </div>
      <div id="comment-2">
        {/* input */}
        <div className="comment-input">
          <Response />
        </div>
        {/* response list */}
        {comments.map(comment => (
          <div className="comment-containt">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Avatar src={comment.image} style={{ marginRight: "10px" }} />
              <p className="comment-containt-name">{comment.name}</p>
            </div>
            <div>{comment.contain}</div>
            <img
              src="https://www.freepngimg.com/thumb/instagram/60239-like-icons-bookmark-button-computer-facebook-instagram.png"
              id="bookmark"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
