import { memo } from 'react';

// import { amount,duration } from './exports/constants';

function MemoComp(props) {
 
  return (
    <div className="App">
      This is memo component {props.color}
    </div>
  );
}

export default memo(MemoComp);
