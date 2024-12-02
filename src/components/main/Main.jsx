import Card from './card/Card.jsx'
import style from './Main.module.css'

//importo posts.js
import { posts } from '../../posts.js'

//stampo solo post pubblici
const pubPosts = posts.filter((post) => post.published === true)

export default function Main() {

    return (
        <main>
            <section className={style.container}>
                <h1 className={style.title_blog}>Il mio blog</h1>
                <div className={style.container}>
                    <form className={style.form} action="">
                        <input className={style.post_form} type="text" placeholder='Nuovo Post' />
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