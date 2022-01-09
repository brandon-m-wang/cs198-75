---
title: hw8
header: "Project 8: Build a Social Network"
due: Fri, 4/8
introduction: >-
  For your final homework, you'll be building out a fully functioning social
  media web application with MongoDB, Express, React.js, and Node.js, or more
  commonly known as the MERN stack. The following video is a demo of the
  finished product you'll achieve:


  <div style="display: flex; justify-content: center; margin-top: 2rem">


  <iframe width="600" height="350"

  src="https://www.youtube.com/embed/tgbNymZ7vqY">

  </iframe>


  </div>
setup: Placeholder
skeleton: Placeholder
sections:
  - type: phs
    partheader: "Part 1: Backend Dependencies and Environment Set-up"
  - type: ps
    paragraph: Open a terminal and navigate to the
      <mark><code>node-rest-api</code></mark> folder. Run <mark><code>npm
      install</code></mark> which will install all the necessary dependencies
      for the backend component of this project. Under this same directory,
      create a file called <mark><code>.env</code></mark>. We'll come back to
      this later.
  - type: phs
    partheader: "Part 2: Creating your MongoDB Atlas Database"
  - type: ps
    paragraph: Navigate to <a href="https://account.mongodb.com/account/register"
      target="_blank">https://account.mongodb.com/account/register</a> and
      create a MongoDB account. After MongoDB generates your first project, go
      to "Databases" and hit "Create" to create a new cluster. Choose the free
      "Shared" plan. Choose to authenticate with username and password, and
      create a them.
  - type: ibs
    imageblock: https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/cubstart/Screen+Shot+2022-01-09+at+2.58.21+AM.png
  - type: ps
    paragraph: For the allowed connections, enter the following IP address to allow
      all IP addresses to modify the database (for convenience, you may secure
      your database however you want).
  - type: ibs
    imageblock: https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/cubstart/Screen+Shot+2022-01-09+at+3.00.17+AM.png
  - type: ps
    paragraph: Within your new cluster, hit "Create Database" (or "Add My Own Data")
      and enter the following information. Your database will be named "hw8" for
      this project with 2 eventual collections - "users" and "posts."
  - type: ibs
    imageblock: https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/cubstart/Screen+Shot+2022-01-09+at+2.43.35+AM.png
  - type: ps
    paragraph: Hit "Connect," and then choose to "Connect your application." Copy
      the connection string given to you.
  - type: ibs
    imageblock: https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/cubstart/Screen+Shot+2022-01-09+at+2.55.24+AM.png
  - type: ibs
    imageblock: https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/cubstart/Screen+Shot+2022-01-09+at+3.08.21+AM.png
  - type: ps
    paragraph: "Make the necessary replacements, and insert the connection string in
      one line into your <mark><code>.env</code></mark> file as such:"
  - type: cbs
    codeblock:
      code: MONGO_URL = your_string
      lang: cpp
  - type: ps
    paragraph: The purpose of this file is to simplify the development process when
      we need to reference the database URL repeatedly, assigning it to an
      environment variable accessible across all project files.
  - type: phs
    partheader: "Part 3: Configuring your Node.js Webserver and Middleware"
  - type: ps
    paragraph: "We'll begin setting up our Node.js webserver in
      <mark><code>index.js</code></mark>. The <mark><code>index.js</code></mark>
      file is what we defined to be our endpoint (in
      <mark><code>package.json</code></mark>) and is also where our API routes
      are going to be defined. We need to load the contents of the
      <mark><code>.env</code></mark> file in, and to do so insert the following
      line:"
  - type: cbs
    codeblock:
      code: dotenv.config();
      lang: javascript
  - type: phs
    partheader: "Part 4: Creating your MongoDB Models"
  - type: phs
    partheader: "Part 5: Routing in Express"
  - type: phs
    partheader: "Part 6: Authentication Endpoints"
  - type: phs
    partheader: "Part 7: Posts Endpoints"
  - type: phs
    partheader: "Part 8: Users Endpoints"
  - type: phs
    partheader: "Part 9: API Endpoint Testing with Postman and User Generation"
  - type: phs
    partheader: "Part 10: Frontend Dependencies and Environment Set-up"
  - type: phs
    partheader: "Part 11: User Context"
  - type: phs
    partheader: "Part 12: Topbar Component"
  - type: phs
    partheader: "Part 13: Post Component"
  - type: phs
    partheader: "Part 14: Feed Component"
  - type: phs
    partheader: "Part 15: Share Component"
  - type: phs
    partheader: "Part 16: Rightbar Component"
  - type: phs
    partheader: "Part 17: Sidebar Component"
  - type: phs
    partheader: "Part 18: Putting the Pages Together"
  - type: phs
    partheader: "Part 19: React Routing"
---
