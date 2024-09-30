import Breadcrumb from "./Breadcrumb";
import Button from "./Button";
import ThemeProviderServer from "./ThemeProviderServer";
import ThemeProviderClient from "./ThemeProviderClient";
import themeServer from "./themeServer";
import themeClient from "./themeClient";
import Link from 'next/link'

export default function Home() {
  return (
    <ThemeProviderServer value={themeServer}>
      <ThemeProviderClient value={themeClient}>
        Home
        <Breadcrumb />
        <Button>
          Button
        </Button>
        <Link href="/about">
          Go about
        </Link>
      </ThemeProviderClient>
    </ThemeProviderServer>
  );
}
