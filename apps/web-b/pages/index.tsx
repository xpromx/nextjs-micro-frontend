import Link from "next/link";
import { ROUTES } from "ui";

export default function Page() {
  return (
    <div>
      <h1>WEB-B</h1>
      <Link href={ROUTES.webB.search()}>
        <a>Search WEB-B</a>
      </Link>
    </div>
  );
}
