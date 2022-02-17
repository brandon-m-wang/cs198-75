---
title: hw3
header: "Project 3: Bullseye w/ SwiftUI"
due: Fri, 2/25
introduction: >-
  Today we will be implementing the UI of Bullseye using SwiftUI and some of its
  functionality! This homework builds off of the knowledge from the lecture, but
  we will recap the basic concepts so don't worry if you forgot anything.


  Remember that the core concept of it is that given a random number, you will try to move the slider to match the number, and the application will tell you if you're right or even close!


  Here is an example of the finished product:


  ![](/assets/images/screen-shot-2022-02-17-at-2.34.00-am.png)
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
---
