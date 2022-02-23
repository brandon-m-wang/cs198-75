---
title: hw4
header: "Project 4: Waitlist Helper"
due: Fri, 3/4
introduction: Hello Hello! It’s Week 4 of Cubstart. Wooooo! Congrats for making
  it this far. Halfway point of homework :)). Hope you’ve been having fun and
  are learning a lot this semester. This week, your HW will be focusing creating
  multiple pages/screens in SwiftUI and navigating them with Swift. We will be
  mainly utilizing Navigation Views and Tab Views. The project we will be
  building is called Waitlist Helper. It will allow the user to input a waitlist
  position and class size, and then display a percentage chance of them getting
  into the class!
setup: For this project, you will be using some skeleton code that I wrote up to
  get you started. The file is pretty blank but the assets you need are there
  and the general setup is made for you. Don’t worry, like all homework, I’ll
  walk you through the entire project!
skeleton: https://github.com/jy73/waitlisthelper-skeleton
sections:
  - type: phs
    partheader: "Part 1: Concept Review"
  - type: ps
    paragraph: >-
      <p>No real tasks here. Just give this a read real fast to review concepts
      from last lecture!</p>

      <h2 id="navigationview-navigationlink">NavigationView &amp; NavigationLink</h2>

      <p><em>From Apple’s official documentation...</em></p>

      <p><strong>NavigationView</strong> - A view for presenting a stack of views that represents a visible path in a navigation hierarchy</p>
  - type: cbs
    codeblock:
      code: "struct NavigationView<Content> where Content : View"
  - type: ps
    paragraph: >-
      <p>A NavigationView essentially allows you to push a view on top of
      another via some sort of action. This is often used for any sort of
      cause-effect relationship. In the case of this project, we will use
      NavigationView to navigate from the page where the user inputs in values
      to the page that displays the calculation results.</p>

      <p><strong>NavigationLink</strong> - A view that controls a navigation presentation</p>
  - type: cbs
    codeblock:
      code: "struct NavigationLink<Label, Destination> where Label : View, Destination
        : View"
  - type: ps
    paragraph: >
      <p>The NavigationLink is the actual code that controls the NavigationView.
      Using the NavigationLink gives you the ability to customize when and where
      the page changes, as well as how the transition is triggered.</p>
  - type: ps
    paragraph: >
      <h2 id="tabview-tabitem">TabView &amp; TabItem</h2>

      <p><em>From Apple’s official documentation...</em></p>

      <p><strong>TabView</strong> - A view that switches between multiple child views using interactive user interface elements</p>
  - type: cbs
    codeblock:
      code: "struct TabView<SelectionValue, Content> where Selection Value: Hashable,
        Content : View"
  - type: ps
    paragraph: >-
      <p>The TabView is used to create a TabBar at the bottom of the screen and
      easily navigate to other views that may be more stand alone from each
      other.</p>

      <p><strong>tabItem(_:)</strong> - Sets the tab bar item associated with this view</p>

      <p>Tab Items are the actual icons in the tab bar that are tapped on to switch the views</p>
  - type: phs
    partheader: "Part 2: Main Page UI"
  - type: ps
    paragraph: >
      <p>Time to get coding! Okay, let’s open up that skeleton code and make
      your way over to ContentView. All the code we will be doing will be in
      here. I have marked the general spots where your code should be so just
      follow the numbers and you’ll be just fine.</p>

      <p>Before we get into the nitty gritty of NavigationViews, TabViews, and Swift functionality, we need to build the UI! As you can see, I’ve provided you with a blank slate :)). It&#39;s your job to change that.</p>

      <p><em>NOTE: I will add in “.padding” a lot in the solution/guidance code I provide. This just adds a little more space between elements and makes things look a little cleaner.</em> </p>

      <h2 id="task-1-app-background-header">Task 1: App Background + Header</h2>

      <p>First up, we have to make a background and header! As always, I will provide screenshots of my end result so you know what you are aiming for.</p>
  - type: ibs
    imageblock: /assets/images/untitled-2.png
  - type: ps
    paragraph: >
      <h3 id="custom-app-background">Custom App Background</h3>

      <p>The following code should point you in the right direction! We have provided you with the custom background already in the Assets folder. It is your job to figure out how to fill in the following code to <strong>insert the custom background **</strong>and <strong>fill the entire area of the screen.</strong></p>
  - type: cbs
    codeblock:
      code: |-
        Image(...)
        	.resizeable()
        	.aspectRatio(contentMode: .fill)
        	....
  - type: ps
    paragraph: >-
      <h3 id="header">Header</h3>

      <p>Nothing complicated here! Add in the text <strong>“WILL YOU GET OFF THE WAITLIST”.</strong> However, I want you to follow these <strong>parameters</strong>:</p>

      <ul>

      <li>largeTitle font</li>

      <li>bolded</li>

      <li>black text</li>

      <li>padding</li>

      </ul>

      <p><strong>A quick sanity check as well:</strong> </p>

      <p>Make sure you understand why we have a VStack inside of the ZStack and why the background code is not in the VStack but above it. What would happen if these were flipped??</p>

      <h2 id="task-2-accepting-and-displaying-user-input">Task 2: Accepting and Displaying User Input</h2>

      <p>In this section, we will be adding in the Sliders and code functionality for displaying the changing inputs in real time!</p>
  - type: ibs
    imageblock: /assets/images/untitled-3.png
  - type: ps
    paragraph: >
      <h3 id="sliders">Sliders</h3>

      <p>In all honesty, sliders are not the greatest tool for this app. It would be more convenient to simply have a text box, but for the sake of LEARNING, we are going to use sliders!</p>

      <p>The basic code for a slider is as follows:</p>
  - type: cbs
    codeblock:
      code: |-
        Slider(value: ... , in: ... , step: ... )
        	.padding
  - type: ps
    paragraph: >
      <p>For this project, we want <strong>2 Sliders</strong>. </p>

      <ol>

      <li>Slider 1 will be for the place on the waitlist input. It will store the value of the waitlist place and have max value of 200.</li>

      <li>Slider 2 will be for the class size. It will store the value of the class size and have a max value of 1000.</li>

      </ol>

      <p><strong>Things to Keep In Mind:</strong></p>

      <ul>

      <li>Take a look at what variables have been provided (HINT: Use the ‘$’ in front of any variable you write in for value in the slider)</li>

      <li>What would the step size be in this situation?</li>

      </ul>

      <h3 id="displaying-the-slider-values">Displaying the Slider Values</h3>

      <p>Now we want to be able to display the value of the sliders as the user moves them so that the user knows when to stop! Otherwise, they are just guessing what number they are inputting.</p>

      <p>In this case, we want text for each slider. Here is a little hint at to what the code should look like:</p>
  - type: cbs
    codeblock:
      code: 'Text(" ... : \( ... , specifier: "%.f")")'
  - type: ps
    paragraph: >
      <p>You need to fill in the “...” with the appropriate text and values for
      each slider. Refer to your slider code for help!</p>

      <p>Make sure to check that your sliders are working and mess around with different values to see if they are displayed correctly as you move the slider!</p>

      <p><strong>HEY! Now that you have added in these UI elements, I want you to go back and use modifiers to customize your project. This may be messing around with font colors, overlays, etc. It’s boring to use default settings so have some fun with this!</strong> </p>

      <h2 id="task-3-custom-button">Task 3: Custom Button</h2>

      <p>Time for a little fun! I want you to customize your calculate button! You will do this using the buttonStyle modifier (which is already written in for you). For this part, scroll down to the CustomButton struct and modify the configuration.label tag. <strong>Please take some time to Google button modifiers and come up with a creative look to your button! Maybe even try making it do something different when tapped!</strong></p>
  - type: ibs
    imageblock: /assets/images/untitled-4.png
  - type: ps
    paragraph: >
      <p>My button gets larger when it is tapped! Unfortunately, I am not sure
      how to make gif so you’ll just have to believe me :))</p>

      <p>When all the UI is completed, it should look a little something like this:</p>
  - type: ibs
    imageblock: /assets/images/untitled-5.png
  - type: phs
    partheader: "Part 3: NavigationView"
  - type: ps
    paragraph: >-
      <p>Alright, alright, time to knock out this NavigationView! When you
      finish this section, you will have built out the two main views and will
      be able to navigate between the two with a push of a button. No
      pressure!</p>

      <h2 id="task-1-navigationview-navigationbar">Task 1: NavigationView &amp; NavigationBar</h2>

      <p>This should be fairly obvious, but you can’t navigate anywhere without declaring a NavigationView! <strong>Let’s wrap the ZStack in a NavigationView first!</strong></p>
  - type: ibs
    imageblock: /assets/images/ddoski8.png
  - type: ps
    paragraph: >
      <p>No visual changes will show up from this! But here’s DDoski working
      alongside you. A quick note, I did already code in the following:</p>
  - type: cbs
    codeblock:
      code: |-
        .navigationBarTitle("")
        .navigationBarHidden(true)
  - type: ps
    paragraph: >
      <p>This essentially just makes it so there is no Navigation Bar Title or
      Bar. If I changed the code to the following, the view would look like
      this:</p>
  - type: cbs
    codeblock:
      code: .navigationBarTitle("HOME")
  - type: ibs
    imageblock: /assets/images/untitled-6.png
  - type: ps
    paragraph: >
      <p>Notice how the title shows up at the top now and all the text gets
      pushed down to make room for the Navigation Bar.</p>

      <h2 id="task-2-navigationlink">Task 2: NavigationLink</h2>

      <p>With the NavigationView, nothing much happens. We ultimately need the NavigationLink to make the magic happen! There are many ways that you can implement a NavigationLink. The most common and basic one:</p>
  - type: cbs
    codeblock:
      code: |-
        NavigationLink(destination: ResultView()) {
                        Text("Tap Me")
                    }
  - type: ps
    paragraph: >-
      <p>This one would simply display a button “Tap Me” that when pressed would
      push the ResultView into place. The ResultView would have a back button as
      well to go back to the original view.</p>

      <p>In our case, we want to do this a little more programmatically so we can utilize the nice custom button we created earlier. Uncomment the following code in the file to get your navigation link going.</p>
  - type: cbs
    codeblock:
      code: |-
        NavigationLink(destination: ResultView(prob: $probability, 
        feedback: $text), isActive: $calculate) { EmptyView() } 
        .padding()
---
