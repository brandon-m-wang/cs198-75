---
title: hw2
header: "Project 2: Bullseye w/ Storyboard"
due: Fri, 2/18
introduction: >-
  **Today we will be implementing the logic of Bullseye!** This homework builds
  off of the knowledge from the lecture, but we will recap the basic concepts so
  don't worry if you forgot anything. For this homework we have implemented the
  UI for you using storyboards so you can focus solely on practicing swift.


  The core concept of it is that given a random number, you will try to move the slider to match the number, and the application will tell you if you're right or even close!


  Here is an example of the finished product:


  <iframe width="560" height="315" src="https://www.youtube.com/embed/tRJGpoUISn0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
setup: >-
  Throughout this course you will be pulling skeleton code from our github
  repos. To pull the skeleton code for bullseye, type this command below into
  your terminal on the directory you want the folder in.




  To open the project, open Xcode → Open a Project or File → Navigate to Bullseye
skeleton: https://github.com/tonyhong007/bullseye_with_storyboard-skeleton
sections:
  - type: ps
    paragraph: <h2 id="Creating-a-project">Creating a Project</h2>
  - type: ps
    paragraph: >-
      If you ever want to set up your own project first Open Xcode → Create a
      new Xcode project → App


      Here are the new project options:
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-01-10-at-12.49.54-pm.png
  - type: ps
    paragraph: This might change depending on the project you are working on but
      generally these options will do when working with SwiftUI. Feel free to
      place the project wherever you like; then click create!
  - type: phs
    partheader: "Part 1: Getting Started 📱"
  - type: ps
    paragraph: <h2 id="what-are-storyboards">What are Storyboards?</h2>
  - type: ps
    paragraph: A storyboard is a visual representation of the UI of an app. As a
      developer you are able to manually place different elements of the app
      using “drag and drop” to build the UI.
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-01-13-at-8.38.38-pm.png
  - type: ps
    paragraph: In this course we will not be directly working with storyboards and
      will be working with SwiftUI instead. If you ever want to use storyboards
      you can change the “interface” setting to “storyboard” when creating a new
      project.
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-01-13-at-8.43.23-pm.png
  - type: ps
    paragraph: <h2 id="why-swiftui">Why SwiftUI?</h2>
  - type: ps
    paragraph: Although storyboards are intuitive when creating simple applications,
      storyboards become difficult to use when creating modern applications and
      it is in most cases more intuitive to use SwiftUI. SwiftUI is also
      becoming more and more popular in industry while storyboards are slowly
      becoming outdated.
  - type: ps
    paragraph: <h2 id="what-are-IBActions-and-IBOutlets">What are IBActions and
      IBOutlets?</h2>
  - type: ps
    paragraph: >-
      IBActions and IBOutlets result from connecting elements from a storyboard
      to actual code. For example, IBActions for buttons can be modified to
      perform a certain action when the button is tapped and IBOutlets for
      labels (text) can be modified to change how a piece of text appears on the
      screen. All IBActions and IBOutlets will be initialized for you. We would
      never use this with SwiftUI, but it is useful to know!


      This is how the IBActions and IBOutlets for this homework were initialized using Ctrl + click + drag
  - type: ps
    paragraph: <iframe width="560" height="315"
      src="https://www.youtube.com/embed/Oz3aS82ZJcs" title="YouTube video
      player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  - type: ps
    paragraph: |-
      <h2 id="Implementing-the-UI">\[OPTIONAL] Implementing the UI</h2>

      <h3 id="adding-the-elements">Adding the Elements</h3>
  - type: ps
    paragraph: >-
      You may read through this section if you are interested in seeing how the
      UI was implemented, but this section is purely optional!


      First, navigate to “Main”. Then add a label, a button, and a slider!


      You can either press the + button at the top right or use the shortcut Cmd+Shift+L to search for the elements.
  - type: ps
    paragraph: <iframe width="560" height="315"
      src="https://www.youtube.com/embed/EmD0qn_9AQs" title="YouTube video
      player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  - type: ps
    paragraph: <h3 id="connecting-to-the-view-controller">Connecting to the View
      Controller</h3>
  - type: ps
    paragraph: >-
      To connect the elements to your controller, Ctrl click from elements in
      “Main” to your View controller text file. I added the following:


      Label as an Outlet: numLabel


      Button as an Action: checkValue


      Slider as an Outlet: numSlider


      Slider as an Action: sliderValueChanged
  - type: ps
    paragraph: <iframe width="560" height="315"
      src="https://www.youtube.com/embed/Oz3aS82ZJcs" title="YouTube video
      player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  - type: ps
    paragraph: If you mess up, don't fret! You can click the element, and under the
      connections inspector, you are able to delete and redo any messed up
      connections!
  - type: ps
    paragraph: <h3 id="the-slider">The Slider</h3>
  - type: ps
    paragraph: Let's try out the slider! If you run the build after inputting the
      code below (Cmd R).
  - type: cbs
    codeblock:
      code: |-
        @IBAction func sliderValueChanged(_ sender: Any) {
                print(numSlider.value)
            }
  - type: ps
    paragraph: >-
      You will see the values between 0 and 1 printed in your terminal...that's
      not what we want.


      Click on the slider element and you can change the range of values:
  - type: ibs
    imageblock: /assets/images/screen_shot_2020-08-17_at_4.56.36_pm.png
  - type: ps
    paragraph: >-
      Value represents where the slider circle begins, and min and max represent
      the smallest and largest values possible for the slider.


      If we run again, we see the values are between 1 and 100 but are decimals! How do we fix this?
  - type: ps
    paragraph: |-
      

      **Fix + String Interpolation**
  - type: ps
    paragraph: <iframe width="560" height="315"
      src="https://www.youtube.com/embed/3RH8gd-Vr3k" title="YouTube video
      player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  - type: ps
    paragraph: >-
      <p>Try running again and...Yay! now our slider should be working</p>


      <iframe width="560" height="315" src="https://www.youtube.com/embed/EU0ULu5kYx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  - type: ps
    paragraph: |-
      

      <h3 id="adding-the-switch">Adding the Switch</h3>
  - type: ps
    paragraph: >-
      With only these components it is very hard to get a bullseye.


      That is why we will add an exact switch! If the exact game mode is off, then we will have a range that is ±x where x is an integer so it will be a little easier to get a bullseye!
  - type: ps
    paragraph: |-
      

      First, let's add a switch:
  - type: ibs
    imageblock: /assets/images/screen_shot_2020-08-17_at_5.43.16_pm.png
  - type: ps
    paragraph: I placed the switch at the bottom of the screen along with a label
      above it just to let users know what it does.
  - type: ibs
    imageblock: /assets/images/screen_shot_2020-08-17_at_5.46.20_pm.png
  - type: ps
    paragraph: …and turn it off for now
  - type: ibs
    imageblock: /assets/images/screen_shot_2020-08-17_at_5.47.31_pm.png
  - type: ps
    paragraph: Then create an IB outlet called exactSwitch for it. We set it as an
      outlet and not an action, because the "Check?" button will check the
      property of the switch to see if it is on or off.
  - type: ps
    paragraph: |-
      

      <h3 id="other-labels">Other Labels</h3>
  - type: ps
    paragraph: The “High Score”, “Current Level”, and “Result Label” labels were
      added and connected to the code using the same method as shown above. The
      UI of the code when run should initially look like this except “Result
      Label” will be invisible on your screen and you will see why soon!
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-01-18-at-6.47.08-pm.png
  - type: ps
    paragraph: That concludes the UI for this homework!
  - type: phs
    partheader: "Part 2: Adding the Logic 🔢"
  - type: ps
    paragraph: "First, navigate to “Main” to view the storyboard. All of the UI
      should be completed and should appear as shown except for “Result Label”:"
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-01-21-at-2.24.17-am.png
  - type: ps
    paragraph: >-
      Note that “Result Label” will be invisible (empty text) on your screen.
      This was purposely done and you will see why soon!




      Remember, the core concept of Bullseye is that given a random number, you're supposed to move the slider to try to match the number, and the application will tell you if you're right!




      **NOTE:**


      Please run the code on the iPhone 12 Pro ONLY. This is because of spacing issues which we will learn how to cover in future homeworks / lectures.
  - type: ps
    paragraph: |-
      

      <h2 id="exercise-2A-random-number">Exercise 2A: Random Number</h2>
  - type: ps
    paragraph: >-
      

      At the top under your IB outlets, go ahead and add a random number variable; this will be the value we try to match on the slider.
  - type: cbs
    codeblock:
      code: |-
        //at the very top after UIKit
        import Foundation

        var randomNumber = 0

        override func viewDidLoad() {
                super.viewDidLoad()
                randomNumber = Int(arc4random_uniform(101))
        				numLabel.text = String(randomNumber)
        }
  - type: ps
    paragraph: >-
      Imported from Foundation, arc4random gives us a decimal number *under*
      101, and wrapping it in Int converts it to an integer by rounding down to
      the nearest whole number, similar to the rounding we did to the slider
      number. We then set the random number in our viewDidLoad function.


      *Notice how we used string interpolation to evaluate randomNumber within the text!*




      Why is var randomNumber = 0 outside the function block rather than inside it?


      This has to do with a concept called scoping. By declaring the variable outside viewDidLoad(), other functions are able to access and modify randomNumber as well. If randomNumber were declared inside of viewDidLoad(), the variable would not be accessible inside other functions.




      Your application should now look like this:
  - type: ps
    paragraph: <iframe width="560" height="315"
      src="https://www.youtube.com/embed/yUbkrc3XIpU" title="YouTube video
      player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  - type: ps
    paragraph: We do not need the view to update when moving the slider, so go ahead
      and remove the code from sliderValueChanged.
  - type: ps
    paragraph: '<h2 id="exercise-2B-the-check-button">Exercise 2B: The Check Button</h2>'
  - type: ps
    paragraph: >-
      This is when we will begin to use the IB action function, checkValue.


      Our goal is to check if the randomNumber we generated is equal to the number of the slider, and if the number matches, we will have a label that says "Bullseye!"


      *I will begin to write in pseudocode, because you have all the knowledge you need to write this :) Practice makes progress!*
  - type: cbs
    codeblock:
      code: |-
        @IBAction func checkValue(_ sender: Any) {
        				write your if statement here {
        						...
                }
            }
  - type: ps
    paragraph: |-
      *Hint: make sure to round your numSlider value to an integer!*

      *Hint2: to compare two values you can use ==*
  - type: cbs
    codeblock:
      code: |-
        @IBAction func checkValue(_ sender: Any) {
                your if statement here {
                    set the text of your resultLabel to "Bullseye!"
                } else {
                    set the resultLabel text to indicate the user missed
                }
            }
  - type: ps
    paragraph: Run, and your app should now look like this. Don't worry if the
      spacing is a little off! This could be fixed with something called
      “constraints”, but since we will be using SwiftUI from now on we won’t be
      dealing with it here.
---
