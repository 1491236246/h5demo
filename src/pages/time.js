
import styles from './time.css';
import React, { useState , useEffect} from 'react';
import { dataFormat } from '../plguins/getTime'

export default function () {

  function getTime() {
    //获取当天 23:59:59的时间戳
    const zeroStart = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
    //获取zeroStart减去当前时间的时间戳
    const differenceDate = zeroStart.getTime() - new Date().getTime();
    return differenceDate;
  }

  let now_time = dataFormat(getTime()).split(":");

  const [nowTime, setTime] = useState(now_time);

  

  useEffect(() => {
    const time1 = setInterval(function(){
      let nowTimes = dataFormat(getTime()).split(":");
      setTime(nowTimes);
    },1000);

    return function cleanup(){
      clearInterval(time1);
    }
  });



  return (
    <div className={styles.normal}>
      <div className={styles.head}>据购买仅剩</div>
      <div className={styles.timeContent}>
        <span className={styles.time}>{nowTime[0]}</span>
        <span className={styles.spot}>:</span>
        <span className={styles.time}>{nowTime[1]}</span>
        <span className={styles.spot}>:</span>
        <span className={styles.time}>{nowTime[2]}</span>
      </div>
    </div>
  );
}
