import Link from "next/link";
import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Link href="/">Good Food</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </div>
      <div className={styles.container}>{children}</div>
      <div className={styles.footer}>
        Next.js project | Good Food &copy;
      </div>
    </>
  );
}

export default Layout;
