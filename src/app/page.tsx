import Breadcrumb from "./Breadcrumb";
import Button from "./Button";
import ThemeProviderServer from "./ThemeProviderServer";
import ThemeProviderClient from "./ThemeProviderClient";
import themeServer from "./themeServer";
import themeClient from "./themeClient";

export default function Home() {
  return (
    <ThemeProviderServer value={themeServer}>
      <ThemeProviderClient value={themeClient}>
        <Breadcrumb />
        <Button>
          Button
        </Button>
      </ThemeProviderClient>
    </ThemeProviderServer>
  );
}
