import React from 'react'
import { useState } from "react";
import HistorySidepanel from "../HistorySidepanel";
import MusicPlayerPage from '../pages/MusicPlayer';
import { useSpring, animated } from '@react-spring/web';

const BasicUseSpringExample = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const style = useSpring({
    right: sideMenuOpen ? 0 : -400,
  })

  return (
    <div>
      <MusicPlayerPage
        onHistoryButtonClick={() => setSideMenuOpen(true)}
      />

      {/* @ts-expect-error weird TS error */}
      <animated.div
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          width: 400,
          display: 'grid',
          ...style
        }}
      >
        <HistorySidepanel
          onCloseClick={() => setSideMenuOpen(false)}
        />
      </animated.div>
    </div>
  );
}

export default BasicUseSpringExample;