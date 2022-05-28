import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
// import '../index.css';
import './style.css';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
 
  MDBIcon,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' fixed='top'   bgColor='dark' className="p-1" >
        <MDBContainer fluid className="col-md-12">

          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            className='text-gold '
            onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          
          <MDBCollapse navbar show={showNavNoTogglerSecond}>
            <MDBNavbarNav right className='mr-auto mb-2 mb-lg-0  text-gold' >
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#template_features' cursor='pointer' className='text-gold '>
                Template Features
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#product Images' className='text-gold '>Product Images</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                    <MDBNavbarLink href='#logo Updates' className='text-gold ' >Log Updates</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                    <MDBNavbarLink href='https://dana-team.com/support' className='text-gold '>Support</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                    <MDBNavbarLink href='#buy_templates' className='text-gold '>Buy Templates</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>

          <MDBNavbarBrand  href='#' className='mt-2'>

          <img
              src={logo}
          
              style={{ maxWidth: '80px',marginBlock:'-60px' , marginTop:"-3px"}}
              alt=''
              loading='lazy'
            />
          
          </MDBNavbarBrand >
            
        
        </MDBContainer>
      </MDBNavbar>
      
    </>
  );
}