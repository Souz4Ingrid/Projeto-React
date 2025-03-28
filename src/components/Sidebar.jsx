// import { PencilLine} from 'phospor-react'

import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.sidebar}
                src="https://avatars.githubusercontent.com/u/195520499?v=4"
            />

            <div className={styles.profile}>
                <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/195520499?v=4" />


                <strong>Ingrid Souza</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}