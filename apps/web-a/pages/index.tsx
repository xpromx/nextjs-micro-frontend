import Link from "next/link";
import { ROUTES } from "ui";

export default function Page() {
  return (
    <div>
      <h1>WEB-A</h1>
      <Link href={ROUTES.webA.search()}>
        <a>Search WEB-A</a>
      </Link>
    </div>
  );
}
