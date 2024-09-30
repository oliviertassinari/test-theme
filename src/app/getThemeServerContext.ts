import * as React from 'react';
import ponyfillGlobal from './ponyfillGlobal';

ponyfillGlobal.themeServerContext = null as any;

export default function getThemeServerContext() {
  if (!ponyfillGlobal.themeServerContext) {
    if (React.cache) {
      ponyfillGlobal.themeServerContext = React.cache(() => ({ current: {} }));
    } else {
      ponyfillGlobal.themeServerContext = () => ({ current: {} });
    }
  }

  return ponyfillGlobal.themeServerContext;
}
