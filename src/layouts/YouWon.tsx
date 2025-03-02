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
        {/* {amount} */}
        {amount.to(amountNumber => `${Math.floor(amountNumber)} €`)}
      </AnimatedHeading>

    </div>
  )
}

export default YouWon