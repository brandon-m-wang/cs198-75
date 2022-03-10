---
title: "[WIP] hw7"
header: "Project 7: Real-Time Chat App"
due: Fri, 2/18
introduction: >-
  Welcome to Homework 7! In this assignment, we'll build a real-time chat app,
  inspired by the [Internet Relay
  Chats](https://en.wikipedia.org/wiki/Internet_Relay_Chat) of old. The idea
  behind a real-time chat app is that the messages stay on your screen for as
  long as the webpage is open, and then you can never access them again! 


  We'll develop two parts for this project — the server, which maintains the connection with other cliends, and the client, which displays the chat to the user and takes input. We'll use Node.js and Socket.io, along with some classic HTML, CSS and Javascript for this project
setup: Get started by pulling from the skeleton repository below.
skeleton: https://github.com/somaniarushi/cubstart-hw7-skeleton.git
sections:
  - type: phs
    partheader: "Part 1: Understanding the Skeleton"
  - type: ps
    paragraph: >
      Take a moment to look through the code in the skeleton. Here, we only care
      about two files: `app.js` (our server) and `public/index.js` (our client).
      We'll only need to make changes to these two files. 


      Let's quickly understand what's already going on in these files. First, `app.js`. This file serves as the home of our express server. Here, we've created a server that serves from the "public" directory, and on a request to the "/" path (the root), it returns to us "public/index.html".


      Second, `index.html`. This file defines everything that gets displayed on your screen, in plain HTML. Notice the `<script>` section at the very beginning right after the font links: this asks the user to enter their name on page load and saves it in the "name" variable, for future use! This is the name that will be displayed on sending messages in the IRC.


      If you go to the very bottom, you'll notice another script tag that connects this HTML page to `index.js`. Let's navigate to that now.
  - type: ps
    paragraph: >-
      Now, let's boot up our project. Navigate to your terminal and run `npm i`.
      This should use the provided `package.json` file to download for you all
      the dependencies of this project. Now, let's go ahead and run `npm run
      startdev` -- this should boot up our project on localhost:3000. Even
      before we've written a single line of code, we can mess with this! Go
      ahead and open the webpage, and type in the input bar.


      You'll notice that you can add messages to your screen, but this is a very sad chat app --  you can just talk with yourself. This is no fun without other people also in the mix! Our task today will be to figure out how to add other people to this basic template.
  - type: ps
    paragraph: >-
      It's worth taking a moment to try to understand all the interactions we
      need to code in — in tech speak, we need to define the specification of
      our project. Here are all the things that the project doesn't do yet, but
      will by the time that we're done:

      1. Whenever someone joins the IRC, send a "{name} has joined the chat" message to everyone.

      2. Whenever you (a user) sends a message, it sends the message over to everyone else.

      3. Whenever someone else sends a message, you (the user) should receive the message.

      4. Whenever someone leaves the IRC, send a "{name} has left the chat" message to everyone.


      Noticing the four actions above, there's two patterns that emerge:

      1. Any user should be able to send messages and receive messages from everyone else. 

      2. Any sort of interaction between users is a _message_: a joining message, a leaving message, or a chat message.


      Using these two ideas, let's start writing some code!
  - type: phs
    partheader: "Part 2: Starting with Socket.io"
---
