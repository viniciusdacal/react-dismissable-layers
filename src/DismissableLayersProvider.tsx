import React, { FC } from 'react';

import { DismissableLayerProvider } from './DismissableLayerContext';
import { GlobalLayersProvider } from './GlobalLayersContext';

interface DismissableLayersProviderProps {
  /**
   * optional prop, the HTML-node to listen close events, default is `document`
   */
  rootNode?: HTMLElement | Document;
}

const DismissableLayersProvider: FC<DismissableLayersProviderProps> = ({ rootNode = document, children }) => (
  <GlobalLayersProvider>
    <DismissableLayerProvider rootNode={rootNode}>{children}</DismissableLayerProvider>
  </GlobalLayersProvider>
);

export default DismissableLayersProvider;
