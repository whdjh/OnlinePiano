import styles from './Header.module.css';
import Logo from '../../public/Logo.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <Link href='/'>
        <div className={styles.container}>
          <Logo width={80} height={80} />
          <p className={styles.title}>가상 피아노</p>
        </div>
      </Link>
      <hr className={styles.line} />
    </>
  );
}