import * as React from 'react';
import getThemeClientContext from './getThemeClientContext';
import getThemeServerContext from './getThemeServerContext';

export default function useTheme() {
  try {
    // React Client Component
    const ClientThemeContext = getThemeClientContext();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return React.useContext(ClientThemeContext);
  } catch {
    // React Server Component
    const themeServer = getThemeServerContext();
    return themeServer.current;
  }
}
