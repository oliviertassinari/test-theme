import getThemeServerContext from './getThemeServerContext';

export default function ThemeProviderServer(props: any) {
  const themeServer = getThemeServerContext();
  themeServer.current = props.value;
  return props.children;
}
