import * as React from 'react';

let themeServerContext = null as any;

export default function getThemeServerContext() {
  if (!themeServerContext) {
    if (React.cache) {
      themeServerContext = React.cache(() => ({ current: {} }));
    } else {
      themeServerContext = () => ({ current: {} });
    }
  }

  return themeServerContext;
}
