# timestamp-timer

<img src="./timestamp-timer-logo.png" alt="timestamp-timer Logo" width="250" height="250">

A Custom Hook for Timer in react. 

## Installation

You can install `timestamp-timer` using npm:

```bash
npm install timestamp-timer
```

Example:
```javascript
import React from 'react';
import useTimestampTimer from 'timestamp-timer';

function MyComponent() {
  const initialTimestamp = new Date().getTime(); // Replace this with your timestamp logic
  const elapsedTime = useTimestampTimer(initialTimestamp);

  return (
    <div>
      Elapsed time: {elapsedTime} milliseconds
    </div>
  );
}

export default MyComponent;
```