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
---
