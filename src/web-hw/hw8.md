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
      create a file called <mark><code>.env</code></mark>. You'll come back to
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
      you need to reference the database URL repeatedly, assigning it to an
      environment variable accessible across all project files.
  - type: phs
    partheader: "Part 3: Configuring your Node.js Webserver, Routes, and Middleware"
  - type: ps
    paragraph: "You'll begin setting up your Node.js webserver in
      <mark><code>index.js</code></mark>. The <mark><code>index.js</code></mark>
      file is what is defined to be your endpoint (in
      <mark><code>package.json</code></mark>) and is also where your API routes
      are going to be defined. You need to load the contents of the
      <mark><code>.env</code></mark> file in, and to do so insert the following
      line:"
  - type: cbs
    codeblock:
      code: dotenv.config();
      lang: javascript
  - type: ps
    paragraph: "Next, in order to connect to your MongoDB, you'll be using mongoose,
      a middleware designed to simplify access to your MongoDB data through
      \"models,\" which are defined as schemas that determine the structure of
      your documents within your \"posts\" and \"users\" collections. Connect
      the mongoose middleware as such, and write in helpful console log string
      for your own development purposes:"
  - type: cbs
    codeblock:
      code: >-
        mongoose.connect(
          process.env.MONGO_URL,
          { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
          () => {
            console.log("");
          }
        );
      lang: javascript
  - type: ps
    paragraph: >-
      Some additional middleware you'll be implementing in this project are:


      <ul>

      <li>express.json() - to give a clean json format on HTTP response</li>

      <li>helmet() - to secure your HTTP response headers</li>

      <li>morgan("common") - to log timestamps, errors, and other helpful HTTP request data</li>

      </ul>


      You don't need to understand the underlying abstraction of this technologies, just knowing what they are and what they do is enough. Notice that the const <mark><code>app</code></mark> is defined as your Express application instance. To incorporate this middleware into your Express app you do:
  - type: cbs
    codeblock:
      code: |-
        app.use(express.json());
        app.use(helmet());
        app.use(morgan("common"));
      lang: javascript
  - type: ps
    paragraph: "Now, you'll define some routes for your API endpoints. Because this
      application is attempting to recreate a microservices approach to building
      functionality, each endpoint handles a function independent of the others.
      The three endpoints you'll be building handle users, posts, and
      authentication. For now, you can tell Express to route them to their
      respective files in the <code><mark>./routes</mark></code> folder,
      pointing all requests to the webserver on \"/api/<endpoint>\" to that
      endpoint (e.g. http://localhost:8800/api/users). To do so, follow the
      format defined below for the authentication route, and do the remaining
      two for users and posts (hint: all route files are loaded in at the top of
      the file with require):"
  - type: cbs
    codeblock:
      code: |-
        app.use("/api/auth", authRoute);
        // "/api/posts"
        // "/api/users"
      lang: javascript
  - type: ps
    paragraph: The webserver will be served locally on port 8080 as defined by the
      last bit of code. Every time you start your webserver locally, you'll get
      a console message displayed as well.
  - type: phs
    partheader: "Part 4: Creating your MongoDB Models"
  - type: ps
    paragraph: "Navigate to the <mark><code>models</code></mark> folder, and into
      <mark><code>Post.js</code></mark>. Here, you'll define your schema for
      post data documents. On paper, try thinking about what kinds of data you
      need for any given post; you'll probably need to know which user posted
      it, the contents of the post, and who liked it. Notice that mongoose
      allows you to create a schema using two parameters. The second parameter
      is for options (e.g. timestamping when an object is put into the DB), and
      the first is the actual structure of your documents in the \"posts\"
      collection. Fill in the first parameter object using the following guiding
      schema:"
  - type: cbs
    codeblock:
      code: |-
        userId: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          max: 500,
          required: true,
        },
        image: {
          type: String,
        },
        likes: {
          type: Array,
          default: [],
        }
      lang: javascript
  - type: ps
    paragraph: The following line containing
      <mark><code>module.exports</code></mark> indicates the return value of
      require() when loading in resources from your models. Again, mongoose
      offers a convenient "model" function which returns a document-like class
      that can be instantiated by passing in a similar object with post
      information. This class connects you to the MongoDB, and allows you to
      interact directly with document collections. You'll get to see this later.
  - type: ps
    paragraph: "Moving onto your user document schema, a similar process. What kind
      of information would you need for each user? Username, e-mail, password,
      profile photo, where they're from, bio, etc. All the information necessary
      for your project is defined below, simply repeat the process as you did
      for your post schema:"
  - type: cbs
    codeblock:
      code: |-
        username: {
          type: String,
          require: true,
          min: 3,
          max: 20,
          unique: true,
        },
        email: {
          type: String,
          required: true,
          max: 50,
          unique: true,
        },
        password: {
          type: String,
          required: true,
          min: 6,
        },
        profilePicture: {
          type: String,
          default: "",
        },
        coverPicture: {
          type: String,
          default: "",
        },
        followers: {
          type: Array,
          default: [],
        },
        following: {
          type: Array,
          default: [],
        },
        description: {
          type: String,
          max: 50,
        },
        city: {
          type: String,
          max: 50,
        },
        from: {
          type: String,
          max: 50,
        },
        relationship: {
          type: Number,
          enum: [1, 2, 3],
        },
      lang: javascript
  - type: phs
    partheader: "Part 5: Routing in Express"
  - type: ps
    paragraph: >+
      A router object is an isolated instance of middleware and routes. You can
      think of it as a “mini-application,” capable only of performing middleware
      and routing functions. Every Express application has a built-in app
      router. Once you’ve created a router object, you can add middleware and
      HTTP method routes (such as get, put, post, and so on) to it just like an
      application.

  - type: ps
    paragraph: Create an express router instance with the following line of code.
      You'll need to do this across all of your router files in the folder (a
      total of 3).
  - type: cbs
    codeblock:
      code: const router = express.Router();
      lang: javascript
  - type: phs
    partheader: "Part 6: Authentication Endpoints"
  - type: ps
    paragraph: "Now, you'll be building your authentication endpoint. There'll be
      two requests you need to handle: one for logging in and one for
      registering a new user. For registration, notice that the
      <mark><code>router.post()</code></mark> method is being utilized, as
      registering a new user is best suited to being a POST request. The
      endpoint is defined at \"/api/auth/register\" as you previously specified
      the route to endpoints in this file as beginning with \"/api/auth.\" The
      second parameter is an asynchronous function taking in a request (req) and
      response (res) object which you'll manipulate to produce the correct
      response."
  - type: ps
    paragraph: "You'll notice that async functions are going to be crucial to every
      aspect of this project, as this is how you can avoid null errors when
      JavaScript runs lines without waiting for data to finish resolving. You
      can ignore the // PASSWORD ENCRYPTION contents, as it's a simple method to
      encrypt user passwords to be held in the DB. You want the request object
      (req) to contain properties fitting our User model, so it is safe to
      assume that it does so (when you eventually write the code for utilizing
      this endpoint on the front-end). As such, you can instantiate your user
      model using the properties of the request body as follows (don't forget to
      use the encrypted password):"
  - type: cbs
    codeblock:
      code: |
        const newUser = await new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
          description: req.body.description,
          city: req.body.city,
          from: req.body.from,
          relationship: req.body.relationship,
        });
      lang: javascript
  - type: ps
    paragraph: "Now you need to save the user into the DB. Recall that the user
      model you defined exports as a mongoose Model giving you a means to
      manipulate your DB directly. This is now saved into your variable
      <code><mark>newUser</mark></code>. To save the user in your DB and to give
      a successful response (HTTP 200) with the user object, simply apply the
      following lines under // SAVE USER INTO MONGODB:"
  - type: cbs
    codeblock:
      code: |-
        const user = await newUser.save();
        res.status(200).json(user);
      lang: javascript
  - type: ps
    paragraph: "Now, for the login endpoint, you'll notice a similar structure as
      registering, just some different logic within the async function. Try to
      understand the code that's already there: <mark><code>user</code></mark>
      is assigned to the user in the DB if it exists, otherwise it will be null.
      The <mark><code>findOne()</code></mark> method accepts an object as a
      search parameter, in this case search by email, since your primary user
      login/registration mechanism is by email + password. Then, if the user is
      null, give a 404 via the response  (res) object and break out of the
      function. If there is a user by the given email, proceed to the next step:
      password validation. Now there is an
      <mark><code>attemptPassword</code></mark> variable which represents a
      boolean, true if the password if the given password matches that user's
      password, and false otherwise. Your job is to validate this password. You
      want to give a 400 response (bad request) if the password is wrong before
      the line with the 200 response (login successful). Write this underneath
      // VALIDATE PASSWORD."
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
