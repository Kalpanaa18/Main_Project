import React from 'react';
import NavBar from './NavBar';
import './FirstPage.css';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

import Footer from './Footer';
import ComponentLast from './ComponentLast';
import ComponentFour from './ComponentFour';
import CrousalComponent from './CrousalComponent';
const FirstPage = () => {
  return (
    <div class="box">
    <NavBar/>
    <ComponentOne/>
 <ComponentTwo/>
 <CrousalComponent/>
 <ComponentFour/>
 <ComponentLast/>
   <Footer/>
    </div>
  );
}

export default FirstPage;
