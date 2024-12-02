import Card from './card/Card.jsx'
import style from './Main.module.css'

//importo posts.js
import { posts } from '../../posts.js'

//importo useState
import { useState } from 'react'

export default function Main() {

    //stampo solo post pubblici
    const pubPosts = posts.filter((post) => post.published === true)

    // variabili per nuovo post
    const [title, setTitle] = useState('')
    const [newPost, setNewPost] = useState(posts)

    function addPost(event) {
        event.preventDefault()

        const newTitle = title.trim()

        if (newTitle === '') return

        const addPost = {
            id: Date.now(),
            title: newTitle,
            image: undefined,
            content: 'Nuovo contenuto del post',
            tags: [],
            published: true,
        }

        setNewPost(prevPosts => [...prevPosts, addedPost])
        console.log('stai aggiungendo un nuovo post')

    }

    // Elimino un post
    // function deletePost(postId) {
    //     setNewPost(prevPosts => prevPosts.filter(post => post.id !== postId))
    // }


    return (
        <main>
            <section className={style.container}>
                <h1 className={style.title_blog}>Il mio blog</h1>
                <div className={style.container}>
                    <form className={style.form} action="" onSubmit={addPost}>
                        <input className={style.post_form} type="text" placeholder='Nuovo Post' value={title} onChange={(e) => setTitle(e.target.value)} />
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