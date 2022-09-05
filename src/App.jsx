import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/34076589?v=4",
      name: "Herbert Vieira",
      role: "Front End Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-09-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://scontent.fbhz2-2.fna.fbcdn.net/v/t39.30808-6/271769513_4496925733750815_2232352459913375795_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGOeYBK3WOr5zztBQWSsPVSrXK0yZG-68GtcrTJkb7rwc9oAR9sdyWNNgcqZ-Exq_n2P_YPie7aLQf71N02kpzX&_nc_ohc=M2VtXJPRTIwAX_v85M4&_nc_ht=scontent.fbhz2-2.fna&oh=00_AT-APC3UOO9wzfqPVQH70EWRboZaqA4QKn3_z6ekkB3ixQ&oe=631A089D",
      name: "Larissa de Paula",
      role: "Mulher da minha Vida",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-09-02 18:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
