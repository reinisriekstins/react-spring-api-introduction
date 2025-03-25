import React from 'react'
import { useState } from "react";
import HistorySidepanel from "../HistorySidepanel";
import MusicPlayerPage from '../pages/MusicPlayer';
import { useSpring, animated } from '@react-spring/web';

const BasicUseSpringExample = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  // #1. add the useSpring hook
  const style = useSpring({
    // #2. add any style properties that you want
    // to change based on state, and specify each value
    // that corresponds to a specific state. In this case
    // the sidepanel of width 400px will slide in from
    // the right side, so we hide it 400 px farther than the 
    // right side of the page.
    right: sideMenuOpen ? 0 : -400,
    // onChange: (evt) => console.log(evt.value),
  })

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
          //
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