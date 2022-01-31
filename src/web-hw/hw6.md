---
title: hw6
header: "HW 6: Video Streaming App"
due: Fri, 3/18
introduction: Welcome to Homework 6! In this assignment, you'll be building your
  own video streaming application. Although this might seem intimidating, rest
  assured that we'll teach you all the steps that you'll need. The project can
  be roughly broken up into two parts. First, we have a Node.js server that will
  handle streaming the video and suppling other information. Second, we have a
  React client that will display the videos available and play a video selected.
setup: Get started by pulling from the skeleton repository below.
skeleton: https://github.com/brandon-m-wang/cubstart-hw1-skeleton.git
sections:
  - type: phs
    partheader: "Part 1: Setting Up our Parts"
  - type: ps
    paragraph: We'll first take care of the task of installing all our required
      dependencies. Open a terminal and navigate to the
      <mark><code>server</code></mark> folder. Run <mark><code>npm
      i</code></mark> to install the Node modules we need. Start up your server
      with <mark><code>npm run dev</code></mark>. Then, do the same for the
      <mark><code>client</code></mark> folder. Start up your client with
      <mark><code>npm start</code></mark>. Note that our server can be reached
      from <mark><code>localhost:4000</code></mark> and our client from
      <mark><code>localhost:3000</code></mark>.
  - type: ps
    paragraph: We'll also need to install FFmpeg, a tool for processing video and
      audio. This will be necessary later for generating thumbnails. For Windows
      users, download the essentials build from <a
      href=https://github.com/GyanD/codexffmpeg/releases/tag/2022-01-19-git-dd17c86aa1>here</a>.
      For MacOS users, download the release build from <a
      href=https://evermeet.cx/ffmpeg/>here</a>. For Linux users, go to the <a
      href=https://www.ffmpeg.org/download.html>FFmpeg website</a> and download
      the appropriate package for your distro. Once you've unzipped the
      download, set your system's <mark><code>FFMPEG_PATH</code></mark>
      environment variable to the path of the ffmpeg executable.
  - type: phs
    partheader: "Part 2: Our First Endpoint"
  - type: ps
    paragraph: Before we work on <mark><code>app.js</code></mark> , let's take a
      look first at the structure of our files in the
      <mark><code>server</code></mark> folder. Your
      <mark><code>assets</code></mark> folder should look like the below. Feel
      free to play the videos with your own device's media player to check them
      out!
  - type: ps
    paragraph: >-
      Now, we'll head over to `app.js`. The first thing you might notice is the
      `videosMetadata` array. In this project, we're going to use
      `videosMetadata` to represent useful information about our videos. In a
      more complex application, we'd probably fetch this data from a database in
      order to create this array. However, we'll keep things simple in this
      project. Each item in the array is described as follows: 


      ```

      {
        id: ID of the video file. Corresponds to the file name.
        thumbnail: Path to generate the thumbnail of the video/
        description: Short blurb about the video.
        name: Name of the video.
      }

      ```
  - type: ps
    paragraph: >-
      With that, it's time to create our first endpoint! It would be quite
      useful to have one that, with a GET request, returns a JSON response with
      the `videosMetadata` array, as we can then use that in our client. We've
      already given you the overall skeleton for this endpoint (i.e. below).


      **Q1: What can we return in our callback function to get the correct information?**


      Hint: A certain method found in the Express API reference [here](https://expressjs.com/en/api.html#res) might be useful.


      ```

      app.get('/videos', (req, res) => RETURN_SOMETHING );


      ```
  - type: ps
    paragraph: >-
      With that, let's switch over to our client so that we can visualize our
      information! Inside the `client` folder, access `src/Home.js`. Recall the
      `useState` hook; we've created `videos` which will represent video
      metadata. However, its default value is an empty array. Not too useful in
      its current state! Luckily, we have an endpoint that can provide us with
      this information. All we need to do is fetch from the `/videos` endpoint,
      parsing the response to produce a JavaScript object, and finally updating
      `videos` to this value.


      **Q2: Implement the side effect so that videos stores the information returned by the `/videos` endpoint.**
  - type: ps
    paragraph: |-
      

      Congrats! If you've succeeded, you should see the below.

      ![](/assets/images/hw6p2.png)
  - type: phs
    partheader: "Part 3: Playing Each Video"
  - type: ps
    paragraph: You've probably noticed that our link cards look a little broken as
      their images are not displaying. Furthermore, clicking on a link brings
      you to a buffering video player that doesn't load. This is expected! While
      we have an endpoint that gives us information on all the videos, we don't
      have any to get information about a single video or to stream the video
      itself. Clearly, we need to implement more endpoints.
  - type: ps
    paragraph: >-
      The next endpoint we'll be implementing is `/video/:id`. Recall, per the
      [Express documentation](https://expressjs.com/en/guide/routing.html) that 


      > Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the `req.params` object, with the name of the route parameter specified in the path as their respective keys.
  - type: ps
    paragraph: >-
      In our application, sending a GET request to `video/:id` should return the
      video with file name `:id.mp4` piece by piece. We've taken care of the
      more technical aspects of the callback function, but we need you to
      initialize the constant `path` to the appropriate path for `:id.mp4`.


      **Q3: Initialize `path `to the correct value.**
  - type: ps
    paragraph: >-
      We also want to set up our `/video/:id/data` route, which will return the
      information from `videoMetadata` for a single video (indicated by the
      `:id` param). Based on our previous routes, you're ready to make your own
      from scratch.


      **Q4: Create the `/video/:id/data` route.**


      Hint: How can we get an object from an array of objects by value of a property in JS? A Google search might help.
  - type: ps
    paragraph: "With that, let's build out `Player.js`. The structure is quite
      similar to `Home.js`! Note the use of the `useParams` hook:"
  - type: cbs
    codeblock:
      code: const { videoID } = useParams();
  - type: ps
    paragraph: >-
      which lets us access the `videoID` param that we specified in our React
      Router route. With this, we have two steps left!


      **Q5: Complete the side effect so that `videoData` will correspond to metadata of the video specified by `videoID`.**


      **Q6: Specify the source URL of the `videoID` video.**


      Hint: Do we have an endpoint for streaming a video?
  - type: ps
    paragraph: Great! Now you should be able to watch the stream of any video.
      Notice that this works because in `Home.js`, each Link's location is
      `/player/${video.id}`, where `video.id` comes from, if you trace far back
      enough, `videosMetadata` in `server/app.js`. Because of our route with a
      URL parameter in `client/src/App.js`, our client knows which video it
      wants to stream!
  - type: ps
    paragraph: Congrats! You now have a functional video player. It's now time to
      make things pretty.
  - type: phs
    partheader: "Part 4: Finishing Touches"
  - type: ps
    paragraph: One thing that is still necessary is an route that can return a
      thumbnail for a certain video. The method below can produce such a
      thumbnail given the path to the video file.
  - type: cbs
    codeblock:
      code: thumbsupply.generateThumbnail('FILE_PATH')
  - type: ps
    paragraph: >-
      We'll make our endpoint `/video/:id/thumbnail` to align with what we set
      the `thumbnail` field of the `videoMetadata` objects. After we produce the
      thumbnail, we should then send the file over.


      Q7: Implement the `/video/:id/thumbnail` route!


      Hint: Another method found in the Express API reference [here](https://expressjs.com/en/api.html#res) might be useful.
  - type: ps
    paragraph: If you've succeeded in making this route, congrats! You've fully
      implemented the required functionality for HW6! Feel free to customize the
      CSS, add your own flair to the components, or anything else that comes to
      mind.
---
