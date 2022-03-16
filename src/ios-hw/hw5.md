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


      Create a class for each entry in the shopping list called "Items". The class should have 3 attributes: imageName (String), itemName (String), and quantity (String) and an init() function to initialize all 3 attributes, You can create the class above the content view struct and they must be separate from one another.


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
    paragraph: "Note: please don't make changes to the image name String or else you
      won't be able to retrieve the right image from the \"Assets\" folder."
  - type: ps
    paragraph: Your code should now look something like this excluding the Items class.
  - type: ibs
    imageblock: /assets/images/carbon-3-.png
  - type: ps
    paragraph: We can now start placing each item of the array into List{}. Our goal
      is to iterate through each item of the array with something similar to a
      ForEach() statement. In this case we can take advantage of our List{}
      element to iterate through each item of the array.
  - type: ibs
    imageblock: /assets/images/carbon-4-.png
  - type: ps
    paragraph: >-
      This block of code essentially tells swiftUI to iterate through each item
      in "list" and set each item at hand to "i". We can then use "i" to
      reference each item when displaying them individually.


      The question now is what UI elements will we use for each item?
  - type: ps
    paragraph: >-
      Note:


      You might see this error: "Initializer 'init(_:rowContent:)' requires that 'Items' conform to 'Identifiable'"


      This means that we need to call "Identifiable" in the Items class in order for SwiftUI to uniquely identify every item when referencing it inside the list.
  - type: ibs
    imageblock: /assets/images/carbon-5-.png
  - type: ps
    paragraph: >-
      Notice how each entry of the shopping list would be structured very
      similarly. The only difference between each entry are the texts and images
      of each item. 


      This means that we can use a custom cell that we can repeatedly call on each item in the array. This would ultimately allow us to efficiently add more entries to the shopping list when needed and we don't have to hard code anything!
  - type: ps
    paragraph: For now you can call Custom Cell with the arguments "imageName",
      "itemName", and "quantity"
  - type: ibs
    imageblock: /assets/images/carbon-6-.png
  - type: ps
    paragraph: >-
      This new line of code tells SwiftUI that we want to display whatever UI
      elements are returned from the CustomCell struct on the arguments
      provided.


      Note that we are passing in the arguments using dot notation. The code might also be erroring but this is fine because we haven't finished building the CustomCell struct!
  - type: phs
    partheader: "Part 2: Creating the CustomCell Struct"
  - type: ps
    paragraph: >-
      In order to not clump up our different structs and classes too much, we
      should build our CustomCell struct in our CustomCell file.


      The code in the CustomCell file should initially look like this:
  - type: ibs
    imageblock: /assets/images/carbon-7-.png
  - type: ps
    paragraph: Before we start adding code to the CustomCell file, let's quickly
      review what custom cells are. Custom cells aren't necessarily built into
      the swiftUI framework but are instead built by the user. They are super
      useful when you are building an application where you are displaying
      multiple elements that might be structured exactly the same but just with
      different contents. Just like any struct in swift, you can call a custom
      cell struct in a different struct (content view). In this case we are
      calling the CustomCell struct inside the ContentView struct so the custom
      cells can ultimately be displayed on the screen.
  - type: ps
    paragraph: >-
      Now that we know what custom cells really are we can get started with
      coding up the CustomCell struct!


      Notice that when calling CustomCell we passed in 3 arguments. We need to make sure that these 3 arguments can be initialized inside CustomCell. We can do this by simply declaring the three variables above the body.
  - type: ibs
    imageblock: /assets/images/carbon-8-.png
  - type: ps
    paragraph: This will allow us to now use imageName, itemName, and quantity
      inside CustomCell!
  - type: ps
    paragraph: "We can now add UI elements to the body of CustomCell to create
      something like this:"
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-03-12-at-4.00.16-am.png
  - type: ps
    paragraph: If you run the code as is you should just see "Hello World" in each
      cell. How can we change CustomCell to match the image above? I'll leave
      this exercise to you!
  - type: ps
    paragraph: >-
      Now that we have the structure down we can mess around a little bit. Let's
      try adding a title to this list. To do this we can wrap the List{} element
      inside a NavigationView{}. We can then use the property
      ".navigationTitle("Shopping List") on the List{} to display a title


      Your code should now look like this:
  - type: ibs
    imageblock: /assets/images/carbon-9-.png
  - type: ps
    paragraph: "Your app should now look like this:"
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-03-12-at-4.11.49-am.png
  - type: ps
    paragraph: Note that we're not really doing anything with the NavigationView
      besides using the property, but it might be useful if we were to expand
      the app later on!
  - type: phs
    partheader: "Part 3: Expanding the Shopping List"
  - type: ps
    paragraph: >-
      Our shopping list looks a little plain. Let's expand it to make the
      shopping trip more worth it! Your last task is to add at least 4 more
      items to the shopping list.


      BUT!! There's a twist because suddenly you feel the urge to want the app to split your shopping list into different categories (fruits, vegetables, etc.)
  - type: ps
    paragraph: 'Add at least 4 more items to the shopping list and sort all items
      into at least 3 sections by wrapping elements within a List{} with
      Section(header: Text("category name")){}.'
  - type: ps
    paragraph: "Here is an example:"
  - type: ibs
    imageblock: /assets/images/carbon-10-.png
  - type: ps
    paragraph: Note that this code looks a little different from the code used
      previously in that I'm now using a ForEach statement inside the list. I
      would recommend creating an array for each individual section and
      iterating through each section's array separately.
  - type: ps
    paragraph: "The code above looks like this:"
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-03-12-at-4.38.57-am.png
  - type: ps
    paragraph: That's it for homework 5!! Great job for finishing :DD
---
