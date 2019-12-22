import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Home.css";

const useStyles = makeStyles({
  card: {
    width: "100%",
    overflowY: "auto",
    overflow: "hidden",
    texAlign: "justify",
    boxShadow: "none"
  },
  container: {
    height: "800px",
    overflow: "auto",
    margin: "15px -300px 15px 15px",
    paddingRight: "300px"
  },
  bullet: {
    display: "inline-block",
    borderBottom: "1px solid lightgrey",
    marginBottom: "10px"
  },
  image: {
    width: "160px",
    height: "140px",
    paddingRight: "10px",
    float: "left"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function LastPost() {
  const populars = [
    {
      image: "https://img.utdstc.com/icons/android-studio-.png:l",
      category: "android",
      title: "What is Android Studio?",
      content:
        "Android Studio adalah Integrated Development Enviroment (IDE) untuk sistem operasi Android, yang dibangung diatas perangkat lunak JetBrains IntelliJ IDEA dan didesain khusus untuk pengembangan Android. IDE ini merupakan pengganti dari Eclipse Android Development Tools (ADT) yang sebelumnya merupakan IDE utama untuk pengembangan aplikasi android.[1]"
    },
    {
      image:
        "http://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png",
      category: "web programming",
      title: "What is React.js",
      content:
        "React Js adalah sebuah library JavaScript yang di buat oleh facebook. React bukanlah sebuah framework MVC. React adalah library yang bersifat composable user interface, yang artinya kita dapat membuat berbagai UI yang bisa kita bagi menjadi beberapa komponen."
    },
    {
      image: "https://angular.github.io/react-native-renderer/assets/react.png",
      category: "android",
      title: "What is React Native",
      content:
        "Pada dasarnya react native adalah sebuah framework dari Javascript yang banyak dikembangkan oleh perusahaan besar dalam bidang teknologi seperti Facebook. Jadi, dengan react native kamu tidak perlu membuat aplikasi hybrid."
    },
    {
      image: "https://blog.pucc.or.id/wp-content/uploads/2019/06/php.jpg",
      category: "web programming",
      title: "Introducing PHP:",
      content:
        "Bahasa pemrograman PHP biasanya tidak digunakan pada keseluruhan pengembangan website, melainkan dikombinasikan dengan beberapa bahasa pemrograman lain. Misalnya saja untuk mengatur tampilan, layout, dan berbagai macam menu menggunakan CSS."
    },
    {
      image: "https://blog.pucc.or.id/wp-content/uploads/2019/06/php.jpg",
      category: "web programming",
      title: "Introducing PHP:",
      content:
        "Bahasa pemrograman PHP biasanya tidak digunakan pada keseluruhan pengembangan website, melainkan dikombinasikan dengan beberapa bahasa pemrograman lain. Misalnya saja untuk mengatur tampilan, layout, dan berbagai macam menu menggunakan CSS."
    },
    {
      image: "https://blog.pucc.or.id/wp-content/uploads/2019/06/php.jpg",
      category: "web programming",
      title: "Introducing PHP:",
      content:
        "Bahasa pemrograman PHP biasanya tidak digunakan pada keseluruhan pengembangan website, melainkan dikombinasikan dengan beberapa bahasa pemrograman lain. Misalnya saja untuk mengatur tampilan, layout, dan berbagai macam menu menggunakan CSS."
    },
    {
      image: "https://blog.pucc.or.id/wp-content/uploads/2019/06/php.jpg",
      category: "web programming",
      title: "Introducing PHP:",
      content:
        "Bahasa pemrograman PHP biasanya tidak digunakan pada keseluruhan pengembangan website, melainkan dikombinasikan dengan beberapa bahasa pemrograman lain. Misalnya saja untuk mengatur tampilan, layout, dan berbagai macam menu menggunakan CSS."
    },
    {
      image: "https://blog.pucc.or.id/wp-content/uploads/2019/06/php.jpg",
      category: "web programming",
      title: "Introducing PHP:",
      content:
        "Bahasa pemrograman PHP biasanya tidak digunakan pada keseluruhan pengembangan website, melainkan dikombinasikan dengan beberapa bahasa pemrograman lain. Misalnya saja untuk mengatur tampilan, layout, dan berbagai macam menu menggunakan CSS."
    }
  ];

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <div className={classes.container}>
        {populars.map(popular => (
          <CardContent className={classes.bullet}>
            <div>
              <img src={popular.image} className={classes.image}></img>
            </div>
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
      </div>
    </Card>
  );
}
