import React from 'react';

function useObjectState(obj) {
  const [state, setState] = React.useState(obj);
  const setObjectState = incomingData => {
    setState(prev => ({ ...prev, ...incomingData }));
  };
  return [state, setObjectState];
}

export default useObjectState;