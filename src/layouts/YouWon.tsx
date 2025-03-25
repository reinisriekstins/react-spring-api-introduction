import { Heading } from '@radix-ui/themes'
import { animated, useSpring, to } from '@react-spring/web'
import React, { useEffect } from 'react'
import { useMove } from '@use-gesture/react'

// #1. You can animate custom components by wrapping
// them into `animated(...)`
const AnimatedHeading = animated(Heading);

const YouWon = () => {
  const [{ amount, color }, amountApi] = useSpring(() => ({
    // #2. you can pass strings and even CSS variables
    // into spring configs, as long as its possible
    // to resolve it into a number
    color: 'white', // #FFFFFF or rgb(255,255,255)
    amount: 0,
  }));

  useEffect(() => {
    amountApi.start({
      amount: 1000000,
      color: 'red', // #FF0000 or rgb(255,0,0)
    });
  }, []);

  const { y: mouseY } = useMouseMoveSpring();

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <Heading mb="2" size="4">You won!</Heading>

      <AnimatedHeading mb="2" size="7" style={{ color }}>
        {/* 
          #3. The consumed spring value can be not only style properties,
          but also any prop that accepts a numeric value and also "children".
        */}
        {amount}

        {/*
          #4. To transform any numeric spring value and add any
          formatting to it you can use the .to(...) method.
          In this case we're removing decimal digits and adding the "€" symbol.
        */}
        {/* {amount.to(amountNumber => `${Math.floor(amountNumber)} €`)} */}

        {/*
          #5. Merge output from multiple springs into one.
          Super useful in cases like:
          `transform: translateY(${mouseXSpring + scrollYSpring}px) rotate(${spring3}deg);`
        */}
        {/* {to(
          [amount, mouseY],
          (amountNumber, mouseYNumber) => {
            console.log('mouseYNumber', mouseYNumber);

            return `${Math.floor(amountNumber * mouseYNumber)} €`;
          }
        )} */}
      </AnimatedHeading>

    </div>
  )
}

export default YouWon

const useMouseMoveSpring = () => {
  const [mouseSprings, api] = useSpring(() => ({ x: 1, y: 1 }))

  useMove(
    ({ xy: [x, y] }) => {
      api.start({ x, y });
    },
    {
      target: window, // Bind to the window
    }
  );

  return mouseSprings;
}
