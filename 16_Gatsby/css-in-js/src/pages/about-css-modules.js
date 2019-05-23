import React from 'react';
import Container from '../components/container';
import styles from './about-css-modules.module.css'

const User = (props) => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="SomeUSer"/>
        <div class={styles.description}>
    <h2 className={styles.username}>{props.username}</h2>
    <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)



export default () => (
    <Container>

        <h1>Hello CS Modules</h1>
        
       <User 
       username="Bill Murray"
       avatar="http://fillmurray.com/96/96"
       excerpt="So I have Got That Goping For Me"
       />
       <User 
       username="James Aspinall"
       avatar="http://fillmurray.com/96/96"
       excerpt="So I have Got That Goping For Me"
       />
        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum totam dignissimos possimus dolores hic harum quisquam esse ipsum eveniet soluta, modi sunt porro eaque optio atque, nostrum aut aspernatur mollitia.
        Itaque dolore obcaecati id eveniet vero vel recusandae odit sint incidunt, illum exercitationem cumque consectetur mollitia dicta quam, debitis neque repellendus tempora iste illo saepe accusantium fugit qui culpa! Eaque.
        Quia a amet sequi quidem tenetur provident velit in nesciunt incidunt ipsam earum voluptatem dolor iusto cum labore vero, exercitationem iste dignissimos. A recusandae repudiandae temporibus ipsum atque nulla nostrum.
        Error consectetur, sint quia tempore possimus laborum dolores, quisquam rerum aliquid eum, aliquam quasi itaque sed voluptatum provident officia perspiciatis voluptate autem et ducimus sunt maiores delectus quidem! Minima, esse!</p>

    </Container>
)