# Boastful is the best tweetback library.
### Lovingly crafted by [Zach Holman](http://zachholman.com). ([@holman](http://twitter.com/holman)).

## So what's a tweetback?

Once upon a time there were [trackbacks](http://en.wikipedia.org/wiki/Trackback). If you wrote a blog post, and I thought it was interesting so I blogged about your blog post, trackbacks were the way for my blog to let your blog know I'm talking about it. Usually, your blog software would then link to mine as a way of telling your own readers "hey, here's some more people talking about this topic".

A few services have started to do the same for Twitter- a "tweetback", if you will. Write your blog post, and then these services would search Twitter for whoever would link or discuss it.

Here's the main problems with that approach:

- **The content usually sucks**. I've seen a lot of systems — Disqus, for one — simply print out the tweet verbatim and try to integrate it into your regular blog comments. This assumes that each and every tweet offers some compelling unique viewpoint. It doesn't. Usually you end up with a bunch of tweetbacks coming in saying "RT @someone RT @someoneelse RT @originaldude Hey a blog post http://example.com".
- **Most only search Twitter**. Twitter search is cool, quick, and painless, but it doesn't offer full archival access, so older tweets might not show up. It's nice to have a full list.
- **URL shorteners are confusing**. You shouldn't just search for your main blog post URL; very few on Twitter actually do the whole thing, since characters are money, people. You'd have to search for every short URL that translates to your main post URL.

Luckily, this tiny jQuery plugin tries to solve all those:

- **Avatars only**. James Cameron's dream: only avatars. The full content is available through a tooltip, but really you shouldn't expect the tweet content to contribute much anyway.
- **Uses Topsy**. [Topsy](http://topsy.com) handles both the archival problem and the URL shortener problem. They crawl Twitter for who's linking to who, translating short URLs to full URLs as they go.

You end up with little heads on the footer of your blog, which acts as nifty encouragement to get others to tweet and promote your content. People love seeing their face.

## Example

I hate readmes without a pretty picture to explain everything. Here's a current snapshot of [the footer](http://zachholman.com/2010/02/the-future-of-itunes/) from [my blog](http://zachholman.com). Feel free to style away, you mad little CSS scientist you.

![boastful screenshot](http://files.droplr.com/files/11322372/oO5q.jquery.boastful.png)

## Installing

1. Rock your jQuery, like:<br />
`<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"></script>`
2. Deviously load up [jquery.boastful](http://github.com/holman/boastful/tree/master/jquery.boastful.js):

  `<script type="text/javascript" src="jquery-boastful.js"></script>`
3. Lock and load into your `$(document).ready()`:<pre><code>$(document).ready(function() {
   $('#boastful').boastful();
});</code></pre>
4. Tell it where to go:
  `<div id="boastful"></div>`
5. Style accordingly. For a starting point, check out [boastful.css](http://github.com/holman/boastful/tree/master/boastful.css).
6. High-five your girlfriend.

## Found an issue?

Fork it and fix it. Or [file an issue](http://github.com/holman/boastful/issues). Or ping me on twitter (I'm [@holman](http://twitter.com/holman)). Or high-five your girlfriend some more.

Thanks for checking out [boastful](http://github.com/holman/boastful); hope you enjoy it!