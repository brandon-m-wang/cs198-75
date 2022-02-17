---
title: hw3
header: "Project 3: Bullseye w/ SwiftUI"
due: Fri, 2/25
introduction: Today we will be implementing only the UI of Bullseye using
  SwiftUI! This homework builds off of the knowledge from the lecture, but we
  will recap the basic concepts so don't worry if you forgot anything.
setup: >-
  In homework 1 if you ran the command "git clone
  https://github.com/tonyhong007/bullseye_with_storyboard-skeleton", please run
  the command "git rm 'your cubstart folder name'/hw2/.git" before running the
  command below.


  To pull the skeleton code for bullseye, type this command below into your terminal on the directory you want the folder in.


  To open the project, open Xcode → Open a Project or File → Navigate to Bullseye
skeleton: https://github.com/tonyhong007/bullseye_with_swiftui-skeleton
sections:
  - type: phs
    partheader: "Part 0: Opening the Project 📱"
  - type: ps
    paragraph: <h2>What is SwiftUI?</h2>
  - type: ps
    paragraph: SwiftUI is a recently developed framework that is still rapidly
      developing. It is used for building user interfaces for iOS, tvOS, etc.
      and is overall super easy to use compared to UIKit / Storyboards.
  - type: ps
    paragraph: <h2>Initial Takeaways</h2>
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-01-26-at-11.12.54-pm.png
  - type: ps
    paragraph: >-
      When you first open the project you should see “ContentView” on the left
      side of your screen and the preview on the right side of your screen.
      Let’s quickly break this down!


      For most single screen applications we will mainly be working with the “ContentView” file. When working with SwiftUI we must always import the SwiftUI framework:
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-01-26-at-11.20.45-pm.png
  - type: ps
    paragraph: "For any view we work with in SwiftUI, we must wrap any UI elements
      within “var body: some View {}” and we must wrap everything else + the
      body within “struct ViewName: View {}”:"
  - type: cbs
    codeblock:
      code: |-
        struct ViewName: View {
          
          // variables, functions, etc. here
          
          var body: some View {
            // all UI elements here
          }
        }
      lang: swift
  - type: ps
    paragraph: "Now you might be wondering what in the world is:"
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-01-26-at-11.38.16-pm.png
  - type: ps
    paragraph: >-
      This is basically SwiftUI’s way of allowing us to view the UI as we’re
      typing in code without having to run it on a simulator. Click “Resume” on
      the top right corner to view the current UI.


      Your screen should now look like this:
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-01-26-at-11.54.45-pm.png
  - type: ps
    paragraph: >-
      Now the preview on the right hand side will automatically be updated as we
      add in code! In this course however, we won’t be relying on the preview
      functionality to run our code and will instead continue to run it on the
      simulator. You can use the preview functionality if you want but be
      careful because it can display the wrong UI in some cases so it isn’t as
      reliable as the simulator. Go ahead and delete this piece of code.




      Your screen should now look like this:
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-01-27-at-12.08.13-am.png
  - type: ps
    paragraph: You might also be wondering what the purpose of the
      "SwiftUI_BullseyeApp" file on the left side is. This file is basically an
      entry point for SwiftUI which means it will be the first file that will
      run and displayed in the simulator. In the picture below ContentView() is
      called since we'll mainly be working in that file and we want that file to
      be the first file displayed when running the simulator.
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-02-17-at-12.45.55-am.png
  - type: phs
    partheader: "Part 1: Implementing the UI 🎨"
  - type: ps
    paragraph: <h3>"High Score and Current Level Labels"</h3>
  - type: ps
    paragraph: Let's break down the UI into separate components starting with the
      "High Score" and "Current Level" labels on the top right and left corners.
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-02-17-at-1.01.48-am.png
  - type: ps
    paragraph: >-
      To implement this we'll be using a combination of HStacks and VStacks. An
      HStack is essentially a view that arranges any elements placed inside it
      in a horizontal order and a VStack is a view that arranges any elements
      placed inside it in a vertical order. 




      Take a look at this example:
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-02-17-at-1.11.46-am.png
  - type: ps
    paragraph: 'We have a VStack with two Text elements inside it. This would
      display the two "Hello World" texts stacked on top of each other:'
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-02-17-at-1.12.56-am.png
  - type: ps
    paragraph: "Based on the image of what's expected, we can see that \"High
      Score\" and \"0\" would be in a VStack while \"Current Level\" and \"1\"
      would also be in a VStack. Let's go ahead and add two VStack elements to
      the body:"
  - type: cbs
    codeblock:
      lang: swift
      code: |-
        import SwiftUI

        struct ContentView: View {
            
            var body: some View {
                VStack() {
                    Text("High Score")
                    Text("0")
                }
                
                VStack() {
                    Text("Current Level")
                    Text("1")
                }
            }
        }
  - type: ps
    paragraph: "Your app should now look like this:"
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-02-17-at-1.23.21-am.png
  - type: ps
    paragraph: We now have "High Score" on top of "0" and "Current Level" on top of
      "1" which we want, but we want to have these VStack elements be ordered
      horizontally. We could use a HStack for this. In SwiftUI we're able to
      nest VStacks and HStacks which comes in handy. In this case we could nest
      our VStack elements inside an HStack.
  - type: cbs
    codeblock:
      lang: swift
      code: |-
        import SwiftUI

        struct ContentView: View {
            
            var body: some View {
                HStack() {
                    VStack() {
                        Text("High Score")
                        Text("0")
                    }
                    
                    VStack() {
                        Text("Current Level")
                        Text("1")
                    }
                }
            }
        }
  - type: ps
    paragraph: "Your app should now look like this:"
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-02-17-at-1.32.36-am.png
  - type: ps
    paragraph: >-
      All our elements are now perfectly aligned vertically and horizontally!
      Now we have to work on getting the correct spacing. We can use different
      tools like Spacer(), .padding(), and more but we'll be using Spacer() and
      .padding() for this. 




      Spacer() essentially fills up as much space as possible in the specified direction. 




      Take a look at this example:
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-02-17-at-1.40.01-am.png
  - type: ps
    paragraph: >-
      We added Spacer() in between the two VStack elements. What this would do
      is it would create as much space as possible between the two VStack
      elements horizontally. It occupies as much space as possible horizontally
      because it is within an HStack. If it was within a VStack it would occupy
      space vertically.




      This is what the app should look like with the Spacer():
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-02-17-at-1.43.00-am.png
  - type: ps
    paragraph: >-
      Notice how Spacer() maximized the white space between the two VStack
      elements. This is what we want initially before we use .padding() to move
      the two elements to look slightly better. Now we want to push everything
      all the way to the top and a way to do this would be to maximize space
      between the two VStack elements and the bottom of the screen. However, we
      don't yet have a VStack encasing everything which we need in order to add
      a Spacer() vertically. 




      You could implement it like this:
  - type: cbs
    codeblock:
      lang: swift
      code: |-
        import SwiftUI

        struct ContentView: View {
            
            var body: some View {
                VStack() {
                    HStack() {
                        VStack() {
                            Text("High Score")
                            Text("0")
                        }
                        
                        Spacer()
                        
                        VStack() {
                            Text("Current Level")
                            Text("1")
                        }
                    }
                    
                    Spacer()
                }
            }
        }
  - type: ps
    paragraph: >-
      Notice how we wrapped everything we had before inside another VStack. This
      will be useful when we add more elements below the HStack and for when we
      want to add Spacers.




      Your app should now look like this:
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-02-17-at-1.47.10-am.png
  - type: ps
    paragraph: >-
      We're almost there! Now we just need to move the VStack elements slightly
      inward to make it look nicer. We can do this by using .padding().
      .padding() is used to add space around a single element. We can specify
      which side of the element we want padding on and how many pixels of
      padding we want. 




      For example:
  - type: cbs
    codeblock:
      lang: swift
      code: |-
        import SwiftUI

        struct ContentView: View {
            
            var body: some View {
                VStack() {
                    HStack() {
                        VStack() {
                            Text("High Score")
                            Text("0")
                        }
                        .padding(.leading, 20)
                        
                        Spacer()
                        
                        VStack() {
                            Text("Current Level")
                            Text("1")
                        }
                    }
                    
                    Spacer()
                }
            }
        }
  - type: ps
    paragraph: >-
      Notice how we added ".padding(.leading, 20)" below the first VStack. This
      essentially made 20 pixels of space between the left side of the phone
      screen and the VStack itself. Also note that any property beginning with "
      . " is always added to the bottom of a single element unless it is within
      another property like .padding() and .leading.




      Your app should now look like this:
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-02-17-at-2.01.29-am.png
  - type: ps
    paragraph: >-
      <p>Notice how there is clearly more space between the left side of the
      phone screen and the VStack. Now that you have all this information, try
      to add additional padding() to mimic the app below!</p>

      <p>Hint: you can have multiple .padding() properties under an element for different sides</p>

      <p>Ex: .padding(.leading, 20) and .padding(.top, 20)</p>

      <p>Please add three additional .padding() properties!</p>
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-02-17-at-2.06.06-am.png
  - type: ps
    paragraph: <h3>"Other Components"</h3>
  - type: ps
    paragraph: We've basically covered everything that's needed to complete the rest
      of the UI. I'll leave the rest of the UI to you but I'll cover any
      concepts that I haven't explained and I'll give a lot of hints along the
      way. I strongly believe in learning by doing and learning how to use
      SwiftUI will come from making mistakes and searching through Google!
  - type: ps
    paragraph: Your app should look like this by the time you finish this homework
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-02-17-at-2.34.00-am.png
  - type: ps
    paragraph: >-
      <p>Let&#39;s start by listing what additional components we&#39;ll need.
      </p>

      <ol>

      <li><p>We&#39;ll need a Text element for &quot;Move the slider to:&quot; </p>

      </li>

      <li><p>We&#39;ll need a Text element for &quot;25&quot;</p>

      </li>

      <li><p>We&#39;ll need a Slider element</p>

      </li>

      <li><p>We&#39;ll need a Button element for &quot;Check&quot;</p>

      </li>

      <li><p>We&#39;ll need a Text element for &quot;Exact Mode?&quot;</p>

      </li>

      <li><p>We&#39;ll need a Toggle element</p>

      </li>

      </ol>

      <p>These elements are in order of how they should be coded and all of these elements are within the outermost VStack and below the last Spacer() we used.</p>
  - type: ps
    paragraph: >-
      <p>Before we continue there are a few concepts that we haven&#39;t yet
      covered in this homework.</p>

      <p>The Slider and Toggle elements are elements we&#39;ve never seen before.</p>

      <p>Slider takes in two arguments. The first argument (value) is for the value that the slider is initially on and the second argument (in) is for the range that the slider can be moved across. In this case we want the value to be 50 and the range to be from 0 to 100. </p>

      <p>Toggle also takes in two arguments. The first argument is the text that is displayed before the toggle button and the second argument (isOn) is a boolean that displays whether the toggle button is on or off. </p>

      <p>Hint #1: We can hide the text of a toggle element using a certain property</p>
  - type: ps
    paragraph: Also remember that you'll have to create spacing. As a hint I used
      Spacer() one more time and used two .padding() properties for the Slider
      element.
  - type: ps
    paragraph: 'Hint #2: I changed the font of the first two Text elements to 30 by
      using ".font(.system(size: 30))"'
  - type: ps
    paragraph: >-
      <p>Hint #3: You can initialize these two variables outside of the body to
      use for the Slider and Toggle elements. &quot;Num&quot; would be used for
      the value argument for Slider and &quot;toggle&quot; would be used for the
      isOn argument for Toggle. </p>

      <p>You can check out these links to see how arguments are passed into Slider and Toggle:</p>

      <p><a href="https://www.hackingwithswift.com/quick-start/swiftui/how-to-create-a-toggle-switch">https://www.hackingwithswift.com/quick-start/swiftui/how-to-create-a-toggle-switch</a></p>

      <p><a href="https://www.hackingwithswift.com/quick-start/swiftui/how-to-create-a-slider-and-read-values-from-it">https://www.hackingwithswift.com/quick-start/swiftui/how-to-create-a-slider-and-read-values-from-it</a></p>
  - type: cbs
    codeblock:
      lang: swift
      code: |-
        @State var num: Double = 50
            
        @State var toggle = false
  - type: ps
    paragraph: Notice how these two variables have "@State" attached to it. @State
      is used for variables that often change while an app is running. Let's say
      that we have a name variable initialized to "Tony". If we wanted to change
      this variable to "Jordan" while the app is running, we would need to add
      the @State wrapper to the name variable in order to have it automatically
      be changed and displayed on the app in real time. Without the @State
      wrapper, we would not be able to modify "Tony" at all and it surely
      wouldn't instantly update to "Jordan" on the app. We need to use @State on
      these variables because the value of the slider can change if the user
      interacts with the slider and the toggle button can also toggle on and off
      based on how the user interacts with it. We want these updates to
      instantly show up on the app which is why we use the @State wrapper.
  - type: ps
    paragraph: You should now have all the information you need to complete this
      app. Feel free to come to lab if you have any questions or make a piazza
      post!
---
