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


      If you go to the very bottom, you'll notice another script tag that connects this HTML page to `index.js`. Let's navigate to that now. Currently, what `index.js` does is wait for the user to fill out the form -- that is, type out a message and hit enter. Then, it adds the message to our displayed list of messages, and blanks out the input bar for the next message. 
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
  - type: ps
    paragraph: >-
      The core power behind socket.io is the `io` object, that we've already set
      up for you. Think of it as a person that sits around, constantly waiting
      to be given an instruction. Let's go ahead and set up this sitting around
      first, before we start coding in any instructions to give to this person.


      Navigate to our `app.js` file, and under our massive pile of TODOs, let's start with opening a connection:
  - type: cbs
    codeblock:
      code: |-
        io.on('connection', (socket) => {
          console.log("a new user has connected!");
        });
  - type: ps
    paragraph: >-
      A very quick explanation of what is happening here: we tell this io object
      to wait for the server to boot up (Note how we pass the server to the io
      object definition in Line 7). When the server boots up, a "connection" has
      been opened, and a socket can be created, from this user to any other
      users that may be in the chat. This is encapsulated by the callback
      function that is the second argument.


      This callback function accepts a `socket` object, and can now do whatever we want with that socket! We'll table that for just a second, and instead just log that a new user was found.
  - type: ps
    paragraph: "Go ahead and try this out! You'll notice in the terminal you run
      `npm run startdev` will also have the \"new user is connected!\" log
      statement. Our code is working, whoo! "
  - type: phs
    partheader: "Part 3: Defining Socket Events: Joining"
  - type: ps
    paragraph: "Now, let's go ahead and try to define what we'd do when a person
      joins the IRC. Our patient socket will finally have something to do.
      Here's the first step: we wait for a \"join\" event to happen, and the
      moment we observe it, we tell everyone else in the relay chat about it.
      Here's how we implement this (added in `app.js` INSIDE our connection
      callback function: "
  - type: cbs
    codeblock:
      code: >-
        io.on('connection', (socket) => {
          console.log("a new user has connected!");
          
          socket.on('join', (username) => {
            socket.broadcast.emit('message', `${username} just joined the chat!`);
          });
        });
  - type: ps
    paragraph: >-
      Go ahead and run this!! And end up being a little underwhelmed... because
      nothing happens. Why did nothing happen? This is because our server now
      knows how to announce when someone joins, and that's great! But there's
      still two missing pieces:

      1. The client (AKA the user AKA you AKA `index.js`) never announce when they join. 

      2. The client doesn't know how to receive a message from someone else.


      Let's tackle the first one first.
  - type: ps
    paragraph: >
      When does a user send a join message through their socket? Whenever the
      webpage boots up! So, we go to our `index.js` and right at the top, we add
      an emission line for our socket:
  - type: cbs
    codeblock:
      code: socket.emit('join', name);
  - type: ps
    paragraph: >
      Let's connect a couple moving parts here. 

      - Where's `name` from? That's the tiny `input` script that we'd added at the top of `index.html`. 

      - What's this emit thing doing? Announcing to every connected socket that `name` has joined the chat, by sending over a `join` event?

      - Who receives this "join" announcement? The server, which, on joining, fires a callback function that accepts a `username`. Hopefully, you see now that `name` and `username` are equivalent :) 

      - What does `socket.emit.broadcast` do? It tells every other socket in the system to display the message that you, the user, with the name `username` has joined this chat.
  - type: ps
    paragraph: >-
      Wow, look how much a single line of code can do. Let's boot up our system
      again, aaaaand still nothing. This is getting a bit repetitive, so let's
      add one more thing and get this working! At this point, the
      `socket.emit.broadcast` call correctly sends the `message` event to
      everyone else. The last step is to teach every user how to receive this
      `message` event! And where do we handle users? In `index.js` of course! 


      In `index.js` let's go to the very bottom, with our todo for when chat messages "come in". This is it, they are coming in now! Let's add a tiny bit of code here to handle incoming messages:
  - type: cbs
    codeblock:
      code: |-
        socket.on('message', (msg) => {
            $('#messages').append($('<li>').text(msg));
        });
  - type: ps
    paragraph: "We're hopefully getting a little familiar with the `on` syntax by
      now. Instead, let's talk about what the callback function is doing --
      we're accepting the message as the `msg` variable in our callback
      function. Inside the callback, we're wrapping the text of the message in
      an `<li>` element, then adding the `<li>` element to our list of messages
      with id `#messages`. Do not be concerned if the JQuery syntax here is
      confusing -- just try to grasp the big picture :) "
  - type: ps
    paragraph: Alright, let's fire it up! Do me a favor and open two windows with
      `localhost:3000` in your browser -- and give the user different names.
      Viola! You notice that the first window now has a join message announcing
      that the second browser has joined! AMAZING!
  - type: phs
    partheader: "Part 4: Defining Socket Events: Leaving"
  - type: ps
    paragraph: >-
      He who joins the IRC is doomed to one day leave it. Let's give the people
      who're about to leave the IRC a fond goodbye by displaying "{name} has
      left the chat" for everyone else.


      This is done in a manner extremely similar to the join. There's one difference -- remember how, in `join`, one of our problems was that we had to make the client announce ("emit") a message whenever someone joined? In `leave`, we don't need to make such an announcement from the client side, we can just wait for the server to be closed. We have a built-in in socket.io for this!
  - type: cbs
    codeblock:
      code: >-
        io.on('connection', (socket) => {
          console.log("a new user has connected!");
          name = "";
          
          socket.on('join', (username) => {
            socket.broadcast.emit('message', `${username} just joined the chat!`);
          });
          
          socket.on('disconnect', () => {
            // Your Code Here
          }
        });
  - type: ps
    paragraph: >-
      Your task: edit this function to handle disconnects properly. A couple
      things to keep in mind: Notice how we can't pass in "username" into
      disconnect, because we don't define how and when it's called. How can we
      display the name of the person disconnecting, then? 


      The core insight: The person who sends the "join" request will be the person sending the "disconnect" request, which means `username` will be the disconnector as well. 


      How can we access username in "disconnect"? The `name` variable added on Line 3 is a tiny hint ;)
  - type: phs
    partheader: "Part 5: Defining Socket Events: Messaging"
  - type: ps
    paragraph: >-
      Finally, we define our core functionality for this messaging app -- the
      messaging! For this, we need to make two changes:

      1. In our server in `app.js`, we need to set up a listener for "message", exactly the way we do for "join". The argument to the callback function would be our message to be displayed, `msg`.

      2. In our client in `index.js`, whenever the form listener is fired - that is, inside the `.submit` function, we need to announce (emit) to our socket that we have a 'message', and pass in the message `displayMsg`. 


      And that's it! With those two additions, our real time chat app is complete. Congratulations!
---
