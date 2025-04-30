/*
React-Bootstrap is a complete re-implementation of the Bootstrap components using React. 
It has no dependency on either bootstrap.js or jQuery. If you have React setup and React-Bootstrap 
installed, you have everything you need.

 React-Bootstrap simplifies this by condensing the original Bootstrap into React-styled components.


npm install react-bootstrap bootstrap

import Button from 'react-bootstrap/Button';
// or less ideally
import { Button } from 'react-bootstrap';

*/

import React from 'react'
import { Button ,Table, Alert, Accordion, Badge, Breadcrumb, ButtonGroup, Card, Carousel
  , Dropdown, Figure, ListGroup, Modal, Navbar, Nav, Container, NavDropdown,
  Form, FormControl, Row, Col
} from 'react-bootstrap';

function React_bootstrap() {
  return (
    <div>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}


    </div>
  )
}

export default React_bootstrap