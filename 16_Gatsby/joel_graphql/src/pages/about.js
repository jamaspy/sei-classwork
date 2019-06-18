import React from 'react'
import Layout from "../components/layout"
import { graphql } from "gatsby"


export default (props) => (
    <Layout>
        <h1>{props.data.site.siteMetadata.title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae eos in beatae veniam officia delectus laudantium accusantium. Ullam quisquam rerum ad perspiciatis, totam magni aperiam odio dolores sed quas.</p>
        <h2>{props.data.site.siteMetadata.author}</h2>
    </Layout>
)

export const query = graphql `
    query {
        site {
            siteMetadata{
                title
                author
            }
        }
    }

`