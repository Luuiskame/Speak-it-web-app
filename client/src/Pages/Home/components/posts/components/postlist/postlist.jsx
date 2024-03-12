import React from "react";
import styles from "./postlist.module.css";

const Postlist = ({ user }) => {
  return (
    <div className={styles.postwrapper}>
      <div>
        <span className={styles.wrapperuserinfo}>
          <img src={user.profilepicture} alt="" />
          <div className={styles.userinfo}>
            <a href="" className={styles.name}>
              {user.name}
            </a>
            <a className={styles.usernamelink} href="">
              @{user.username}
            </a>
          </div>
        </span>
        <span className={styles.more}>
          <img src="../../../../resources/png/more.png" alt="" />
        </span>
      </div>

      <div>
        <p> crappy AI generated image :v </p>
        {/* uploadedimage */}
        <img src={user.postimage} alt="" />
      </div>

      <div>
        <span>
          <img src="" alt="" />
        </span>
        <span>
          <img src="" alt="" />
        </span>
        <span>
          <img src="" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Postlist;
