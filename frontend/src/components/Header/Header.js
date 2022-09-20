import Logo from '../UI/Logo';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <span className={styles.logo}><Logo /></span>
      <div className={styles.hero}>
        <p className={styles.title}>Seu apartamento mobiliado pronto para morar</p>
        <p className={styles['sub-title']}>
          Apartamentos completos em São Paulo, Rio de Janeiro e Brasília desenhados para você se sentir em casa
        </p>
      </div>
    </header>
  )
}

export default Header;
