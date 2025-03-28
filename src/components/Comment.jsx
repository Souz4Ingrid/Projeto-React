import { ThumbsUp, Trash } from 'phosphor-react';
import { useState }from 'react'; 
import { Avatar } from './Avatar';
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/195520499?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.CommentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ingrid Souza</strong>
                                <time>Cerca de 1h atrás</time>
                            </div>

                            <button onClick={handleDeleteComment}title="Deletar comentário">
                                <Trash size={18} />
                            </button>
                        </header>

            <p>{content}</p>
        </div>

                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)}>
                <ThumbsUp />
                Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}