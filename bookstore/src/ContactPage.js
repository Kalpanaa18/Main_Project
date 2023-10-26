import React from 'react';
import './ContactPage.css'
import NavBar from './NavBar';
import ComponentLast from './ComponentLast';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div class="contact">
      <NavBar/>
      <ContactPage/>
        <ComponentLast/>
      <Footer/>
    </div>
  );
}

export default ContactPage;
