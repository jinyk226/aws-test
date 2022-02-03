import React, { useState } from 'react';
import useColorThief from 'use-color-thief'
const source = 'https://jins-test-aws-bucket-react.s3.us-west-2.amazonaws.com/1643928379998'

function colorThief() {

  const {palette} = useColorThief(source, {
    format: 'hex',
    colorCount: 10,
    quality: 1,
  })

  return (
    <div>
      {palette ? <div>{palette.join(', ')}</div> : <div>Loading...</div>}
    </div>
  );
}

export default colorThief;
