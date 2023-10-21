import styles from "./Banner.module.css";
import BackgroundImage from "../../assets/image 13.jpg";
const Banner = () => {
  return (
    <>
      {/* <div className={styles.top}>
                <p>Already Have an Account ?</p>
                <button>LOGIN</button>
            </div> */}
      <div className={styles.bottom}>
        <p>Discover new things on SuperApp</p>
      </div>
      <img src={BackgroundImage} />
    </>
  );
};

export default Banner;