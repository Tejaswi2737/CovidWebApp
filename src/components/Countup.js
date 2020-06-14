import { CountUp } from 'react-countup';
 import React from "react"
const CompleteHook = () => {
//   const { countUp, start, pauseResume, reset, update } = useCountUp({
//     start: 0,
//     end: 100,
//     delay: 1000,
//     duration: 1,
//     onReset: () => console.log('Resetted!'),
//     onUpdate: () => console.log('Updated!'),
//     onPauseResume: () => console.log('Paused or resumed!'),
//     onStart: ({ pauseResume }) => console.log(pauseResume),
//     onEnd: ({ pauseResume }) => console.log(pauseResume),
//   });
  return (
    <div>
  <CountUp start={0} end={160526} />,
    {/* //   <button onClick={start}>Start</button> */}
      {/* <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={() => update(2000)}>Update to 2000</button> */}
    </div>
  );
};
export default CompleteHook