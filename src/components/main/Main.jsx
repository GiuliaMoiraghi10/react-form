import Card from './card/Card.jsx'
import style from './Main.module.css'

//importo posts.js
import { posts } from '../../posts.js'

//importo useState
import { useState } from 'react'

//stampo solo post pubblici
const pubPosts = posts.filter((post) => post.published === true)

// disabilito invio del form
function addPost(e) {
    e.preventDefault()
    console.log('Aggiungi post')
}

// creo variabile per eliminare spazi nell'input del form
const newTitle = title.trim()

// input per creare un nuovo post
const [title, setTitle] = useState('')
// const [posts, setPosts] = useState('')

// invoco funzione a cui fa aggiunto l'array completo di posts + il nuovo post da form
setPosts([...posts, newPostTitle])

// creo variabile con oggetto gli elementi che mi servono per creare nuovo post
const newPostTitle = {
    id: Date.now(),
    title: newTitle,
    image: placeholder,
    content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
    tags: ['html', 'css'],
    published: true,
}


export default function Main() {

    return (
        <main>
            <section className={style.container}>
                <h1 className={style.title_blog}>Il mio blog</h1>
                <div className={style.container}>
                    <form className={style.form} action="" onSubmit={addPost}>
                        <input className={style.post_form} type="text" placeholder='Nuovo Post' value={newTitle} onChange={(e) => setTitle(e.target.value)} />
                        <input className={style.submit_form} type="submit" value='Aggiungi' />
                    </form>
                    <div className={style.raw}>
                        {pubPosts.map(post => <div key={post.id} className={style.col_4}>
                            <Card post={post} />
                        </div>)}
                    </div>
                </div>
            </section>
        </main>
    )
}