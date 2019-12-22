import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Home.css";

const useStyles = makeStyles({
  card: {
    width: "100%",
    boxShadow: "none"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard() {
  const populars = [
    {
      category: "android",
      title: "What is Android Studio?",
      content:
        "Android Studio adalah Integrated Development Enviroment (IDE) untuk sistem operasi Android, yang dibangung diatas perangkat lunak JetBrains IntelliJ IDEA dan didesain khusus untuk pengembangan Android. IDE ini merupakan pengganti dari Eclipse Android Development Tools (ADT) yang sebelumnya merupakan IDE utama untuk pengembangan aplikasi android."
    },
    {
      category: "web programming",
      title: "What is React.js",
      content:
        "React Js adalah sebuah library JavaScript yang di buat oleh facebook. React bukanlah sebuah framework MVC. React adalah library yang bersifat composable user interface, yang artinya kita dapat membuat berbagai UI yang bisa kita bagi menjadi beberapa komponen."
    },
    {
      category: "android",
      title: "What is React Native",
      content:
        "Pada dasarnya react native adalah sebuah framework dari Javascript yang banyak dikembangkan oleh perusahaan besar dalam bidang teknologi seperti Facebook. Jadi, dengan react native kamu tidak perlu membuat aplikasi hybrid."
    }
  ];

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      {populars.map(popular => (
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {popular.category}
          </Typography>
          <Typography variant="h5" component="h2">
            {popular.title}
          </Typography>
          <Typography variant="body2" component="p">
            {popular.content}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      ))}
    </Card>
  );
}
