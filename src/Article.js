import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import HomeBar from "./Home-bar";
import Claps from "./Article-part/Claps";
import Avatar from "@material-ui/core/Avatar";
import "./App.css";
import "./Home/Home.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 480,
    width: 400,
    boxShadow: "none",
    background: "none"
  },
  control: {
    padding: theme.spacing(2)
  },
  underRelated: {
    background: "#424242"
  },
  relatedProfile: {
    display: "flex",
    alignItems: "center",
    fontSize: "20px"
  },
  bottom: {
    background: "none",
    boxShadow: "none",
    color: "#fff",
    width: "380px",
    textAlign: "left"
  },
  linkRelated: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Baskerville Old face",
    textAlign: "left"
  },
  relatedPostAvatar: {
    bottom: "0",
    marginRight: "10px"
  }
}));

function Article() {

  var [ claps, setClaps] = React.useState(0);

  const follows = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Mesut_%C3%96zil_850_0704.jpg",
      nama: "Amin Subagiyo",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      image:
        "https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/12/13/6b06cb22-1ca7-11ea-8971-922fdc94075f_image_hires_132744.jpg?itok=XditGQBc&v=1576214873",
      nama: "King Salman",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };
  
  return (
    <div className="post">
      <HomeBar />
      <div>
        <br></br>
        <br></br>
        <br></br>
        <img src="https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg" alt="-" />
        <h1>If You Only Read A Few Books In 2018, Read These</h1>
        <p id="main">
          If you’d liked to be jerked around less, provoked less, and more
          productive and inwardly focused, where should you start? To me, the
          answer is obvious: by turning to wisdom. Below is a list of 21 books
          that will help lead you to a better, stronger 2018. Deep Work: Rules
          for Focused Success in a Distracted World by Cal Newport Media
          consumption went way up in 2017. For most of us, that meant happiness
          and productivity went way down. The world is becoming noisier and will
          become more so every day. If you can’t cultivate the ability to have
          quiet, insightful, deeply focused periods of productive work, you’re
          going to get screwed. This is a book that explains how to cultivate
          and protect that skill — the ability to do deep work. I strongly urge
          you to begin this practice in 2018— if you want to get anything done
          or perform your best. The Subtle Art of Not Giving a F*ck: A
          Counterintuitive Approach to Living a Good Life by Mark Manson To me,
          practical philosophy has always been the art knowing what to — and
          what not to — give a fuck about. That’s what Mark’s book is about.
          It’s not about apathy. It’s about cultivating indifference to things
          that don’t matter. Be careful, as Marcus Aurelius warns, not to give
          the little things more time and thought they deserved. Maybe looking
          back at this year reveals how much effort you’ve frittered away
          worrying about the trivial. If so, let 2018 be a year that you only
          devote energy to things that truly matter — get the important things
          right by ignoring the insignificant. The Way to Love: The Last
          Meditations of Anthony de Mello by Anthony de Mello Coach Shaka Smart
          recommended this little book (and it’s a little book, probably the
          smallest I’ve ever read. It fits in your palm). But it’s an incredibly
          wise and helpful read. Written by a Catholic Priest who’d lived in
          India, the book has this unusual convergence of eastern and western
          thought. One of my favorite lines: “The question to ask is not ‘What’s
          wrong with this person?’ but ‘What does this irritation tell me about
          myself?’ I plan on regularly revisiting it throughout 2018. But What
          If We’re Wrong by Chuck Klosterman It’s always good to remind
          ourselves that almost everything we’re certain about will probably be
          eventually proven wrong. Klosterman’s subtitle — Thinking About the
          Present As If It Were the Past — is a brilliant exercise for getting
          some perspective in 2018. Whether you think it’s going to be a year of
          radical change for the better or a horrible year of excesses of
          dangerous precedent, you’re probably wrong. You’re probably not even
          in the ballpark. This book shows you why, not with lectures about
          politics, but with a bunch of awesome thought experiments about music,
          books, movies and science. Rules for Radicals: A Practical Primer for
          Realistic Radicals by Saul Alinsky If Hillary Clinton had remembered
          the lessons of Saul Alinsky (who she wrote her college thesis on), the
          election may have turned out differently. Why? A notorious strategist
          and community organizer, Alinsky was a die hard pragmatist, but he
          also knew how to tell a story and create a collective cause. He could
          work within the system but knew how to shake it up and generate
          attention. This book is a classic and woefully underrated. Whatever
          you set out to do in 2018, this book can provide you with strategic
          guidance and insight. The Filter Bubble by Eli Pariser / Trust Me I’m
          Lying by Ryan Holiday / The Brass Check by Upton Sinclair I strongly
          recommend that you take the time in 2018 to read these books. In light
          of this year, you owe it to yourself to study and better understand
          how our media system works. In The Filter Bubble, Eli Pariser warns of
          the danger of living in bubbles of personalization that reinforce and
          insulate our worldview. Though Sinclair’s The Brass Check has been
          almost entirely forgotten by history, it’s not only fascinating but a
          timeless perspective. Sinclair deeply understood the economic
          incentives of early 20th century journalism and thus could predict and
          analyze the manipulative effect it had on The Truth. I used that book
          as a model for my expose of the media system, Trust Me, I’m Lying.
          Today, the incentives and pressures are different but they warp our
          information in a similar way. In almost every substantial charge Upton
          leveled against the yellow press, you could, today, sub in blogs and
          the cable news cycle and be even more correct. 48 Laws of Power / 33
          Strategies of War by Robert Greene Robert Greene is a master of human
          psychology and human dynamics — he has a profound ability to explain
          timeless truths through story and example. You can read the classics
          and not always understand the lessons. But if you read Robert’s books,
          I promise you will leave not just with actionable lessons but an
          indelible sense of what to do in many trying and confusing situations.
          I wrote earlier this year that strategic wisdom is not something we
          are born with — but the lessons are there for us to pick up. Pick
          these two up before the year ends and operate the next with a
          strategic mindset and clarity. Conspiracy: Peter Thiel, Hulk Hogan,
          Gawker, and the Anatomy of Intrigue by Ryan Holiday — If you want to
          immerse yourself in the above topics of media and strategy, and are
          looking for one book to teach you lessons in both, my book on the
          nearly decade-long conspiracy that billionaire Peter Thiel waged
          against Gawker will do this for you. This is a stunning story about
          how power works in the modern age, and is a masterclass in strategy
          and how to accomplish wildly ambitious aims. The Road To Character by
          David Brooks When General Stanley McChrystal was asked on the Tim
          Ferriss podcastwhat was a recent purchase that had most positively
          impacted his life, he pointed to this book. I agree. It can be a bit
          stilted and dense at times, but it should be assigned reading to any
          young person today (a little challenge is a good thing). Illustrating
          with examples and stories from great men and women, Brooks admonishes
          the reader to undertake their own journey of character perfection. In
          my own book, I explore the same topic (humility) from a different
          angle using similar stories — I’m attacking ego, he’s building up
          character. Both will be important for the next year. The Dip by Seth
          Godin This book is a short 70 pages and it looks like something
          someone would give as a joke gift, but it’s anything but. Godin talks
          frankly about quitting and pushing through — and when to do each. Quit
          when you’ll be mediocre, when the returns aren’t worth the investment,
          when you no longer think you’ll enjoy the ends. Stick when the dip is
          the obstacle that creates scarcity, when you’re simply bridging the
          gap between beginner’s luck and mastery. I promise, next year you are
          guaranteed to find yourself in moments when you don’t know what is the
          right answer. This book will help you find it. Hillbilly Elegy: A
          Memoir of a Family and Culture in Crisis by J. D. Vance / Strangers in
          Their Own Land: Anger and Mourning on the American Right by Arlie
          Russell Hochschild You might describe Hillbilly Elegy as a Ta-Nehisi
          Coates style memoir about a community that — at least in progressive
          circles — gets a lot less attention: disaffected, impoverished whites
          (particularly in the mid-east and South). I thought the book was
          empathetic, self-aware and inspiring. The author pokes some holes in
          the concept of “white privilege” — certainly a third or fourth
          generation hillbilly in Kentucky doesn’t walk around feeling like they
          have it easy — and an explanation of some of the phenomenon behind
          Donald Trump (notice I said explanation, not an excuse).
        </p>
        <Claps />
        <hr width="800px" color="lightgrey"></hr>
        {follows.map((follow, index) => (
          <div id={index} className="follow">
            <div className="image">
              <img src={follow.image} alt="-" />
            </div>
            <div className="comment">
              <strong>{follow.nama}</strong>
              <p>{follow.comment}</p>
            </div>
            <div className="follow-button">
              <div>Follow</div>
            </div>
          </div>
        ))}
        <div className="response-button">
          <p>
            <Link to="/Comment" id="link-response">
              Response
            </Link>
          </p>
        </div>
        <br></br>
        <br></br>

        <div className="related-post">
          <h3 style={{ float: "left", marginLeft: "40px" }}>
            More From Medium
          </h3>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={spacing}>
                <Grid item>
                  <Paper className={classes.paper}>
                    <img src="http://bisnisbandung.com/wp-content/uploads/2017/12/youtube-crowd-uproar-protest-ss-19201920.jpg" alt="-" />
                    <Link className={classes.linkRelated}>
                      <h2>We Can Visit You Tube to Get Much of Video</h2>
                    </Link>
                    <div className={classes.relatedProfile}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className={classes.relatedPostAvatar}
                      >
                        <img
                          style={{ height: "100%" }}
                          src="https://miro.medium.com/max/960/1*K7Gi5y5g882yBNyhAEv84A.jpeg"
                          alt="-"
                        />
                      </Avatar>
                      <p>Jason Voorhees</p>
                    </div>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    <img src="https://cnet1.cbsistatic.com/img/eOEoOQ4eSDQPxbPCJASBnbsjpmQ=/1092x0/2019/08/14/d9363e04-fd4f-4a81-97ae-88a25d5feef0/gettyimages-858489898.jpg" alt="-" />
                    <Link className={classes.linkRelated}>
                      <h2>You Can Meet Your Favourite Artist Here</h2>
                    </Link>
                    <div className={classes.relatedProfile}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/broken-image.jpg"
                        className={classes.relatedPostAvatar}
                      >
                        <img
                          style={{ height: "100%" }}
                          src="https://upload.wikimedia.org/wikipedia/commons/0/01/CoreyTaylorGmm.jpg"
                          alt="-"
                        />
                      </Avatar>
                      <p>Corey Taylor</p>
                    </div>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    <img src="https://devclass.com/wp-content/uploads/2018/12/Oracle.jpg" alt="-" />
                    <Link className={classes.linkRelated}>
                      <h2>Oracle is The World Most Bigger DBMS</h2>
                    </Link>
                    <div className={classes.relatedProfile}>
                      <Avatar
                        alt="Remy Sharp"
                        className={classes.relatedPostAvatar}
                      >
                        <img
                          style={{ height: "100%" }}
                          src="https://gossipgist.com/uploads/19/lionel-messi.jpg"
                          alt="-"
                        />
                      </Avatar>
                      <p>Lionel Messi</p>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.underRelated}>
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                  <Grid item>
                    <Paper className={classes.bottom}>
                      <h3>Discover Medium</h3>
                      <p>
                        Welcome to a place where words matter. On Medium, smart
                        voices and original ideas take center stage - with no
                        ads in sight.
                      </p>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper className={classes.bottom}>
                      <h3>Make Medium Yours</h3>
                      <p>
                        Follow all the topics you care about, and we’ll deliver
                        the best stories for you to your homepage and inbox.
                        Explore
                      </p>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper className={classes.bottom}>
                      <h3>Become a Member</h3>
                      <p>
                        Get unlimited access to the best stories on Medium — and
                        support writers while you’re at it. Just $5/month.
                        Upgrade
                      </p>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <hr
              style={{ width: "90%", marginTop: 30, color: "lightgrey" }}
            ></hr>
            <br></br>
            <br></br>
            <h2
              style={{
                textAlign: "left",
                color: "#fff",
                fontFamily: "Baskerville Old Face",
                position: "relative",
                left: "85px"
              }}
            >
              Medium
            </h2>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
