import RandomNum from "./RandomNum/RandomNum"

import styles from "./user.module.scss"

const User = (props) => {
    return (
    <div className={styles.box}>
      <RandomNum /> 
      <div className={styles["user-info"]}>
        <span className={styles["user-name"]}>{props.name} </span>
        <span className={styles["user-age"]}>{props.age}</span>
      </div>
    </div>
    )
}

export default User