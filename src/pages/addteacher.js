
import styles from './addteacher.css';
import router from 'umi/router';
import { message } from 'antd';

export default function() {

  // 复制微信号函数
  function Copy(str) {
    var save = function(e) {
      e.clipboardData.setData('text/plain', str);
      e.preventDefault();
    };
    document.addEventListener('copy', save);
    document.execCommand('copy');
    document.removeEventListener('copy', save);
    message.success('复制成功');
  }


  return (
    <div className={styles.normal}>
      <header className={styles.header}>
        <p>
          <span onClick={()=>router.push("/")}> {'<'} </span>
        购课成功
        </p>
        <p>训练营加群信息</p>
        <p>请在开课前加班主任微信，进入训练营学习</p>
      </header>
      <div className={styles.qrCode}>
        <img src={require('../assets/images/heads.gif')} alt="图片加载失败"/>
        <p style={{textAlign:'center'}}>复制班主任微信号shangdeWMM,立即找老师</p>
        <div className={styles.clone} onClick={()=>Copy("shangdeWMM")}>
          一键复制微信号
        </div>
      </div>
    </div>
  );
}
