import { gitHubLogin, login } from "@/lib/actions";

export default async function LoginPage() {
  return (
    <div>
      <form action={gitHubLogin}>
        <button>Continue with GitHub</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="Enter username" name="username" />
        <input type="password" placeholder="Enter password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
}
