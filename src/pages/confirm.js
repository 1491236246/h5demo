
import styles from './confirm.css';

export default function({changeshow,setTime}) {

  function handleInitial(){
    changeshow(false,false);
    setTime(180000);
  }

  return (
    <div className={styles.normal}>
      <div className={styles.back}></div>
      <div className={styles.aleContent}>
        <p className={styles.header}>真的要放弃吗？</p>
        <span className={styles.uncertain} onClick={handleInitial}>再看看</span>
        <span className={styles.money} onClick={()=>changeshow(true,false)}>我要赚钱</span>
      </div>
      <img 
        className={styles.close} 
        src={require("../assets/images/close_btn.png")} 
        onClick={handleInitial}
        alt="图片加载失败"/>
    </div>
  );
}
