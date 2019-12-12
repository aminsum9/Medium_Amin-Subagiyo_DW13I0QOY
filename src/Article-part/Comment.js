import React from "react";
import ArticleBar from "../Home/Article-bar";
import "../App.css";

export default function Comment() {
  const comments = [
    {
      image:
        "https://sportstar.thehindu.com/third-party/opta/article29935418.ece/alternates/FREE_560/messi-cropped1757zff7a15hd10g7lmuwegk7cjpg",
      name: "Amin Subagiyo",
      contain: "artikel yang sangat bermanfaat:-)"
    },
    {
      image:
        "https://www.thoughtco.com/thmb/nJes21qGblsGLqhtP1OBG8dgQMI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/jihadist-56a944ac3df78cf772a55971.jpg",
      name: "Nurdin",
      contain: "sangat bermanfaat"
    },
    {
      image:
        "https://assets.rappler.com/612F469A6EA84F6BAE882D2B94A4B421/img/08A17C2ACEA3428D9A17C432D2633C2D/sj_01_08A17C2ACEA3428D9A17C432D2633C2D.jpg",
      name: "Ibnu",
      contain:
        "banyak sekali manfaat yang bisa diambil dari artikel tersebut:-)"
    }
  ];

  return (
    <div>
      <ArticleBar />
      <p id="comment-1-title">Showing response for:</p>
      <div id="comment-1">
        <div id="comment-title">
          <p>If You Only Read A Few Books In 2018, Read These</p>
        </div>
      </div>
      <div id="comment-2">
        <div className="comment-input">
          <form>
            <ul>
              <li>
                <label for="comment" id="comment-label">
                  <strong>Response</strong>
                </label>
              </li>
              <li>
                <input
                  type="text"
                  id="comment"
                  placeholder="write response..."
                ></input>
              </li>
            </ul>
          </form>
        </div>
        {comments.map(comment => (
          <div className="comment-containt">
            <img src={comment.image} className="comment-image"></img>
            <h1>{comment.name}</h1>
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
