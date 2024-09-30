'use client';
import getThemeClientContext from './getThemeClientContext';

export default function ThemeProviderClient(props: any) {
  const ThemeClientContext = getThemeClientContext();
  return <ThemeClientContext.Provider {...props} />
}
