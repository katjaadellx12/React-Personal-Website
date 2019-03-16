import React from 'react'
import Blog from '../../components/blog-post'

export default function post1() {

    return (
    <div>
        <Blog 
            id={1}
            title="Something Crucial LinkedIn is Missing"
            date="10th November, 2018"
        />

        <p>I am obsessed with LinkedIn. I am constantly reading posts on this platform, and find myself scrolling for hours and hours. Given my engagement with LinkedIn, I thought about some features that, if incorporated, could be useful for others as well. This is simply an opportunity hypothesis, which I have not yet validated. But, I hope most of you agree!</p>

        <p>LinkedIn has a massive user base. For some context, LinkedIn, now owned by Microsoft, claimed 500 million users of its business-focused social network. That’s up from the 467 million figure it provided last October. As per <a href="https://money.cnn.com/2017/04/27/technology/microsoft-earnings/index.html" target="_blank">CNN</a>, "Microsoft announced that LinkedIn sales hit $975 million in the first full quarter since the acquisition. The software giant bought LinkedIn for $26 billion last year." So, I decided to focus on increasing customer engagement, since our goal as Product Managers is to make our customers awesome!</p>

        <p>For our persona, our primary target is "Laurel the LinkedIn Lady." Laurel is a self-sufficient woman in her mid-30's, experienced in her field of, say, Front-End Web Development. Laurel has decided to leave the corporate life and start her own business/start-up from the ground-up. We want to help Laurel find more business opportunities, either through new or existing connections.</p>

        <p>Three things would be of value to Laurel:

            <ul>
                <li><b>What Laurel's Working On: </b> This would be a one-line field to indicate her top deliverable for the day/week. In this instance, let's assume that Laurel is working on an initiative that completely revamps the designs for websites for up and coming startups.</li><br/>
                
                <li><b>What Keeps Laurel Up At Night: </b>This is another one-line field where Laurel can indicate her fears. For instance, Laurel might say that she is up at night because she doesn't know if the passion project of hers will set her up for success.</li><br/>
                
                <li><b>What Laurel Could Use Help With: </b>Here, she can be specific on exactly what she could use help with. I believe that sometimes people are unaware of what help they need, which is why the previous two fields are so critical. She may need some advice, or perhaps some software developers because her company has started offering backend services as well.</li><br/>
            </ul>
        </p>
    </div>
    )
}
