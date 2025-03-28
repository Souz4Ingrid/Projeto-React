import styles from './Header.module.css'

// import igniteLogo from '..COLOCAR IMAGEM'

const src = "https://avatars.githubusercontent.com/u/195520499?v=4"

// console.log(igniteLogo);

export function Header() {
    return (
      <header className={styles.header}>
        <img src={src} alt="Logotipo do Ignite" />
    </header>
    );
}