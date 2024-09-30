import * as React from 'react';
import getThemeClientContext from './getThemeClientContext';
import getThemeServerContext from './getThemeServerContext';

export default function useTheme(callSite) {
  try {
    // React Client Component
    const ClientThemeContext = getThemeClientContext();
    return React.useContext(ClientThemeContext);
  } catch {
    // React Server Component
    const themeServer = getThemeServerContext();
    return themeServer.current;
  }
}
