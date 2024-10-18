import { useGitHubInfo } from "@debbl/ahooks";
import { Link } from "@nextui-org/react";

export default function Home() {
  const { GitHubInfo } = useGitHubInfo("https://github.com/Debbl/slides");

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="fixed right-2 top-2 flex items-center gap-2">
        <GitHubInfo className="size-4" />
        <Link target="_blank" href="https://aiwan.run">
          me
        </Link>
      </div>
      <h2>slides</h2>

      <ul>
        <li>
          <Link href="/framer-motion">framer motion</Link>
        </li>
      </ul>
    </main>
  );
}
