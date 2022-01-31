---
title: hw1
header: "Project 1: Mobile Bookstore"
due: Fri, 2/11
introduction: Welcome to CS198-75! For your first homework, you’ll be designing
  an iOS app that functions as a mobile bookstore. There will be no coding
  involved. This HW is simply to get you familiar with UI design using Figma and
  introduce you to common elements of iOS apps. You can expect the format of all
  released homeworks here on out to be in this guided doc format. Feel free to
  collaborate with your teammates on this homework, but remember that everyone
  has to submit their own homework.
setup: For this project (and all projects), you will have a project skeleton to
  work off of. Majority of the time, the skeleton will be actual code to pull
  from GitHub. However, since there is no code involved in this project, we have
  provided a link to a Figma template instead (later on). Please follow the
  instructions below. They will walk you through creating a Figma account and
  setting yourself up for the HW! If you have any trouble with the process,
  email jordan@calhacks.io. I’ll try to help you out from there.
skeleton: N/A
sections:
  - type: phs
    partheader: "Part 1: Getting Started w/ Figma 🖍 "
  - type: ps
    paragraph: >-
      No real tasks here. Just make sure you are able to create an account and
      familiarize yourself with the basic tools Figma has to offer. Feel free to
      reference this section as you navigate the rest of the homework!


      ## Creating an Account


      * Go to this link: [](https://www.figma.com/signup)<https://www.figma.com/signup>

      * Make an account with your BERKELEY email. Students get the PRO plan for free which just means you can have unlimited collaborators. But make sure to confirm your email!


      ## Basics of Figma


      I’ll go into the basics of Figma here that should be enough to get you started. A lot of it is pretty intuitive and gets easier with practice (as all things are). However, if you do get stuck or want to read more in depth on what you can do with Figma, I definitely recommend checking out this article: [](https://uxplanet.org/figma-all-you-need-to-know-156b52b88e54)<https://uxplanet.org/figma-all-you-need-to-know-156b52b88e54>


      ### Creating a New File


      Your screen should look something like this! To create a new file, select “New design file”.
  - type: ibs
    imageblock: /assets/images/figmahome.png
  - type: ps
    paragraph: >-
      You can rename the file by selecting “Untitled” and typing in the name of
      your file. Save the draft by selecting the drop down arrow next to the
      title of your file and selecting “move to project”. Select your team and
      project.


      ### Editing Your File


      Your design file will pop up with the workspace blank and this bar on top.
  - type: ibs
    imageblock: /assets/images/toolbar.png
  - type: ps
    paragraph: >-
      On this bar, you will see your design tools in the top left. From left to
      right:


      * The arrow is your select tool

      * The hashtag allows you to select frames to import (we will use this in the next part!)

      * The square lets you add in shapes

      * The pen nib is your pen/writing utensil

      * The T is to add text

      * The hand lets you grab and move elements around

      * The chat bubble lets you add comments to your file (useful when collaborating!)


      \*The right panel allows for more precise customization
  - type: ibs
    imageblock: /assets/images/figmatools.png
  - type: ps
    paragraph: >-
      ### Layers & Groups


      Layers and groups appear on the left panel. Every element you add creates its own new layer. You can drag and drop layers in the left panel to change how the elements present themselves in respect to other elements. You can also group elements together so that they can be manipulated all at once. I would recommend getting comfortable with using layers and groups to keep your designs organized and manageable.


      This is one of my old projects. As you can see, the frame “Home” has elements tiered below it. I made groups of “HomeNavBar”, “Ad”, “About Us”, and “How It Works”. Beneath each group title are the elements that are grouped within. One thing to note is the order in which elements are listed. You can see that “Log In” is listed above “Rectangle 12”. This is done so that the “Log In” text is shown on top of the rectangle (see below). If this were flipped, the “Log In” would be hidden behind the rectangle.
  - type: ibs
    imageblock: /assets/images/login.png
  - type: phs
    partheader: "Part 2: Building the Mobile Bookstore 📚 "
  - type: ps
    paragraph: >-
      In this homework, you will be designing and prototyping an app that
      functions as a mobile bookstore. You will be designing the “Welcome
      Screen”, “Log In” Page, “Shop” Page, “Profile”, and “Chat”. You will also
      practice creating flow to actually prototype and present the app as if it
      was fully functional. Throughout this task, I will share what I created.
      However, I want you to take creative liberties and make this app your own.
      Feel free to deviate from my designs and elaborate on what I have. I want
      to see everyone’s unique takes on the task. This is your opportunity to
      mess around and try things out :)


      ## Task 1: Setup


      I’ve provided a template for you that will provide some icons you might find useful in designing your app!


      1. Click this link: [](https://www.figma.com/file/bamNPIXphcj4Dwv8rMTkpi/HW1-Template?node-id=0%3A1)<https://www.figma.com/file/bamNPIXphcj4Dwv8rMTkpi/HW1-Template?node-id=0%3A1>

      2. Click on the drop down arrow next to title and select “Duplicate to your drafts”
  - type: ibs
    imageblock: /assets/images/hw1template.png
  - type: ps
    paragraph: >-
      

      3. Open the duplicated draft, save it to your projects, and rename this file to whatever you’d like


      ## Task 2: Welcome Screen


      First, we want to build the “Welcome Screen” or “Title Screen”. This is the first page that comes up when you open the app. In our case, this page will simply have the title of the app, a logo, and some sort of prompt telling the user to continue.
  - type: ibs
    imageblock: /assets/images/welcome.png
  - type: ps
    paragraph: >-
      

      1. First things first, we need to add in this frame. We will be modeling for an iPhone 13 so click on Frames in the toolbar and select “iPhone 13/13 Pro”

         1. Add the frame to the workspace and title the frame “Welcome Screen”
      2. I would suggest you fill the frame with a color. This can be done in the right panel when you click on your frame. Alternatively (and this is what I would prefer you try out), add in some shapes and design your welcome screen! My example is pretty boring with just the red, if I do say so myself.

      3. Add in a logo too! I stole an image off the internet and edited it for mine. But you can play around with shapes and make your own, or there are a lot of websites that offer free icons as well.

         1. [](https://www.flaticon.com/packs?search-type=packs&order_by=2&color=1&stroke=2)<https://www.flaticon.com/packs?search-type=packs&order_by=2&color=1&stroke=2>
         2. [](https://www.notion.vip/icons/)<https://www.notion.vip/icons/>
      4. Finally, use the Text tool to give your welcome screen a title and prompt for user interaction


      ## Task 3: Log In


      Next up: Log In Page! Here you will be creating the log in page for users of your app. This is an essential page to any app so make sure you are comfortable with the various elements that go into this design.


      These are the elements you must include:


      1. Log In title

      2. Username and Password input areas

      3. Sign In button

      4. Sign Up button


      Once again, take creative liberties here. Think about what you would like to see on a log in page and make sure to match the aesthetic of your Welcome screen.
  - type: ibs
    imageblock: /assets/images/loginexample.png
  - type: ps
    paragraph: >-
      Tip: Try to mess around with the rounded corners of rectangles to get
      button shapes and softer input areas


      ## Task 4: Shop + NavBar


      In this task, you will create the Shop page as well as the Navigation Bar. The Shop Page should include a title, a search bar, categories of books, and titles of books.
  - type: ibs
    imageblock: /assets/images/shop.png
  - type: ps
    paragraph: >-
      The NavBar should be located at the bottom and host the icons that can be
      clicked on to bring the user to other pages. In our case, the NavBar will
      have “buttons” for Profile, Shop, and Chat.


      ## Task 5: Profile


      The Profile page is a little more involved with a lot more information on it. For this task, practice getting your alignment and centering just right. Also, this is a good opportunity to see how layers and groups work! Follow my example in what should be included.
  - type: ibs
    imageblock: /assets/images/profile.png
  - type: ps
    paragraph: >-
      As an extra challenge, add in another section for your Profile page that
      isn’t included in mine! Don’t forget the NavBar!


      ## Task 6: Chat


      The Chat page is relatively simple. Follow my example below to see the general format and what elements to include.
  - type: ibs
    imageblock: /assets/images/chat.png
  - type: ps
    paragraph: >-
      Just cause, I want you to add in 3 more elements into your Chat page. I
      made mine very minimalistic and definitely lacks a lot of functionality.
      It’s your job to fix that.


      ## Task 7: Prototype Flow


      Finally, we want to be able to turn this a somewhat functional app! Or at least a prototype that you can present showing what the app should do...


      Here’s what should be possible: (using my design as an example)


      1. Pressing “Tap to Begin” brings you to the Log In Screen

      2. Pressing “Go!” brings you to the Profile Page

      3. On NavBar, no matter what screen is showing at the time, pressing the User Icon brings you to the Profile Page, pressing the Shopping Cart brings you to the Shop Page, and pressing the Chat Bubble brings you to the Chat Page.


      In order to do all of these things, you want to select the Prototype tab on the right side.


      Now, you can click on elements and drag their connections to other pages. You can also select which actions will direct these transitions to happen. Should look something like this when done:
  - type: ibs
    imageblock: /assets/images/workflow.png
  - type: ps
    paragraph: Once you’ve implemented all of the actions and transitions, press the
      play button in the top right to demo your app!
  - type: phs
    partheader: "Part 3: Get Creative 🖼️"
  - type: ps
    paragraph: >-
      ## Task 1: Your Own Page


      For this final task, I want you to create another page in the app. This page should be of your own design and have a separate function than that of which you already made. These are the following requirements and what we will look for when grading:


      1. New icon on NavBar

      2. At least 7 elements

      3. Multiple colors and shapes

      4. Integrated functionality within the prototype


      Be Creative!
---
