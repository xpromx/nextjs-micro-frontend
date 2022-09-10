import { useRouter } from "next/router";
import { useAuth } from "ui";

export default function Login() {
  const auth = useAuth();
  const router = useRouter();

  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          auth.signIn();
          router.push("/");
        }}
      >
        Login
      </button>
    </div>
  );
}
