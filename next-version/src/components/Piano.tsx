import styles from './piano.module.css';

export default function Piano() {
  return (
    <div className={styles.piano}>
      <button className={`${styles.key} ${styles.white}`}>도</button>
      <button className={`${styles.key} ${styles.black}`}>레b</button>
      <button className={`${styles.key} ${styles.white}`}>레</button>
      <button className={`${styles.key} ${styles.black}`}>미b</button>
      <button className={`${styles.key} ${styles.white}`}>미</button>
      <button className={`${styles.key} ${styles.white}`}>파</button>
      <button className={`${styles.key} ${styles.black}`}>솔b</button>
      <button className={`${styles.key} ${styles.white}`}>솔</button>
      <button className={`${styles.key} ${styles.black}`}>라b</button>
      <button className={`${styles.key} ${styles.white}`}>라</button>
      <button className={`${styles.key} ${styles.black}`}>시b</button>
      <button className={`${styles.key} ${styles.white}`}>시</button>
    </div>
  );
}