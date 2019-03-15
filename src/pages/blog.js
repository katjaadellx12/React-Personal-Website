import React from 'react'
import Card from '../components/card'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

const Blog = () => (
    <div>
        <Helmet>
            <title>Pranav | Blog</title>
            <meta property="og:type" content="blog"/>
            <meta property="og:url" content="https://pranav.tech"/>
            <meta property="og:site_name" content="https://pranav.tech"/>
            <meta property="og:title" content="Welcome to my blog" />
            <meta property="og:image" content="https://i.imgur.com/zI5yBin.jpg"/>
            <meta property="og:description" content="I talk about my experiences with product management, development, etc." />
        </Helmet>
        <CardGroup>
            <Card
                title="Something Crucial LinkedIn is Missing"
                date="5 Nov 2018"
                image="https://media.sproutsocial.com/uploads/2017/07/linkedin-ads-guide.png"/>
                
            <Card
                title="Amazon's HQ2 Move and Possible Motives"
                date="9 Nov 2018"
                image="https://www.gannett-cdn.com/presto/2018/11/05/USAT/ded54afa-1cc4-4918-8717-0663e3314467-VPCTECH_JEFFERSON_GRAHAM_AMAZON_DESK_THUMB.jpg?width=534&height=401&fit=bounds&auto=webp"/>
                
            <Card
                title="How Thinking like an Electrical Engineer Changed My Life"
                date="12 Nov 2018"
                image="https://2qfdd1ot4k08vlhu482uv913-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/Pranav-Top-2-1200x783.jpg"/>
                
            <Card
                title="Waymo Launch - What This Means for Uber and Lyft"
                date="14 Nov 2018"
                image="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Waymo_Logo.svg/220px-Waymo_Logo.svg.png"/>
            
            <Card
                title="A List of Dead Google Products and Why They Died"
                date="9 Jan 2019"
                image="https://www.geekinsider.com/wp-content/uploads/2013/03/google-graveyard.png"/>
        
            <Card
                title="What Is Your Favorite Product, and Why?"
                date="16 Jan 2019"
                image="https://s3.amazonaws.com/gv2016wp/wp-content/uploads/20160128183522/Snap-Generation-A-Guide-to-History-of-Snapchat-GaryVee.png"/>
        </CardGroup>
    </div>
)

const CardGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    justify-items: center;
    padding: 150px 50px;

    @media (max-width: 1060px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 720px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export default Blog