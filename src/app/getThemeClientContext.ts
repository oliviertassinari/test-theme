import * as React from 'react';

// Don't initialize here as getThemeClientContext() is
// used by useTheme() which is called from the server-side bundle.
let themeClientContext = null as any;

export default function getThemeClientContext() {
  if (!themeClientContext) {
    themeClientContext = React.createContext({});
  }

  return themeClientContext;
}
