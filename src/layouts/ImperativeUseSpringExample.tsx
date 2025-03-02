import React, { useEffect } from 'react'
import { useState } from "react";
import HistorySidepanel from "../HistorySidepanel";
import MusicPlayerPage from '../pages/MusicPlayer';
import { useSpring, animated } from '@react-spring/web';

const ImperativeUseSpringExample = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const [style, api] = useSpring(
    () => ({ right: 0 })
  );

  useEffect(() => {
    api.start({ right: sideMenuOpen ? 0 : -400 });
  }, [sideMenuOpen]);

  return (
    <div>
      <MusicPlayerPage
        onHistoryButtonClick={() => setSideMenuOpen(true)}
      />

      {/* @ts-expect-error animated.div */}
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

export default ImperativeUseSpringExample;