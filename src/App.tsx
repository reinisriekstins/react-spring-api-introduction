import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DialogDemo from './Dialog'
import AnimatedDialogDemo from './Dialog/AnimatedDialog'
import "@radix-ui/themes/styles.css";
import './App.css'
import NonAnimatedMusicPage from './layouts/NonAnimatedMusicPage';
import BasicUseSpringExample from './layouts/BasicUseSpringExample';
import ImperativeUseSpringExample from './layouts/ImperativeUseSpringExample';
import UseTransitionExample from './layouts/UseTransitionExample';
import YouWon from './layouts/YouWon';
import UseTransitionListExample from './layouts/UseTransitionListExample';

function App() {
  return (
    <>
      <NonAnimatedMusicPage />
      {/* <BasicUseSpringExample /> */}
      {/* <ImperativeUseSpringExample /> */}
      {/* <UseTransitionExample /> */}
      {/* <UseTransitionListExample /> */}
      {/* <YouWon /> */}
    </>
  );
}

export default App
