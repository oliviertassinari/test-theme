import ServerBreadcrumb from "./ServerBreadcrumb";
import ClientButton from "./ClientButton";
import ThemeProvider from "./ThemeProvider";
import themeServer from "./themeServer";

export default function Home() {
  return (
    <ThemeProvider value={themeServer}>
      <ServerBreadcrumb />
      <ClientButton>
        Button
      </ClientButton>
    </ThemeProvider>
  );
}
