import * as React from 'react';
import getThemeClientContext from './getThemeClientContext';
import getThemeServerContext from './getThemeServerContext';
import ThemeProviderClient from './ThemeProviderClient';

export default function ThemeProvider(props: any) {
  try {
    // React Server Component
    const themeServer = getThemeServerContext();
    themeServer.current = props.value;
    return (
      <ThemeProviderClient {...props}>
        {props.children}
      </ThemeProviderClient>
    );
  } catch {
    // React Client Component
    const ThemeClientContext = getThemeClientContext();
    return <ThemeClientContext.Provider {...props} />
  }
}
