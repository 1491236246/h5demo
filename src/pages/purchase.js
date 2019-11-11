
import styles from './purchase.css';
import React, { useState , useEffect } from 'react';
import { dataFormat } from '../plguins/getTime'

export default function ({changeStatus,time,setTime}) {
  let [timeVal, setVal] = useState(dataFormat(time));
  let [phoneVal, setPhoneVal] = useState("")
  
  useEffect(() => {
    let thrTime1 = setInterval(() => {
      setTime(time - 1000);
      setVal(dataFormat(time));
    },1000);

    return function cleanup(){
      clearInterval(thrTime1);
      if(time <= 0){
        setTime(180000);
      }
    }
  });

  function handleBindVal(e){
    setPhoneVal(e.target.value);
  }

  function handleTestVal(){
    if(!(/^1[3456789]\d{9}$/.test(phoneVal))){ 
      alert("手机号码有误，请重填");  
    }else{
      alert("成功")
    }
  }


  return (
    <div className={styles.normal}>
      <div className={styles.alemodel}></div>
      <div className={styles.aleContent}>
        <div>
          <div className={styles.close} onClick={()=>changeStatus(false,true)}></div>
          <div className={styles.head}>剩余支付时间</div>
          <div className={styles.time}>{timeVal}</div>
          <div className={styles.phone}>-上课手机号-</div>
          <div className={styles.inpPhone}>
            <img src={require("../assets/images/phone.png")} alt="图片加载失败"/>
            <input type="number" value={phoneVal} onChange={handleBindVal}/>
          </div>
          <div className={styles.immediate} onClick={handleTestVal}>立即购买</div>
        </div>
      </div>
    </div>
  );
}
