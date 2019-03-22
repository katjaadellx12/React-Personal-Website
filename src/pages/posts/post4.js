import React from 'react'
import Blog from '../../components/blog-post'

export default function post4() {
  return (
    <div>
      <Blog
        id={4}
        title="Waymo Launch - What This Means for Uber and Lyft"
        date="14th November, 2018"
      />

      <p>
        Wow. I am absolutely speechless. Driverless cars is something that
        ten-year old me would have considered a fictitious miracle! Had I known
        that Waymo has been working on self-driving technology for nearly a
        decade, I would have written this blog post sooner. Jokes aside, this is
        huge. Let's break it down.
      </p>

      <p>
        This is a big milestone for self-driving cars, but Waymo isn't planning
        a splashy event. According to an{' '}
        <a
          href="https://www.bloomberg.com/news/articles/2018-11-13/waymo-to-start-first-driverless-car-service-next-month"
          target="_blank"
          rel="noreferrer"
        >
          article
        </a>{' '}
        on Bloomberg, "[T]hings will start small—perhaps dozens or hundreds of
        authorized riders in the suburbs around Phoenix, covering about 100
        square miles."
      </p>

      <p>
        As per analysts, Waymo would be worth at least $80 billion if it were to
        only rely on its tech for consumer ride-hailing. According to Morgan
        Stanley, "Waymo, who is now considered the leader in self-driving tech,
        to a valuation of $150 billion dollars." This makes sense, given that
        the trucking and last-mile delivery industry is worth a whopping $3
        trillion. Yes, that is a "T," and you thought a "B" referred to "Big
        Bucks?"
      </p>

      <p>
        <b>What this means for Uber and Lyft?</b> Well, first, Waymo's cars will
        operate 24/7 and will eventually not rely on any drivers to pay. Waymo
        will not partner with Uber or Lyft as it might as well develop its own
        app, tightly integrated with the Google Maps, one of Google's most
        powerful tools, whose API companies like Uber and Lyft rely upon.
      </p>

      <p>
        The issue for Uber and Lyft is that they are at least a year behind
        Waymo. Once Waymo gets that first-mover advantage, including all that
        valuable data (data is like gold for a company, actually, think diamonds
        instead), it will be almost impossible for Uber or Lyft to catch up!
      </p>
    </div>
  )
}
