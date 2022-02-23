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
    paragraph: >
      <p>No real tasks here. Just give this a read real fast to review concepts
      from last lecture!</p>

      <h2 id="navigationview-navigationlink">NavigationView &amp; NavigationLink</h2>

      <p><em>From Apple’s official documentation...</em></p>

      <p><strong>NavigationView</strong> - A view for presenting a stack of views that represents a visible path in a navigation hierarchy</p>

      <pre><code class="lang-swift"><span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">NavigationView</span>&lt;<span class="hljs-title">Content</span>&gt; <span class="hljs-title">where</span> <span class="hljs-title">Content</span> : <span class="hljs-title">View</span></span>

      </code></pre>

      <p>A NavigationView essentially allows you to push a view on top of another via some sort of action. This is often used for any sort of cause-effect relationship. In the case of this project, we will use NavigationView to navigate from the page where the user inputs in values to the page that displays the calculation results.</p>

      <p><strong>NavigationLink</strong> - A view that controls a navigation presentation</p>

      <pre><code class="lang-swift"><span class="hljs-keyword">struct</span> NavigationLink&lt;Label, Destination&gt; <span class="hljs-built_in">where</span> Label : <span class="hljs-built_in">View</span>, Destination : <span class="hljs-built_in">View</span>

      </code></pre>

      <p>The NavigationLink is the actual code that controls the NavigationView. Using the NavigationLink gives you the ability to customize when and where the page changes, as well as how the transition is triggered.</p>

      <h2 id="tabview-tabitem">TabView &amp; TabItem</h2>

      <p><em>From Apple’s official documentation...</em></p>

      <p><strong>TabView</strong> - A view that switches between multiple child views using interactive user interface elements</p>

      <pre><code class="lang-swift"><span class="hljs-keyword">struct </span>TabView&lt;<span class="hljs-keyword">SelectionValue, </span>Content&gt; where <span class="hljs-keyword">Selection </span>Value: Hashable, Content : View

      </code></pre>

      <p>The TabView is used to create a TabBar at the bottom of the screen and easily navigate to other views that may be more stand alone from each other.</p>

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
    paragraph: >+
      <h3 id="custom-app-background">Custom App Background</h3>

      <p>The following code should point you in the right direction! We have provided you with the custom background already in the Assets folder. It is your job to figure out how to fill in the following code to <strong>insert the custom background **</strong>and <strong>fill the entire area of the screen.</strong></p>

      <pre><code class="lang-swift"><span class="hljs-selector-tag">Image</span>(...)
          <span class="hljs-selector-class">.resizeable</span>()
          <span class="hljs-selector-class">.aspectRatio</span>(<span class="hljs-attribute">contentMode</span>: .fill)
          ....
      </code></pre>

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
    paragraph: >+
      <h3 id="sliders">Sliders</h3>

      <p>In all honesty, sliders are not the greatest tool for this app. It would be more convenient to simply have a text box, but for the sake of LEARNING, we are going to use sliders!</p>

      <p>The basic code for a slider is as follows: </p>

      <pre><code class="lang-swift">Slider(value: ... , <span class="hljs-keyword">in</span>: ... , step: ... )
          .padding
      </code></pre>

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

      <pre><code class="lang-swift"><span class="hljs-function"><span class="hljs-title">Text</span><span class="hljs-params">(<span class="hljs-string">" ... : \( ... , specifier: "</span>%.f<span class="hljs-string">")"</span>)</span></span>

      </code></pre>

      <p>You need to fill in the “...” with the appropriate text and values for each slider. Refer to your slider code for help!</p>

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
    paragraph: >+
      <p>No visual changes will show up from this! But here’s DDoski working
      alongside you. A quick note, I did already code in the following:</p>

      <pre><code class="lang-swift"><span class="hljs-selector-class">.navigationBarTitle</span>(<span class="hljs-string">""</span>)

      <span class="hljs-selector-class">.navigationBarHidden</span>(true)

      </code></pre>

      <p>This essentially just makes it so there is no Navigation Bar Title or Bar. If I changed the code to the following, the view would look like this:</p>

  - type: ibs
    imageblock: /assets/images/untitled-6.png
  - type: ps
    paragraph: >+
      <p>Notice how the title shows up at the top now and all the text gets
      pushed down to make room for the Navigation Bar.</p>

      <h2 id="task-2-navigationlink">Task 2: NavigationLink</h2>

      <p>With the NavigationView, nothing much happens. We ultimately need the NavigationLink to make the magic happen! There are many ways that you can implement a NavigationLink. The most common and basic one:</p>

      <pre><code class="lang-swift"><span class="hljs-selector-tag">NavigationLink</span>(<span class="hljs-attribute">destination</span>: ResultView()) {
                      <span class="hljs-selector-tag">Text</span>(<span class="hljs-string">"Tap Me"</span>)
                  }
      </code></pre>

      <p>This one would simply display a button “Tap Me” that when pressed would push the ResultView into place. The ResultView would have a back button as well to go back to the original view.</p>

      <p>In our case, we want to do this a little more programmatically so we can utilize the nice custom button we created earlier. Uncomment the following code in the file to get your navigation link going.</p>

  - type: ps
    paragraph: >+
      <p>This code essentially does three things when the variable calculate is
      set to true (done when the calculate button is clicked):</p>

      <ol>

      <li>Transitions to the ResultView</li>

      <li>Binds the probability variable to the prob variable in ResultView and the text variable to the feedback variable in ResultView (You will learn about bindings in a couple weeks. Pretty much we are just sending values from view to view)</li>

      <li>Does not bring any element into the UI (EmptyView()) so that we can control this link with a button of our own instead</li>

      </ol>

      <p><a href="https://youtu.be/5ZYtLWatNuc">https://youtu.be/5ZYtLWatNuc</a></p>

      <p>This is what you should be able to do! We have already provided the UI for ResultView.</p>

      <h2 id="task-3-custom-back-button">Task 3: Custom Back Button</h2>

      <p>The NavigationView and Link provide you with a basic default back button that works just fine, but in my opinion, it is much more fun to have a custom back button! So, real quick, I’ll walk you through making your own. </p>

      <ol>

      <li><p>First, we must set up the environment and put the view into presentation mode. You will go more in depth on this when you get to bindings, but essentially what we are doing is making it so a button can programmatically “dismiss” the current view and default to the home view. Uncomment this code at the top of ResultView:</p>

      <pre><code class="lang-swift"> <span class="hljs-meta">@Environment(\.presentationMode)</span> <span class="hljs-keyword">var</span> presentation: Binding&lt;PresentationMode&gt;

      </code></pre>

      </li>

      <li><p>Next, we need to create the actual button to perform the action. Create a button within the HStack provided. The code should be as follows:</p>

      <pre><code class="lang-swift"> <span class="hljs-selector-tag">Button</span>(<span class="hljs-attribute">action</span>: {
                       <span class="hljs-selector-tag">self</span><span class="hljs-selector-class">.presentation</span><span class="hljs-selector-class">.wrappedValue</span><span class="hljs-selector-class">.dismiss</span>()
                     }) {
                     <span class="hljs-selector-tag">Image</span>(<span class="hljs-attribute">systemName</span>: <span class="hljs-string">"arrow.left"</span>)
                         <span class="hljs-selector-class">.foregroundColor</span>(.white)
                     }
                     <span class="hljs-selector-class">.navigationBarHidden</span>(true)
      </code></pre>

      </li>

      </ol>

      <p><strong>This is all you need! Currently, I have here a simple white arrow as the custom back button but I invite you to customize this yourself and mess around with other looks. And with that, we have completed the UI Navigation part of this project! Good job :))</strong></p>

      <p><a href="https://youtu.be/KfXUtbptD0k">https://youtu.be/KfXUtbptD0k</a></p>


  - type: phs
    partheader: "Part 4: Calculation Functionality"
  - type: ps
    paragraph: >+
      <p>Now that we have a UI, it’s time to work on making this app actually
      function. Our goal here is to be able to accept inputs of class size and
      waitlist place, and then spit out the percentage chance the user will get
      into their class</p>

      <h2 id="task-1-calculateprobability">Task 1: calculateProbability</h2>

      <p>Head on over to the calculateProbability function and fill in with the following:</p>

      <p>For our calculation, we are using the following very simple (and almost certainly inaccurate) function to calculate the probability of getting off the waitlist as a function of the current waitlist position and the total size of the course. The following equation describes how we will be calculating probability. p is the waitlist position, s is the size of the class, and P is the probability that the user gets off the waitlist.</p>

  - type: ibs
    imageblock: /assets/images/screen-shot-2022-02-22-at-9.47.10-pm.png
  - type: ps
    paragraph: >-
      <p><strong>HINT: Use the given variables in ContentView to figure out what
      variables you might want to use in your equation</strong></p>

      <pre><code class="lang-swift">func calculateProbability(waitlistPlace: Int, classSize: Int) {
              <span class="hljs-built_in">let</span> <span class="hljs-built_in">tenth</span> = classSize / <span class="hljs-number">10</span>
              <span class="hljs-keyword">if</span>  (waitlistPlace &lt;= <span class="hljs-built_in">tenth</span>) {
                  probability = <span class="hljs-number">100</span>
              } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (waitlistPlace &gt; <span class="hljs-built_in">tenth</span> * <span class="hljs-number">2</span>) {
                  probability = <span class="hljs-number">0</span>
              } <span class="hljs-keyword">else</span> {
                  probability = <span class="hljs-number">100</span> - Int(((Float(waitlistPlace - <span class="hljs-built_in">tenth</span>) / Float(<span class="hljs-built_in">tenth</span>))*<span class="hljs-number">100</span>))
              }

          }
      </code></pre>

      <p>Once you have done this, you are going to want to call calculateProbability when the calculate button is pressed. Think about where and how you would do this...</p>

      <p><strong>CONGRATS! Your app is fully functioning now and should look a little something like this:</strong></p>

      <p><a href="https://youtu.be/P26z-SStNbA">https://youtu.be/P26z-SStNbA</a></p>

      <p>NOTE: Try plugging in the same numbers and make sure you get the same results before continuing on!</p>
  - type: phs
    partheader: "Part 5: TabView"
  - type: ps
    paragraph: >
      <p>Last part! For the sake of learning and fun, we are also going to
      implement a TabView in Waitlist Helper. </p>

      <h2 id="task-1-tabview">Task 1: TabView</h2>

      <ol>

      <li>First, let’s create the actual TabView. You are going to want to wrap the original ZStack in the TabView but keep the TabView within the NavigationView. This is to not mess up the formatting of our UI elements.</li>

      <li><p>After creating the TabView, not much will have changed because we have yet to declare Tab Items. To do this, uncomment the following:</p>

      <pre><code class="lang-swift"> <span class="hljs-selector-class">.tabItem</span>{
                 <span class="hljs-selector-tag">Image</span>(<span class="hljs-attribute">systemName</span>: <span class="hljs-string">"house.fill"</span>)
                 <span class="hljs-selector-tag">Text</span>(<span class="hljs-string">"Home"</span>)
             }
      </code></pre>

      <p> This creates a tab item within the Tab Bar. It’ll look like this:</p>

      </li>

      </ol>
  - type: ibs
    imageblock: /assets/images/untitled-7.png
  - type: ps
    paragraph: >
      <h2 id="task-2-diy-view">Task 2: DIY View</h2>

      <p>Your final task is to create your own view and TabItem! Come up with something different and fun that you think would add something to this app. Give it it’s own tab bar item as well.</p>

      <p><strong>You will do this within the content view after the “tab item” code you just put in. This spot is marked in the file. To give you some inspiration, I have provided the code I wrote for my DIY View below as well as a video showing how the Tab Bar should work! Good Luck. Happy Coding!</strong></p>


      <p><a href="https://youtu.be/o3ad4VbJdRU">https://youtu.be/o3ad4VbJdRU</a></p>
  - type: cbs
    codeblock:
      code: |-
        //DIY VIEW GOES HERE//
        ZStack {
            Image("calculate_background")
                .resizable()
                .aspectRatio(contentMode: .fill)
                .ignoresSafeArea()
            VStack {
                HStack {
                    Text("MY \nCLASSES")
                        .font(.system(size: 40, weight: .bold))
                        .foregroundColor(Color.black)
                        .padding()
                    Spacer()
                } .padding()

                Spacer()
                }

        }
            .tabItem {
                Image(systemName: "person.crop.circle")
                Text("Profile")
            }
---
