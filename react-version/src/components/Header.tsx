import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>가상 피아노</p>
      </div>
      <hr className={styles.line} />
    </>
  );
}
