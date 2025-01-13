import styles from './Header.module.css';
import Logo from '../../public/Logo.svg';

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <Logo />
        <p className={styles.title}>가상 피아노</p>
      </div>
      <hr className={styles.line} />
    </>
  );
}