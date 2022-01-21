---
title: hw6
header: "HW 6: Video Streaming App"
due: Fri, 3/18
introduction: Welcome to Homework 6! In this assignment, you'll be building your
  own video streaming application. Although this might seem intimidating, rest
  assured that we'll teach you all the steps that you'll need. The project can
  be roughly broken up into two parts. First, we have aNode.js server that will
  handle streaming the video and suppling other information. Second, we have a
  React client that will display the videos available and play a video selected.
setup: Get started by pulling from the skeleton repository below.
skeleton: https://github.com/brandon-m-wang/cubstart-hw1-skeleton.git
sections:
  - type: phs
    partheader: "Part 1: Setting Up our Parts"
  - type: ps
    paragraph: We'll first take care of the task of installing all our required
      dependencies. Open a terminal and navigate to the `server` folder. Run
      `npm i` to install the Node modules we need. Then, do the same for the
      `client` folder.
  - type: phs
    partheader: "Part 2: Creating Our Endpoints"
  - type: ps
    paragraph: >-
      Before we work on `app.js` , let's take a look first at the structure of
      our files in the `server` folder. Your `assets` folder should look like
      the below. Feel free to play the videos with your own device's media
      player to check them out!


      ```

      assets

      |  fire.mp4

      |  ocean.mp4

      |  sky.mp4

      ```
  - type: ps
    paragraph: Now, we'll head over to `app.js`. The first thing you might notice is
      the `videosMetadata` array. In this project, we're going to use
      `videosMetadata` to represent useful information about our videos. In a
      more complex application, we'd probably fetch this data from a database in
      order to create this array. However, we'll keep things simple in this
      project.
  - type: ps
    paragraph: >-
      With that, it's time to create our first endpoint! It would be quite
      useful to have one that, with a GET request, returns a JSON response with
      the `videosMetadata` array, as we can then use that information in our
      client. We've already given you the overall skeleton for this endpoint;
      how can our callback function 


      Hint: A certain method found in the Express API reference [here](https://expressjs.com/en/api.html#res) might be useful.
---
