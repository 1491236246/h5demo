
import styles from './success.css';
import router from 'umi/router';
import { message } from 'antd';


export default function({location}) {
  console.log(location.query.status);

  function handleAddTeacher(){
    if(location.query.status == true){
      router.push('/addteacher');
    }else{
      message.error('订单尚未支付成功，请重新支付');
    }
  }

  function handleContinue(){
    if(location.query.status == true){
      message.success('您已购买该课程');
    }else{
      location.query.status = true;
      router.push('/addteacher');
    }
  }



  return (
    <div className={styles.normal}>
      <header className={styles.header}>购课成功</header>
      <div className={styles.content}>
        <div className={styles.succesModel}>
          <p>支付成功</p>
          <p>添加老师入营学习</p>
          <div className={styles.addTeacher} onClick={handleAddTeacher}>加老师 > </div>
        </div>
        <div className={styles.fail}>
          <p>未支付成功</p>
          <p>未打开微信或未完成付款，请点击进行下一步</p>
        </div>
        <div className={styles.continue} onClick={handleContinue}>
          未付款，继续支付》
        </div>
      </div>
    </div>
  );
}
