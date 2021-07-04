import React , {useState, useEffect} from 'react';

import styles from "./RandomNum.module.scss"
function RandomNum() {
  const [randomNum,setRandomNum] = useState(Math.round(Math.random() * 9));

  /*
  useEffect(()=>{
    const randomVal = Math.round(Math.random() * 10);
    setRandomNum(randomVal);
  },[])
  */
  
  return (
    <div className={styles["random-num-row"]}>
      {randomNum}
    </div>
  )
}

export default RandomNum
