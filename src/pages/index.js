import styles from './index.css';
import Time from './time';
import Purchase from './purchase';
import Confirm from './confirm';
import React, { useState , useEffect } from 'react';

export default function () {

  let [time,setTimeVal] = useState(180000);
  let [aleStatus,setStatus] = useState(false);
  let [conStatus,setConStatus] = useState(false);

  function handleChangeStatus(alestatus,constatus){
    console.log(alestatus,constatus);
    setStatus(alestatus);
    setConStatus(constatus);
  }


  return (
    <div>
      <div className={styles.normal}>
        <Time></Time>
      </div>
      <div className={styles.explain}></div>
      <div className={styles.footer}></div>
      <div className={styles.fix}>
        <span>￥9.9</span>
        <span onClick={()=>setStatus(true)}>立即购买</span>
      </div>
      {
        aleStatus ? <Purchase changeStatus={handleChangeStatus}  time={time} setTime={setTimeVal}></Purchase> : null
      }
      {
        conStatus ? <Confirm  changeshow={handleChangeStatus} setTime={setTimeVal}></Confirm> : null
      }
      
    </div>
  );
}
