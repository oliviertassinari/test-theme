import * as React from 'react';
import ponyfillGlobal from './ponyfillGlobal';

ponyfillGlobal.themeClientContext = null as any;

export default function getThemeClientContext() {
  if (!ponyfillGlobal.themeClientContext) {
    ponyfillGlobal.themeClientContext = React.createContext({});
  }

  return ponyfillGlobal.themeClientContext;
}
