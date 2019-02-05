import React from 'react';
import './Footer.css'
import { Typography } from '@material-ui/core';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>

<Typography allign="center" variant="overline">Marino's Deli
1946 Johnson St. NE
Minneapolis, MN 55418
(612) 781-0970  
</Typography>
</footer>
);

export default Footer;
