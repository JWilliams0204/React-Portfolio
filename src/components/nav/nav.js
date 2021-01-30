import React from 'react'

const nav = () => {
    return (
        <div>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed ="top">
  <Navbar.Brand href="#home">React Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#index">Bio</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <NAv.Link href="#portfolio">Portfolio</NAv.Link>
      
        
    </Nav>
    
      
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default nav;




