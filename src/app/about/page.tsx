import Breadcrumb from "../Breadcrumb";
import Button from "../Button";
import ThemeProviderServer from "../ThemeProviderServer";
import ThemeProviderClient from "../ThemeProviderClient";
import themeServer from "../themeServer";
import themeClient from "../themeClient";
import Link from 'next/link'

export default function About() {
  return (
    <ThemeProviderServer value={themeServer}>
      <ThemeProviderClient value={themeClient}>
        About
        <Breadcrumb />
        <Button>
          Button
        </Button>
        <Link href="/">
          Go home
        </Link>
      </ThemeProviderClient>
    </ThemeProviderServer>
  );
}
