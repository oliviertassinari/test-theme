import * as React from 'react';
import getThemeClientContext from './getThemeClientContext';
import getThemeServerContext from './getThemeServerContext';

export default function ThemeProviderServer(props: any) {
  try {
    // React Server Component
    const themeServer = getThemeServerContext();
    themeServer.current = props.value;
    return props.children;
  } catch {
    // React Client Component
    const ThemeClientContext = getThemeClientContext();
    return <ThemeClientContext.Provider {...props} />
  }
}
