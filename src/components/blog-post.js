import React from 'react'
import './blog-post.css'
import Link from 'gatsby-link'
import SEO from '../components/seo'

export default function BlogPost(props) {

    let id = props.id;

    // make this stateful so you don't hardcode to check cyclic
    // nature of blog posts
    return (
        <div>
            <SEO
                title={`Pranav | Blog ${props.id}`}
            />
            <h1>{props.title}</h1>
            <div className="SubSection">
                <h6>{props.date}</h6>

                <div className="Buttons">           
                    
                    <Link to={id === 1 ? `/blog`
                        : id === 4 ? `/posts/post${id - 2}`
                        : `/posts/post${id - 1}`}><button>Prev</button></Link>

                    <Link to={id === 2 ? `/posts/post${id + 2}`
                        : id === 6 ? `/posts/post${id = 1}`
                        : `/posts/post${id + 1}`}><button>Next</button></Link>

                </div>
            </div>
        </div>
    )
}
