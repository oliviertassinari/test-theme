import * as React from 'react';

let themeServerContext = null as any;

// If this API is available https://react.dev/reference/react/cache
// The advantage is that it allows to isolate each page rendering.
if (React.cache) {
  themeServerContext = React.cache(() => ({ current: {} }));
} else {
  themeServerContext = () => ({ current: {} });
}

export default function getThemeServerContext() {
  return themeServerContext;
}
