import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container,
} from 'reactstrap'

export default function TopNav() {
  const [open, setOpen] = useState(false)
  return (
    <Navbar color="light" light expand="md" className="mb-4 border-bottom" fixed="top">
      <Container>
        <NavbarBrand tag={Link} to="/">Compagnie ArmatA</NavbarBrand>
        <NavbarToggler onClick={() => setOpen(!open)} />
        <Collapse isOpen={open} navbar>
          <Nav navbar className="ms-auto">
            <NavItem><NavLink tag={Link} to="/">Accueil</NavLink></NavItem>
            <NavItem><NavLink tag={Link} to="/evenements">Événements</NavLink></NavItem>
            <NavItem><NavLink tag={Link} to="/equipe">Équipe</NavLink></NavItem>
            <NavItem><NavLink tag={Link} to="/galerie">Galerie</NavLink></NavItem>
            <NavItem><NavLink tag={Link} to="/contact">Contact</NavLink></NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}
