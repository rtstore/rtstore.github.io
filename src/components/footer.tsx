import styles from "./footer.less";
import twitterImage from "../assets/twitter_.png";
import redditImage from "../assets/reddit_.png";
import discordImage from "../assets/discord_.png";
import youtubeImage from "../assets/youtube_.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <svg
          width="134"
          height="48"
          viewBox="0 0 134 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.76 10.96C38.6 10.96 38 11.52 38 12.64V36.28C38 37.44 38.6 38 39.76 38H54.36C59.2 38 62.76 36.32 65.24 33.6C67.4 31.24 68.72 28.04 68.72 24.48C68.72 20.56 67.04 17 64.36 14.52C61.96 12.32 58.72 10.96 54.36 10.96H39.76ZM54.36 18.12C56.8 18.12 58.32 18.8 59.48 19.88C60.72 21.04 61.48 22.72 61.48 24.52C61.48 26.16 60.84 27.68 59.8 28.8C58.64 30.08 56.92 30.88 54.36 30.88H45.76C45.4 30.88 45.24 30.72 45.24 30.32V18.68C45.24 18.28 45.4 18.12 45.76 18.12H54.36ZM74.0588 10.96C72.8587 10.96 72.2588 11.52 72.2588 12.64V36.28C72.2588 37.44 72.8587 38 74.0588 38H93.7788C96.9788 38 99.0588 36.96 100.459 35.32C101.619 33.96 102.339 32.2 102.339 30.28C102.339 27.8 101.339 25.44 99.3388 24.4C101.099 23.24 102.059 21.24 102.059 18.92C102.059 16.64 101.259 14.84 100.019 13.52C98.4588 11.84 96.2188 10.96 93.3788 10.96H74.0588ZM79.4988 26.88H92.0588C93.1388 26.88 93.6988 27.16 94.1388 27.64C94.4988 28.04 94.7388 28.56 94.7388 29.12C94.7388 29.68 94.5388 30.2 94.1788 30.64C93.7788 31.12 93.1388 31.44 92.0588 31.44H80.0588C79.6588 31.44 79.4988 31.24 79.4988 30.84V26.88ZM79.4988 22.04V18.36C79.4988 17.96 79.6588 17.76 80.0588 17.76H92.0988C93.0988 17.76 93.6988 18.08 94.0988 18.56C94.3788 18.92 94.5788 19.4 94.5788 19.88C94.5788 20.36 94.3788 20.84 94.0988 21.2C93.6988 21.72 93.0988 22.04 92.0988 22.04H79.4988ZM104.788 10.96V18.12H120.828C121.108 18.12 121.268 18.28 121.268 18.48C121.268 18.72 121.148 18.84 120.868 19L116.188 21.96C115.108 22.64 114.548 23.24 114.548 24.36C114.548 25.6 115.068 26.72 117.188 26.72H122.628C124.428 26.72 125.068 27.64 125.068 28.88C125.068 30.12 124.428 31.08 122.628 31.08H104.708V38H124.788C130.308 38 133.428 34.2 133.428 30C133.428 25.08 130.548 22.68 126.388 22.24C126.188 22.2 126.108 22.08 126.108 21.92C126.108 21.84 126.148 21.68 126.268 21.6L130.668 18.4C131.988 17.4 132.708 16.4 132.708 14.92C132.708 12.68 131.188 10.96 128.188 10.96H104.788Z"
            fill="#3B38E6"
          />
          <rect y="10" width="28" height="28" fill="#3B38E6" />
        </svg>
      </div>
      <div className={styles.copyright}>
        Copyright @ DB3 Team | All Rights Reserved
      </div>
      <div className={styles.links}>
        <a className={styles.linksItem}>
          <img src={twitterImage} />
        </a>
        <a className={styles.linksItem}>
          <img src={discordImage} />
        </a>
        <a className={styles.linksItem}>
          <img src={youtubeImage} />
        </a>
        <a className={styles.linksItem}>
          <img src={redditImage} />
        </a>
      </div>
    </div>
  );
}