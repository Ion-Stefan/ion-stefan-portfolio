import styles from "./style.module.scss";

export default function index() {
  return (
    <div className="hidden sm:block">
      <div className={styles.footer}></div>
    </div>
  );
}
