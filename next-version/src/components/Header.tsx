import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Link href='/'>
        <div className={styles.container}>
          <p className={styles.title}>가상 피아노</p>
        </div>
      </Link>
      <hr className={styles.line} />
    </>
  );
}