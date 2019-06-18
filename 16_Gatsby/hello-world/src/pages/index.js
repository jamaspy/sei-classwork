import React from "react"
import { Link } from "gatsby";
import Header from "../components/header";

export default () => ( 
    <div style={ { color: "#292929" } }>
        <Header headerText="Welcome To Gatsby" />
        <Link to="/about">Contact Us</Link>
        <Link to="/contact">Contact Us</Link>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque laudantium et eius minima similique nesciunt alias cupiditate aliquid accusantium? Sequi repellendus illum nisi ullam consequuntur facere, libero distinctio excepturi voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quia nam tenetur necessitatibus, explicabo reiciendis voluptate ab molestias incidunt delectus quas consequatur vitae recusandae rem iste, iusto modi vero impedit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, temporibus perferendis sapiente vitae non quasi id porro commodi dolorum, cupiditate dolor itaque quidem cum ea provident fugit quam obcaecati molestiae!</p>
        <img src="https://source.unsplash.com/random/600x400" alt="A pretty picture"/>
    </div>
)
