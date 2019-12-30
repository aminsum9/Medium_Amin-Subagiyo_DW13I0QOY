import React, { Component } from "react";
import "../App.css";
import { Container, Grid, Box, Typography, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "./Category.css";

class Contain extends Component {
  // const classes = useStyles();

  constructor() {
    super();

    this.state = {
      postitems: [
        {
          title: "The Case for Removing All Politicians From Twitter",
          pieceofcontent: "Political omnipresence has gone too far",
          author: "Robert Howell",
          time: "Dec 11 · 5 min read",
          photourl:
            "https://miro.medium.com/max/5184/1*11AJIbhFAuf_YHf14jiKhQ.jpeg"
        },
        {
          title:
            "Uber Delivery Workers in Mexico Track Thieves Through a Secret WhatsApp Network",
          pieceofcontent:
            "A 1,000-person WhatsApp community keeps delivery workers safe",
          author: "Martha Pskowski",
          time: "Dec 11 · 9 min read",
          photourl:
            "https://miro.medium.com/max/4000/1*TBVJ41WGvXQMDZTLhl0RbA.jpeg"
        },
        {
          title:
            "A New Smart Contact Lens Can Charge Wirelessly Without Burning Your Eyeballs",
          pieceofcontent:
            "The technology uses supercapacitors and will help speed the creation of contacts lenses that monitor the body",
          author: "Yasmin Tayag",
          time: "Dec 11 · 3 min read",
          photourl:
            "https://miro.medium.com/max/559/1*-8KL6r_tNZ9B2Lfz_9dc0Q.png"
        },
        {
          title: "‘I Felt Like a Time Traveler’: 6 Months Without the Internet",
          pieceofcontent:
            "The artist Nastja Säde Rönkkö talks about what life was like when she utterly disconnected from the online world for half a year",
          author: "Thomas McMullan",
          time: "Dec 11 · 5 min read",
          photourl:
            "https://miro.medium.com/max/5747/1*csm12WLUqj53wH7gajw8Rg.jpeg"
        },
        {
          title:
            "If It’s OK to Fantasize About Someone You Know, Why Not in VR?",
          pieceofcontent:
            "Erotic deepfakes are only going to make the question of sexual ethics muddier and more confusing",
          author: "Lux Alptraum",
          time: "Dec 11 · 5 min read",
          photourl:
            "https://miro.medium.com/max/6300/1*Tc40NLUUtVafKwrl28VBrQ.jpeg"
        }
      ]
    };
  }

  render() {
    return (
      <div className="root">
        <div
          style={{
            width: "1200",
            height: "200px",
            display: "flex",
            alignItems: "center"
          }}
        >
          <h1 style={{ fontSize: "70px" }}>OneZero</h1>
        </div>
        {/* line 1 */}
        <Grid container className="container">
          <Grid item xs={12} sm={7}>
            <Paper className="paper">
              <img
                src="https://miro.medium.com/max/2400/1*Po5iwkzhd6kr6gmgagEsSg.jpeg"
                width="100%"
                height="100%"
              ></img>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Paper className="paper" style={{ backgroundColor: "aqua" }}>
              <div>
                <h1>OneZero’s Best Tech and Science Stories of 2019</h1>
                <h3>
                  From engineering a better cannabis to eluding ad tracking,
                  here are the top stories from our first year of existence, as
                  selected by… us
                </h3>
                <p>Damon Beres Dec</p>
                <p>23 · 5 min read</p>
              </div>
            </Paper>
          </Grid>
        </Grid>
        {/* Line 2 */}
        <Grid container className="container">
          <Grid item xs={12} sm={5}>
            <Paper
              className="paper"
              style={{ backgroundColor: "magenta", color: "#000000" }}
            >
              <div>
                <h1>
                  Cheat Sheet: The Most Important Gene Editing Stories of 2019
                </h1>
                <h3>Human trials, bird flu, gene editing in space, and more</h3>
                <p>Emily Mullin</p>
                <p>Dec 24 · 6 min read</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Paper className="paper">
              <img
                src="https://miro.medium.com/max/2400/1*lEZVAo29vrotlBt46xdlOQ.jpeg"
                width="100%"
                height="100%"
              ></img>
            </Paper>
          </Grid>
        </Grid>
        {/* Line 3 */}
        <Grid container className="container">
          <Grid item xs={12} sm={7}>
            <Paper className="paper">
              <img
                src="https://miro.medium.com/max/2400/1*2GYRCovC8i90XruLtRuZSA.jpeg"
                width="100%"
                height="100%"
              ></img>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Paper className="paper" style={{ backgroundColor: "aqua" }}>
              <div>
                <h1>Cybertrucks and Folding Phones: 2019’s Worst Tech Ideas</h1>
                <h3>A rundown of a no good, very bad year in tech ideas</h3>
                <p>Steve Rousseau</p>
                <p>Dec 20 · 9 min read</p>
              </div>
            </Paper>
          </Grid>
        </Grid>
        {/* Line 4 */}
        <Grid container className="container">
          <Grid item xs={12} sm={5}>
            <Paper
              className="paper"
              style={{ backgroundColor: "magenta", color: "#000000" }}
            >
              <div>
                <h1>Stories From Beyond: The Articles We Loved in 2019</h1>
                <h3>
                  OneZero staffers select their favorite reads from around the
                  web
                </h3>
                <p>Damon Beres</p>
                <p>Dec 16 · 6 min read</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Paper className="paper">
              <img
                src="https://miro.medium.com/max/2400/1*y-48TGgxftkQhHNsK-Jf1g.jpeg"
                width="100%"
                height="100%"
              ></img>
            </Paper>
          </Grid>
        </Grid>
        {this.state.postitems.map(item => {
          return (
            <div>
              <div>
                <center>
                  <hr
                    style={{
                      marginLeft: "auto",
                      marginTop: "40px",
                      marginBottom: "30px",
                      width: "680px"
                    }}
                  />
                </center>
                <Grid container>
                  <Grid item md={8} lg={8} className="OuterGrid">
                    <Grid className="PostItem">
                      <Box className="PostTitle">{item.title}</Box>
                      <Box className="PieceOfContent">
                        {item.pieceofcontent}
                      </Box>
                      <Box className="Author">{item.author}</Box>
                      <Box className="Time">{item.time}</Box>
                    </Grid>
                    <Grid className="Photo">
                      <img src={item.photourl} />
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Contain;
