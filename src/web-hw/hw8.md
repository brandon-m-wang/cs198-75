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
      (req) to contain properties fitting your User model, so it is safe to
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
    paragraph: "For the login endpoint, you'll notice a similar structure as
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
  - type: ps
    paragraph: Of course, at the end of the file, you export your authentication
      router for use in other areas of your application.
  - type: phs
    partheader: "Part 7: Posts Endpoints"
  - type: ps
    paragraph: "Moving into the posts endpoint, you'll have five main
      functionalities: creating a post, liking/unliking a post, getting a post,
      getting all of one user's posts, and getting a \"timeline.\""
  - type: ps
    paragraph: "To start, the post creation endpoint is very similar to what you've
      done in authentication, you create a new post model from the request body,
      and simply save it and give it a successful response status. Within the
      try block of // CREATE POST:"
  - type: cbs
    codeblock:
      code: |-
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
      lang: javascript
  - type: ps
    paragraph: "As for your post liking endpoint, you'll notice that the endpoint is
      defined to be \"/:id/like.\" You can think of the colon as denoting a sort
      of wildcard, accepting any valid string and assigning it the name \"id\"
      within request parameters. Request parameters are accessed similar to the
      request body with <mark><code>req.params</code></mark>. To handle
      like/unlike functionality, you need to first fetch this post information.
      To do so, the \"id\" request parameter will represent the post's id! This
      makes it simple to retrieve from your DB, as you have a posts collection
      in MongoDB. Using your post model (to communicate with your DB), you can
      use the method <mark><code>findById()</code></mark> and pass in your
      request parameter \"id\" to retrieve your post. Then you'll check to see
      if the current user has already liked the post, and like or unlike the
      post accordingly. The \"$push\" and \"$pull\" options tells the post model
      to either insert or delete the current user's id (included in the request
      body) from the post's \"likes\" array. Within the try block of //
      LIKE/UNLIKE POST:"
  - type: cbs
    codeblock:
      code: |-
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
          await post.updateOne({ $push: { likes: req.body.userId } });
          res.status(200).json("Post liked");
        } else {
          await post.updateOne({ $pull: { likes: req.body.userId } });
          res.status(200).json("Post unliked");
        }
      lang: javascript
  - type: ps
    paragraph: "To get a post, you'll need to rely on using request parameters again
      (\"/:id\"). The functionality is simple, you find the post in your posts
      collection by its id, and give a successful response with the post. Within
      the try block of // GET POST:"
  - type: cbs
    codeblock:
      code: |-
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
      lang: javascript
  - type: ps
    paragraph: "To get all of one specific user's posts, the logic is quite similar.
      Again relying on request parameters (\"/profile/:username\") where
      username is the user's username, you can utilize the mongoose model's
      powerful methods again to first search for the user by username in your
      users collection, then find every post by the user's id in your posts
      collection. Within the try block of // GET ALL OF ONE USER'S POST:"
  - type: cbs
    codeblock:
      code: |-
        const user = await User.findOne({ username: req.params.username });
        const posts = await Post.find({ userId: user._id });
        res.status(200).json(posts);
      lang: javascript
  - type: ps
    paragraph: "In order to generate a user's timeline, you'll need to consider two
      things: the current user's posts, and the posts of all of their friends.
      This is a fairly rudimentary means of generating a timeline, but for the
      purposes of this project it will do. To do so, you'll rely on request
      parameters again (\"timeline/:userId\"), where userId is the current
      user's id. Retrieve the current user's object by finding by id in your
      users collection, and then fetch every post authored by the current user
      in your posts collection. You'll repeat this for each friend in the user's
      friends list using <code><mark>Promise.all()</mark></code> which in short,
      resolves all data fetching procedures in a loop before proceeding. Then
      you'll concatenate both in a joint list of posts, and return them in the
      response. Within the try block of // GET TIMELINE:"
  - type: cbs
    codeblock:
      code: |-
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
          currentUser.following.map((friendId) => {
            return Post.find({ userId: friendId });
          })
        );
        res.status(200).json(userPosts.concat(...friendPosts));
      lang: javascript
  - type: ps
    paragraph: For your convenience and additional learning, the endpoints for
      updating and deleting posts are included as well, however they will not be
      used in this project spec.
  - type: phs
    partheader: "Part 8: Users Endpoints"
  - type: ps
    paragraph: "Finally, your users endpoint. You'll have five main functionalities:
      updating a user, getting a user by id or username, get a user's following
      list (friends), following a user, and unfollowing a user."
  - type: ps
    paragraph: "For updating a user, only the current user should be able to update
      their own page. To ensure this, both request body and request parameters
      will be utilized. The request body will contain the user id making the
      update request, the parameter is simply the user to be updated. After
      verifying that both match up, proceed with updating. Password updating is
      a bit more convoluted as it involves hashing again, so it has been done
      already for your convenience. The objective of the update is to set all
      fields in the user document equal to the affected fields in the request
      body. Within // UPDATE USER:"
  - type: cbs
    codeblock:
      code: |-
        await User.findByIdAndUpdate(req.body.userId, {
          $set: req.body,
        });
        res.status(200).json("Account has been updated");
      lang: javascript
  - type: ps
    paragraph: "For the next endpoint you'll be getting users by either userId or
      username. This is crucial, as the way users are fetched from a profile
      page (e.g. /profile/bob) need to retrieve the user object from your DB
      only by username, since in this case we have no access to bob's user id.
      To do so, request queries are utilized. You know of request body and
      request parameters already, so this should be fairly intuitive. Request
      queries are appended onto the end of an endpoint's url. In this case, your
      endpoint is \"/api/users,\" so a query would be something like
      \"/api/users?username=bob.\" You can retrieve data from request queries
      with <mark><code>req.query</code></mark>. With that in mind, retrieving a
      user by either userId or username becomes trivial. You check if the query
      contains either a userId or username, and retrieve the user object
      accordingly from your DB. Within // GET USER BY ID OR USERNAME:"
  - type: cbs
    codeblock:
      code: >-
        const userId = req.query.userId;

        const username = req.query.username;

        const user = userId
          ? await User.findById(userId)
          : await User.findOne({ username: username });
        const { password, updatedAt, ...other } = user._doc;

        // _doc carries the entire document object in MongoDB. need to remove password and other extranneous information from the response.

        res.status(200).json(other);
      lang: javascript
  - type: ps
    paragraph: "For getting a user's following/friends, you will fetch the friends
      of the user whose id is specified in the request parameter \":userId.\" To
      do so, retrieve the user object by userId, then for each friend you
      retrieve the friend's user object by friendId, keeping only the necessary
      information (id, username, profile picture), and returning this list in
      the response. Within // GET FOLLOWING/FRIENDS:"
  - type: cbs
    codeblock:
      code: |-
        const user = await User.findById(req.params.userId);
        const friends = await Promise.all(
          user.following.map((friendId) => {
            return User.findById(friendId);
          })
        );
        let friendsList = [];
        friends.map((friend) => {
          const { _id, username, profilePicture } = friend;
          // Only unpack the properties we need, then push
          friendsList.push({ _id, username, profilePicture });
        });
        res.status(200).json(friendsList);
      lang: javascript
  - type: ps
    paragraph: "Now the follow user endpoint. Within the request parameters, you
      have \":id\" which represents the user to be followed. First it needs to
      be verified that the user to be followed can not be the current user
      (can't follow yourself). Then, to handle the following procedure, you'll
      just have to append the current user to the user to be followed's follower
      list. Try to really understand the code's inner workings, since you have
      seen this type of architecture so many times now. Within // FOLLOW USER:"
  - type: cbs
    codeblock:
      code: >-
        const user = await User.findById(req.params.id);

        const currentUser = await User.findById(req.body.userId);

        // If not already following

        if (!user.followers.includes(req.body.userId)) {
          await user.updateOne({ $push: { followers: req.body.userId } }); // Update both users involved using $push syntax
          await currentUser.updateOne({ $push: { following: req.params.id } }); // Update both users involved
          res.status(200).json("Followed user");
        } else {
          res.status(403).json("Already following");
        }
      lang: javascript
  - type: ps
    paragraph: For a bit of a challenge, try to implement the unfollow endpoint
      within // UNFOLLOW USER. It's nearly identical to the follow endpoint.
  - type: phs
    partheader: "Part 9: API Endpoint Testing with Postman and User Generation"
  - type: ps
    paragraph: In order to verify the correctness of your endpoints, you'll be using
      Postman. Visit <a href="https://www.postman.com/downloads/"
      target="_blank">https://www.postman.com/downloads/</a> to install Postman.
      Go ahead and get started with a workspace on within the app.
  - type: ibs
    imageblock: https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/cubstart/Screen+Shot+2022-01-10+at+6.11.25+PM.png
  - type: ps
    paragraph: Within your workspace, choose to import. The file you'll be choosing
      is named <mark><code>hw8.postman_collection.json</code></mark>. This will
      give you access to all the different HTTP requests you should test. Play
      around with the tool with the correct parameters, and ensure that they all
      work properly with the intended behavior in your MongoDB documents before
      moving on.
  - type: phs
    partheader: "Part 10: Frontend Dependencies and Environment Set-up"
  - type: ps
    paragraph: "Open a terminal and navigate to the
      <mark><code>react-client</code></mark> folder. Run <mark><code>npm
      install</code></mark> which will install all the necessary dependencies
      for the frontend component of this project. Under this same directory,
      create a file called <mark><code>.env</code></mark>. Inside, include the
      following line to specify your public folder directory (where all assets
      will be stored within your Node.js webserver):"
  - type: cbs
    codeblock:
      code: REACT_APP_PUBLIC_FOLDER = http://localhost:8800/images/
      lang: html
  - type: phs
    partheader: "Part 11: User Context"
  - type: ibs
    imageblock: https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/cubstart/Screen+Shot+2022-01-10+at+6.22.37+PM.png
  - type: ps
    paragraph: The entire frontend parent-child component relationships are depicted
      here. You can see that this tree can become quite convoluted when you need
      to track something that is globally required to interact with each
      individual component on this tree, regardless of its hierarchy; namely,
      user authentication. To validate whether a certain user is signed in
      across all components would normally require a prop, say "user", that gets
      passed down across every single component down the tree. This is not
      sustainable for larger scale apps like this one. Luckily, there is the
      Context API in React.js that allows you to define these "global props."
      Context provides a way to pass data through the component tree without
      having to pass props down manually at every level.
  - type: ps
    paragraph: "There are three main components to your user context: the provider,
      reducer, and actions. The provider is what provides the context at each
      component level. Your context can be thought of as a stateful value (your
      authenticated user can change while using the app: making a post,
      following another user, etc.), with a setter function
      <mark><code>dispatch</code></mark>. <mark><code>dispatch</code></mark>
      uses a reducer to modify your current user state. A reducer updates the
      user according a performed action (e.g. logging in, following another
      user, etc.), and the actions are these sets of performed actions to act
      on."
  - type: ps
    paragraph: "First up, your actions. Navigate to your
      </mark></code>src/context</code></mark> folder. Under AuthActions.js,
      you'll want to build the actions here. Each action is an exported function
      taking some parameter and returning a JavaScript object with the type of
      action it's associated with and its payload as a result of enacting the
      action. For instance, LoginSuccess is of type \"LOGIN_SUCCESS,\" and it
      gives the logged in user as a result. UpdateProfile is of type
      \"UPDATE_PROFILE,\" and the payload is the hashed file name of the user's
      uploaded profile photo. It's all fairly intuitive:"
  - type: cbs
    codeblock:
      code: |-
        export const LoginStart = (userCredentials) => ({
          type: "LOGIN_START",
        });

        export const LoginSuccess = (user) => ({
          type: "LOGIN_SUCCESS",
          payload: user,
        });

        export const LoginFailure = (error) => ({
          type: "LOGIN_FAILURE",
          payload: error,
        });

        export const Follow = (userId) => ({
          type: "FOLLOW",
          payload: userId,
        });

        export const Unfollow = (userId) => ({
          type: "UNFOLLOW",
          payload: userId,
        });
      lang: javascript
  - type: ps
    paragraph: "Navigate to \"AuthReducer.js.\" Your reducer needs to understand how
      to act on certain actions, namely the actions you defined previously.
      Within the switch statement, you'll handle every action case. The return
      value is the updated context state, which is an object with three
      properties: user, isFetching, and error. With this, the reducer hook can
      correctly update your user state. When you start the log in process, you
      define the user to be null (no user fetched yet), isFetching to be true,
      and error to be false (no error encountered yet). If the login is a
      success, you define the user to be the retrieved user (from the action
      payload), isFetching to be false (done fetching), and error to be false
      (no error). Login failure follows a similar line of logic. For the follow
      and unfollow actions, all that needs to be done is the update the current
      user object's following list to include/exclude the other user being
      followed/unfollowed. With a little spread syntax, the following script
      accomplishes this task:"
  - type: cbs
    codeblock:
      code: |-
        case "LOGIN_START":
          return {
            user: null,
            isFetching: true,
            error: false,
          };
        case "LOGIN_SUCCESS":
          return {
            user: action.payload,
            isFetching: false,
            error: false,
          };
        case "LOGIN_FAILURE":
          return {
            user: null,
            isFetching: false,
            error: action.payload,
          };
        case "FOLLOW":
          return {
            ...state,
            user: {
              ...state.user,
              following: [...state.user.following, action.payload],
            },
          };
        case "UNFOLLOW":
          return {
            ...state,
            user: {
              ...state.user,
              following: state.user.following.filter(
                (following) => following !== action.payload
              ),
            },
          };
      lang: javascript
  - type: ps
    paragraph: 'Navigate to "AuthContext.js." Notice that the initial state of your
      context has some interesting syntax in its "user" field. This simply
      checks to see if there is already a user that exists in the current
      session, uses it if there is, and assigns null if not. First, you need to
      create a context with this initial state:'
  - type: cbs
    codeblock:
      code: export const AuthContext = createContext(INITIAL_STATE);
      lang: javascript
  - type: ps
    paragraph: "Next, to establish your provider, you must first initialize the
      <mark><code>useReducer()</code></mark> hook. The first parameter is the
      reducer which you defined earlier, and the second parameter is the initial
      state to be used. The \"state\" variable is our context state, and the
      \"dispatch\" is the setter function as mentioned earlier. You'll utilize
      the <mark><code>useEffect()</code></mark> hook as well to push the current
      user to local session storage at every action (e.g. logging in). The
      return value of this component is the provider generated from your
      \"AuthContext\" variable which you initialized above. It has the context
      state object as its prop, and can accept children to which it gives this
      context all the way down the nested hierarchy:"
  - type: cbs
    codeblock:
      code: |-
        export const AuthContextProvider = ({ children }) => {
          const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

          useEffect(() => {
            localStorage.setItem("user", JSON.stringify(state.user));
          }, [state.user]);

          return (
            <AuthContext.Provider
              value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
              }}
            >
              {children}
            </AuthContext.Provider>
          );
        };
      lang: javascript
  - type: ps
    paragraph: "Navigate to \"src/loginCalls.js.\" Here, you'll find that a library
      \"axios\" is imported. Axios is a convenient tool that allows you to make
      HTTP requests with ease. In this file, you'll define the behavior of your
      user context when a user logs in. Recall that dispatch is the setter
      function, and initiates the actions and workflows defined in your actions
      and reducer. First, the function must dispatch the \"LOGIN_START\" action.
      Then, you'll get a response from making a POST request to your
      authentication login endpoint, with your request body being the user's
      input credentials. If all goes well without error, that means the user's
      input credentials were valid, so dispatch \"LOGIN_SUCCESS\" with the
      user's info grabbed from the DB as its payload. Otherwise, if an error is
      caught, dispatch \"LOGIN_FAILURE,\" and the payload is now the error
      instead:"
  - type: cbs
    codeblock:
      code: |-
        export const loginCall = async (userCredentials, dispatch) => {
          dispatch({ type: "LOGIN_START" });
          try {
            const res = await axios.post("/auth/login", userCredentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
          } catch (error) {
            dispatch({ type: "LOGIN_FAILURE", payload: error });
          }
        };
      lang: javascript
  - type: ps
    paragraph: Finally, it's time to give your app this context. To do so, simply
      wrap your App in "index.js" with your
      <mark><code>AuthContextProvider</code></mark> (it's already been imported
      for you).
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
