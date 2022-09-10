import { useAuth } from "../../utils/auth";
import styles from "./Header.module.css";
import Link from "next/link";
import { ROUTES } from "../../utils/routes";

export const Header = () => {
  const { user, signOut, isLoading } = useAuth();

  return (
    <header className={styles.root}>
      <div className={styles.left}>
        <Link href={ROUTES.base.home()}>
          <a>Home</a>
        </Link>
        <Link href={ROUTES.webA.home()}>
          <a>Web-A</a>
        </Link>

        <Link href={ROUTES.webB.home()}>
          <a>Web-B</a>
        </Link>
      </div>

      <div className={styles.right}>
        {isLoading && <div>Loading...</div>}
        {!user && !isLoading && (
          <Link href={ROUTES.base.login()}>
            <a>Login</a>
          </Link>
        )}
        {!isLoading && user && (
          <a href="#" onClick={() => signOut()}>
            {user.lastName} {user.fistName} (Logout)
          </a>
        )}
      </div>
    </header>
  );
};
