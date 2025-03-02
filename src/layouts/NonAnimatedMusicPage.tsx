import React from 'react'
import { useState } from "react";
import HistorySidepanel from "../HistorySidepanel";
import MusicPlayerPage from '../pages/MusicPlayer';

const NonAnimatedMusicPage = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

return (
  <div>
    <MusicPlayerPage
      onHistoryButtonClick={() => setSideMenuOpen(true)}
    />

    {sideMenuOpen && (
      <div
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          width: 400,
          display: 'grid',
        }}
      >
        <HistorySidepanel
          onCloseClick={() => setSideMenuOpen(false)}
        />
      </div>
    )}
  </div>
);
}

export default NonAnimatedMusicPage