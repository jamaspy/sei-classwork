import React from 'react';
import { Link }  from 'gatsby'
import Header from '../components/header'

export default () => (
    <div style={{ color: "green" }}>
        <Link to="/">Home </Link>
        <Header headerText="Contact Us" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut minus repudiandae, cupiditate exercitationem voluptatum dignissimos excepturi explicabo fugiat provident voluptates iste nesciunt doloremque corrupti, tempora est! Minima quaerat sit reprehenderit.</p>

    </div>

)