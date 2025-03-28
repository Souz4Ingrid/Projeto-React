import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/195520499?v=4',
      name: 'Ingrid Souza',
      role: 'CTO @ Rockeseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio.'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/195520499?v=4',
      name: 'Mayk Brito',
      role: 'Educator @Rockeseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio.'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
            )
          })}
        </main>
      </div>
    </div>
  )
}