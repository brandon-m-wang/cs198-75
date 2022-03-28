---
title: hw7
header: "Project 7: NewsFeed"
due: Fri, 4/8
introduction: >
  <h1 id="introduction-">Introduction👋</h1>

  <p>Hello Hello! It’s Week 7 of Cubstart. This week, your HW will be focusing on integrating API’s into SwiftUI. The project we will be building is called NewsFeed. We will be using a news API to load in real time news articles into an app of your creation. Just FYI, there is a lot of code here and lot of it is stubs (as in, its the same code across the board in apps) so most of the time I will give you the code and explain what each piece does. When you create your own apps, if you are using API’s, you should be able to use these stubs and change them to fit your needs. Most of this homework will be copying code and reading for understanding.</p>

  <p>Project adapted from @tundsDev on YouTube</p>
setup: >-
  <h2 id="setup-">Setup🛠</h2>

  <p>For this project, you will be using some skeleton code that I wrote up to get you started. For this project, there are a lot of different files and code that may seem confusing. However, a lot of that code is just setup stuff that has less to do with actually using API’s so a good amount of this project will be just me walking you through what each file does and how it ties into using API’s.</p>
skeleton: https://github.com/jy73/newsfeedSkeleton
sections:
  - type: phs
    partheader: "Part 1: Concept Overview"
  - type: ps
    paragraph: >
      <p>No real tasks here. Just give this a read to get a quick rundown of
      what we will be working with today. </p>

      <h2 id="what-is-an-api-">What is an API?</h2>

      <p><strong>API</strong> - Application Programming Interface</p>

      <p>An API is an interface exposed by a service that allows other services to interact with it. Essentially API’s allow for interaction between different parties. Imagine you work at the National Weather Service, and you have a system that stores weather data. Other software developers are writing weather apps that need access to NWS data. <strong>How do you serve these apps the data they need?</strong></p>
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-03-27-at-11.27.52-am.png
  - type: ps
    paragraph: >
      <h2 id="tools-for-api-use">Tools for API Use</h2>

      <p><strong>Postman</strong> - <a href="http://www.postman.com">https://www.postman.com</a></p>

      <p>A collaboration platform for API development, but mainly we use it as a tool for making API requests. With Postman, you can make requests of API’s to see what the queries may look like.</p>

      <p><strong>Quicktype</strong> - <a href="http://app.quicktype.io">https://app.quicktype.io</a> </p>

      <p>Application for creating code able objects from JSON. This is helpful in figuring out what your structs look like for handling the API requests</p>

      <h2 id="mvvm-architecture">MVVM Architecture</h2>

      <p><strong>Model-View-ViewModel</strong> - A way to structure and organize an app so that you can separate logic from layout</p>

      <p>Model - A representation of data</p>

      <p>View - A display of data</p>

      <p>ViewModel - A representation of the state of model data</p>
  - type: ibs
    imageblock: /assets/images/mvvmpattern.png
  - type: ps
    paragraph: >
      <h2 id="setup-of-newsfeed">Setup of NewsFeed</h2>

      <p><strong>Models</strong> </p>

      <p>Article - structure of the JSON article AKA all the important info you can get from the API request</p>

      <p><strong>Views</strong></p>

      <p>Article - displaying the actual article information</p>

      <p>Error - displaying an error if cannot pull article information</p>

      <p>Feed - displaying the feed of articles</p>

      <p>Settings - displaying the settings</p>

      <p><strong>ViewModels</strong></p>

      <p>Article - controls the state of the Article</p>

      <h2 id="packages-api">Packages / API</h2>

      <p><strong>Packages</strong></p>

      <p>In this project, you will be introduced to the Swift Package Manager. This allows you to add in outside packages and libraries to use in your project</p>

      <p>We will be using the following packages:</p>

      <p>SwiftUI - the normal package for UI elements</p>

      <p>Foundation - the basic Swift package</p>

      <p>Combine - Apple package allowing for processing over time</p>

      <p>URLImage - third party package for processing remote images (going to be useful for grabbing images from articles)</p>

      <p><strong>API</strong></p>

      <p><a href="https://lil.software/api/">https://lil.software/api/</a></p>

      <p>This will be the API source we will be using. It’s a very minimal one with options of different API’s you can request from. For this project, we will be using the News API.</p>
  - type: phs
    partheader: "Part 2: Setting Up the Model"
  - type: ps
    paragraph: >
      <h2 id="using-postman-and-quicktype">Using Postman and QuickType</h2>

      <p>In order to set up the model, we need to see what the API request will look like. To do this, we will use Postman and QuickType.</p>

      <p><strong>Postman</strong></p>

      <ol>

      <li>Sign in to Postman with your Berkeley account</li>

      <li>Add in the API url (<a href="https://api.lil.software/news">https://api.lil.software/news</a>) and select GET</li>

      <li>Send the request and take note of the response</li>

      </ol>
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-03-27-at-3.48.24-pm.png
  - type: ps
    paragraph: >
      <p><strong>QuickType</strong></p>

      <ol>

      <li>Go to the QuickType site ^^ link above</li>

      <li>Copy the entire JSON code from the Postman request and paste it into the QuickType</li>

      <li>It should spit out the structure of the Article that you will use in setting up your model</li>

      </ol>
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-03-27-at-3.57.35-pm.png
  - type: ps
    paragraph: >
      <h2 id="-creating-the-article-model-"><strong>Creating the Article
      Model</strong></h2>

      <p>Some things to go over...</p>

      <ul>

      <li>Codable allows for the JSON data to be converted to a struct which is why this type is assigned to the struct pushed out by QuickType</li>

      <li><p>Identifiable is a protocol that allows an object to be assigned a unique id. This is helpful when we are reusing a model multiple times like here since we will have multiple articles.</p>

      </li>

      <li><p>In the provided Models folder, create a Swift File “Article”</p>

      </li>

      <li>Copy and Paste the struct code from the QuickType response<ol>

      <li>You’re going to want to change Welcome to something else just for the sake of notation. I suggest you change it to Response or NewsResponse</li>

      </ol>

      </li>

      <li>We want to make the Article struct identifiable. To do this, add the “Identifiable” protocol to the header of the Article struct and add in an “id” parameter to the struct using UUID()</li>

      </ul>

      <p>Your Article.swift file should look a little something like this:</p>
  - type: ibs
    imageblock: /assets/images/screen-20shot-202022-03-27-20at-204.20.42-20pm.png
  - type: phs
    partheader: "Part 3: Setting up the Endpoint & Errors"
  - type: ps
    paragraph: >
      <h2 id="what-is-an-endpoint-">What is an Endpoint?</h2>

      <p>An API endpoint is the point where the API connects with the program you are running. The endpoint is what makes the request of the API through code. An effective endpoint must provide the URL, a method, a list of headers, and a body.</p>

      <h2 id="creating-our-article-endpoint">Creating our Article Endpoint</h2>

      <p>We will create out Endpoint here. I will provide the code and walk you through what each thing is. What we are essentially doing is just building the path of the API calls we want to request.</p>

      <ol>

      <li>In the provided Endpoint folder, create a Swift file called “ArticleEndpoint”</li>

      <li>Copy in the following code</li>

      </ol>
  - type: ibs
    imageblock: /assets/images/screen-20shot-202022-03-27-20at-204.34.32-20pm.png
  - type: ps
    paragraph: >
      <p><strong>APIBuilder Protocol</strong></p>

      <p>This protocol is what builds the API request. We are creating a protocol purely out of good practice in case we want to add in any other API’s. If we were to add in other API’s, we can reuse the protocol to build those requests as well. </p>

      <p><strong>ArticleAPI Enum</strong></p>

      <p>This is the actual defined API. The case getNews is there because we are getting the NewsAPI</p>

      <p><strong>ArticleAPI Extension</strong></p>

      <p>This part is pretty self explanatory. Here we are just building the API. The base url is the url of the website we are pulling from. The path is the news path because we want to use the News API and not the weather or flights one. urlRequest is simply putting the base and path together.</p>

      <h2 id="handling-errors">Handling Errors</h2>

      <p>This is just the basic handling of error cases. I’m not going to go in depth on this, but just add in the following code to the NetworkError swift file in Enum folder.</p>
  - type: ibs
    imageblock: /assets/images/screen-20shot-202022-03-27-20at-204.50.44-20pm.png
  - type: phs
    partheader: "Part 4: Creating the Service to Trigger the API Request"
  - type: ps
    paragraph: >
      <p>Now we will be creating the Service that actually makes the call for
      the API Request. This will involve the use of the Combine package to
      handle the asynchronous changes in time. </p>

      <p><strong>URLSession</strong>  - This is what is used to send API calls in iOS development so we will be using this to make the actual call to the API</p>

      <ul>

      <li>.dataTaskPublisher listens to the result of the service and allows you to use what the service returns. You want to pass into here the urlRequest that you create from endpoint.</li>

      <li>.receive specifies where you want to receive the information. URLSession works asynchronously on background threads so that the information will always be up to date while the app is running. However, you want to make sure that the information gets put into the app so you want to specify here that the information should be received on the main thread.</li>

      <li>.mapError takes care of errors by mapping the error to the unknown enum</li>

      <li>.flatMap takes in all of the necessary information and condenses it into a flattened array that can be used to pull data from. We will use this to return the publisher. In this, we are going to handle the errors and decoding the object.<ul>

      <li>First, we check if it is a valid response. If it is nil, we return an unknown error. If not, we continue. Whenever we create a Failure object, we also return a blank publisher.</li>

      <li>Then, check if the response falls within the valid codes. If it does, then we decode the object using the created decoder. If it does not, return the error code.</li>

      </ul>

      </li>

      </ul>
  - type: ibs
    imageblock: /assets/images/screen-20shot-202022-03-27-20at-205.15.16-20pm.png
  - type: phs
    partheader: "Part 5: Controlling States w/ ViewModel"
  - type: ps
    paragraph: >
      <p>The Article View is going to change based on the state it is in and we
      will be using a ViewModel to control this. Based on whether the article is
      loading, successful in loading, or failed loading, the view of the Article
      will be different. In order to do this, we want to create a Swift file in
      the ViewModel folder called ArticleViewModel. </p>

      <ol>

      <li>Create the ResultState enum which has the different possible cases for the state of the Article View</li>

      <li>Create the ArticleViewModel protocol with the getArticles function (once again this is just good practice to use a protocol to take care of dependencies)</li>

      <li>Create an ArticleViewModel class and make it an ObservableObject so that you can observe the changes that happen in the class and reflect them in the View</li>

      <li>Now, we add in the getArticles function to do the following<ol>

      <li>Get the news request</li>

      <li>If the request errors, set the state to failed</li>

      <li>If the request finishes, set the state to success</li>

      <li>The default state should be loading since the article must load to get the API request</li>

      </ol>

      </li>

      </ol>

      <p>Note: The set stuff above the function is there to communicate with the View and give the View something to check to get the state and display the correct information</p>
  - type: ibs
    imageblock: /assets/images/screen-20shot-202022-03-27-20at-206.20.41-20pm.png
  - type: phs
    partheader: "Part 6: UI"
  - type: ps
    paragraph: >
      <h2 id="using-the-swift-package-manager">Using the Swift Package
      Manager</h2>

      <p>We are going to use the Swift Package Manager today to add in a third party package!</p>

      <ol>

      <li>Visit this link: <a href="https://github.com/dmytro-anokhin/url-image">https://github.com/dmytro-anokhin/url-image</a></li>

      <li>Follow the installation instructions in the README</li>

      </ol>

      <h2 id="building-the-ui">Building the UI</h2>

      <p>For the sake of time and energy, I’m going to just give you the code for the UI and not explain every little bit since this project is more to focus on the API requests and less on UI elements you should already know.  Read through the code as you type it in just to make sure you understand the SwiftUI and what it is doing.</p>

      <p>In the Views folder, make the following Views:</p>

      <ul>

      <li>ArticleView</li>

      <li>ErrorView</li>

      <li>FeedView</li>

      <li>SettingsView</li>

      </ul>

      <h3 id="articleview">ArticleView</h3>
  - type: ibs
    imageblock: /assets/images/screen-20shot-202022-03-27-20at-207.00.06-20pm.png
  - type: ibs
    imageblock: /assets/images/screen-20shot-202022-03-27-20at-207.00.24-20pm.png
  - type: ps
    paragraph: |
      <p>ErrorView</p>
  - type: ibs
    imageblock: /assets/images/screen-20shot-202022-03-27-20at-207.01.21-20pm.png
  - type: ps
    paragraph: |
      <p>FeedView</p>
  - type: ibs
    imageblock: /assets/images/screen-20shot-202022-03-27-20at-207.01.59-20pm.png
  - type: ps
    paragraph: |
      <p>SettingsView</p>
  - type: ibs
    imageblock: /assets/images/screen-20shot-202022-03-27-20at-207.02.39-20pm.png
  - type: ps
    paragraph: >
      <h3 id="contentview">ContentView</h3>

      <p>Edit the ContentView with the following to put together the Views you already made.</p>
  - type: ibs
    imageblock: /assets/images/screen-20shot-202022-03-27-20at-2010.21.41-20pm.png
---
