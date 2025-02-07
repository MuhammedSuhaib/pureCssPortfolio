import React from "react";
import Image from "next/image";
import { Merienda } from "next/font/google";
import styles from './Technologies.module.css';

const merienda = Merienda({ subsets: ["latin"], weight: ["400", "700"] });

function Technologies() {
  return (
    <div className={styles["technologies-container"]}>
      <h1 className={`${merienda.className} ${styles.title} ${styles.titlemd}`}>
        Technologies
      </h1>
      <div className={`${styles["list-row"]} ${styles["list-column-small"]}`}>
        {/* Row 1 */}
        <ul className={styles["list-column"]}>
          <li className={styles["list-item"]}>
            <Image
              src="/h.png"
              alt="HTML"
              width={100}
              height={100}
              className="size-[140px]"
            />
            <p className={styles["list-item-text"]}>HTML</p>
          </li>
          <li className={styles["list-item"]}>
            <Image src="/c.png" alt="CSS" width={100} height={100} />
            <p className={styles["list-item-text"]}>CSS</p>
          </li>
          <li className={styles["list-item"]}>
            <Image src="/js.png" alt="JavaScript" width={100} height={100} />
            <p className={styles["list-item-text"]}>JavaScript</p>
          </li>
          <li className={styles["list-item"]}>
            <Image
              src="/ts.png"
              alt="TypeScript"
              width={100}
              height={100}
              className="size-[140px]"
            />
            <p className={styles["list-item-text"]}>TypeScript</p>
          </li>
        </ul>
        {/* Row 2 */}
        <ul className={`${styles["list-column"]} ${styles["list-column-small"]}`}>
          <li className={styles["list-item"]}>
            <Image src="/nodejs.png" alt="Node.js" width={100} height={100} />
            <p className={styles["list-item-text"]}>Node.js</p>
          </li>
          <li className={styles["list-item"]}>
            <Image src="/npm.png" alt="npm" width={100} height={100} />
            <p className={styles["list-item-text"]}>npm</p>
          </li>
          <li className={styles["list-item"]}>
            <Image src="/nextjs.png" alt="Next.js" width={100} height={100} />
            <p className={styles["list-item-text"]}>Next.js</p>
          </li>
          <li className={styles["list-item"]}>
            <Image
              src="/tailwind.png"
              alt="Tailwind CSS"
              width={100}
              height={100}
            />
            <p className={styles["list-item-text"]}>Tailwind CSS</p>
          </li>
          <li className={styles["list-item"]}>
            <Image src="/shadcn.png" alt="shadcn" width={100} height={100} />
            <p className={styles["list-item-text"]}>shadcn</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Technologies;
