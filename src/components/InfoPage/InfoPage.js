import React from 'react';
import CustomerInfoInput from '../CustomerInfoInput/CustomerInfoInput'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <h2>edit customer info here</h2>
<CustomerInfoInput />
  </div>
);

export default InfoPage;
