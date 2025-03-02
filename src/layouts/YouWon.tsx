import { Heading } from '@radix-ui/themes'
import { animated, useSpring } from '@react-spring/web'
import React, { useEffect } from 'react'

const AnimatedHeading = animated(Heading);

const YouWon = () => {
  const [{ amount }, amountApi] = useSpring(() => ({
    amount: 0,
  }));

  useEffect(() => {
    amountApi.start({ amount: 1000000 });
  }, []);

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <Heading mb="2" size="4">You won!</Heading>

      <AnimatedHeading mb="2" size="7">
        {/* 
          #1. The consumed spring value can be not only style properties,
          but also any prop that accepts a numeric value and also "children".
        */}
        {amount}

        {/*
          #2. To transform any numeric spring value and add any
          formatting to it you can use the .to(...) method.
          In this case we're removing decimal digits and adding the "€" symbol.
        */}
        {/* {amount.to(amountNumber => `${Math.floor(amountNumber)} €`)} */}
      </AnimatedHeading>

    </div>
  )
}

export default YouWon