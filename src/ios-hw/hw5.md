---
title: hw5
header: "Project 5: Shopping List Part 1"
due: Fri, 3/18
introduction: Today we will be implementing a static shopping list app! This
  homework builds off of the knowledge from the lecture, but we will recap the
  basic concepts so don't worry if you forgot anything. This project would
  essentially display a list of items that we need to buy and how many of each
  item we should buy. We'll be using lists and custom cells to display what we
  want with some dummy data. For this homework we'll be using dummy data but for
  next week's homework we'll be taking input from the user and displaying it on
  the screen!
setup: To pull the skeleton code for shopping list, type this command below into
  your terminal on the directory you want the folder in. To open the project,
  open Xcode → Open a Project or File → Navigate to Shopping List
skeleton: https://github.com/tonyhong007/shopping_list_part1
sections:
  - type: phs
    partheader: "Part 1: Setting up the Content View"
  - type: ps
    paragraph: <h2>What are Lists?</h2>
  - type: ps
    paragraph: Lists are a UI element in SwiftUI that allows you to display a table
      of data that a user can scroll through. A good example is the settings app
      on your phone! For this app we'll be taking advantage of the list element
      to display the items we need to buy.
  - type: ps
    paragraph: <h2>Creating a List</h2>
  - type: ps
    paragraph: >-
      We can initialize a list element with "List{}". The list will display any
      element that is placed within the brackets.


      Let's display one text element to have your code now look like this:
  - type: ibs
    imageblock: /assets/images/carbon.png
  - type: ps
    paragraph: Run it and see what it looks like!
  - type: ps
    paragraph: "<h2>Exercise 1A: Creating an Object</h2>"
  - type: ps
    paragraph: >-
      A nice implementation would require creating an object for each entry in
      the shopping list. This is ultimately better than hard coding entries into
      a list because we could easily create new entries if we ever needed to and
      we can clearly see what attributes each entry should have.


      But first, what's an object?


      On a high level you can think of an object as something that has its own attributes and functions associated with it. Note that an object can be defined as a class in swift. 


      Take a look at this example:
  - type: ibs
    imageblock: /assets/images/carbon-1-.png
  - type: ps
    paragraph: >-
      In this example we have a fruit class which means that we can create fruit
      objects. Note that in the class there is a name attribute and a color
      attribute. This means that each fruit object will have its own name and
      color attribute associated with it.


      I could create a fruit object with: let fruit = Fruit("apple", "red") which would initially call the init() function the class and return a new object!


      We could access the color attribute of this fruit with dot notation. Dot notation looks like this: fruit.color -> returns "red" and fruit.name -> returns "apple"!
  - type: ps
    paragraph: >-
      Now we can start creating a class for our shopping list entries which I
      will leave as an exercise for you.


      Create a class for each entry in the shopping list called "Items". The class should have 3 attributes: imageName (String), itemName (String), and quantity (String) and an init() function to initialize all 3 attributes


      Hint: The structure of this class is identical to the fruit class shown above!
  - type: ps
    paragraph: "<h2>Exercise 1B: Displaying the Shopping List Entries</h2>"
  - type: ps
    paragraph: >-
      For our shopping list we want to generate each item one by one on top of
      each other. This sounds like a great opportunity to put each item into an
      array and iterate through each item in the array to display it on the
      screen.


      Let's first create this array in the content view and create 3 item objects inside it.
  - type: ibs
    imageblock: /assets/images/carbon-2-.png
  - type: ps
    paragraph: Note that the image name must match because we want to use the image
      name to display the images in our "Assets" folder.
---
