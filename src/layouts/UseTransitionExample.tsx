import React from 'react'
import { useState } from "react";
import HistorySidepanel from "../HistorySidepanel";
import MusicPlayerPage from '../pages/MusicPlayer';
import { animated, useTransition } from '@react-spring/web';

const UseTransitionExample = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const transition = useTransition(sideMenuOpen, {
    from: { right: -400 },  // style for initial state
    enter: { right: 0 },    // style for truthy state
    leave: { right: -400 }, // style for falsey state
  });

  return (
    <div>
      <MusicPlayerPage
        onHistoryButtonClick={() => setSideMenuOpen(true)}
      />

      {transition((style, isOpen) => {
        if (isOpen) {
          return (
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
          );
        }
      })}
    </div>
  );
}

export default UseTransitionExample;