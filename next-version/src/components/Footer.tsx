import styles from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        "온라인 피아노를 사용하면 웹 브라우저에서 피아노 키보드의 거의 모든 악기를 연주할 수 있습니다.
        <br />노트북이나 데스크탑이 있다면 연주할 수 있는 온라인 피아노입니다.
        <br />노트북 키보드를 사용하여 연주할 수 있는 피아노가 제공됩니다."
      </div>
      <div className={styles.container}>
        <br />어떻게 사용하나요?
        <br />괄호안에 있는 문자를 이용해 키보드를 눌러 음을 나오게 만듭니다.
      </div> 
    </>
  );
}