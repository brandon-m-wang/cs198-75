---
title: hw6
header: "Project 6: Shopping List Part 2"
due: Fri, 4/1
introduction: Today we will be building on shopping list part 1! This homework
  builds off of the knowledge from the lecture, but we will recap the basic
  concepts so don't worry if you forgot anything. In the previous project we
  built a static shopping list app where the user wasn't able to add or delete
  items. In this project, we'll be implementing functionality for users to add
  or delete items in order to build a fully usable app!
setup: To pull the skeleton code for shopping list, type this command below into
  your terminal on the directory you want the folder in. To open the project,
  open Xcode → Open a Project or File → Navigate to Shopping List
skeleton: https://github.com/tonyhong007/shopping_list_part2
sections:
  - type: phs
    partheader: "Part 1: Setting up the Content View"
  - type: ps
    paragraph: "<h2>Exercise 1A: Understanding the Skeleton Code</h2>"
  - type: ps
    paragraph: The skeleton code is based off of part 1, but there are a few
      noticeable changes.
  - type: ibs
    imageblock: /assets/images/carbon-11-.png
  - type: ps
    paragraph: We will still be using the Items class but we will no longer be using
      an item name because to have a user input an image is out of scope for
      this project. Both the Content View and Custom Cell files have been
      changed to accommodate for this. Also note that the quantity attribute has
      been redeclared as a String to make the code cleaner and easier to
      implement.
  - type: ps
    paragraph: Let's run our skeleton code on some mock data to see what our app
      initially looks like!
  - type: ibs
    imageblock: /assets/images/carbon-12-.png
  - type: ps
    paragraph: 'We can write up a quick ForEach statement to initialize custom cells
      with the data provided in "list". Your app should look like this:'
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-03-28-at-12.57.52-am.png
  - type: ps
    paragraph: Notice how the name and quantity of each item is separated by empty
      space. Make sure to check out the CustomCell file to understand why this
      is happening!
  - type: ps
    paragraph: "<h2>Exercise 1B: Implementing the UI</h2>"
  - type: ps
    paragraph: Our goal in this section is to build the UI for the user to input a
      new item. We will figure out how to start adding multiple items to the
      shopping list later.
  - type: ps
    paragraph: We want the user to be able to input the name of the item and also
      the amount they need to buy. We can use textfields to record user input.
  - type: ibs
    imageblock: /assets/images/carbon-13-.png
  - type: ps
    paragraph: "To get the data we want we can use two text fields to retrieve the
      item name and the quantity. I wrapped the two text fields in a HStack and
      used Spacer() to separate the two text fields within the HStack. Note that
      a text field element takes in two arguments: the default text that appears
      in the textfield before a user types in it and the variable where the
      user's input will be stored. In this case, we want to display \"Item
      Name\" and \"Quantity\" within the text fields before the user types into
      them so the user can distinguish the two. The input from each text field
      will be stored in tempItemName and tempQuantity respectively. There is a
      \"$\" following each variable to declare that this is a binding variable.
      A binding variable is essentially a variable that is shared across views.
      In this case a text field is one view while our content view is another
      and \"tempItemName\" is being shared across these two views. If a binding
      variable is changed within one view, the change will then be reflected in
      the other view. Let's declare the tempItemName and tempQuantity variables
      so we can use it within the content view."
  - type: ibs
    imageblock: /assets/images/carbon-14-.png
  - type: ps
    paragraph: Note that we included the @State wrapper because we want the app to
      update its state while the user is typing in the textfield.
  - type: ps
    paragraph: "Your app should now look like this:"
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-03-28-at-1.24.30-am.png
  - type: ps
    paragraph: You can click on the text fields to type in whatever you want. Now
      the problem is that the user has no way of indicating that they have
      finished typing and wants to add the item to the shopping list. To solve
      this problem we can use a button for the user to press to indicate that
      they want to officially add the item into the shopping list.
  - type: ibs
    imageblock: /assets/images/carbon-15-.png
  - type: ps
    paragraph: We can add this button right below our text fields. Now all we have
      to do is trigger something to change the state of the app when the button
      is pressed!
  - type: ps
    paragraph: "Your app should look like this:"
  - type: ibs
    imageblock: /assets/images/screen-shot-2022-03-28-at-1.30.49-am.png
  - type: phs
    partheader: "Part 2: Updating the Shopping List"
  - type: ps
    paragraph: "<h2>Exercise 2A: Implementing the Helper Function</h2>"
  - type: ps
    paragraph: 'The main idea of this section is to trigger a function that adds the
      new data into "list" when the user presses the "Add Item" button. We want
      to update the state of the app after we add a new item so we can start by
      wrapping the list variable with a @State wrapper:'
  - type: ibs
    imageblock: /assets/images/carbon-16-.png
  - type: ps
    paragraph: If you look at what our code is currently doing at a high level, we
      can see that every time we add a new element to the list we rerun the body
      where the ForEach statement is displaying every element in the list
      including any new elements we just added. We can create a helper function
      to append any new data to the list when the "Add Item" button is pressed.
  - type: ibs
    imageblock: /assets/images/carbon-17-.png
  - type: ps
    paragraph: Note that we also want to clear the tempItemName and tempQuantity
      variables to empty strings so the user isn't able to spam the button on
      one piece of data.
  - type: ibs
    imageblock: /assets/images/carbon-18-.png
  - type: ps
    paragraph: Try running your app and adding multiple items to the shopping list
      to verify that the implementation works!
  - type: ps
    paragraph: "<h2>Exercise 2B: Implementing an Edge Case</h2>"
  - type: ps
    paragraph: You might've noticed that when a user clicks the button without
      writing anything into the text fields the app starts to generate blank
      cells. Try adding an if statement in the button element that will prevent
      the user from generating blank cells if either textfield is empty.
  - type: ps
    paragraph: "Hint: Both tempItemName and tempQuantity are initialized to \"\"
      when the user hasn't typed in anything."
  - type: phs
    partheader: "Part 3: Deleting Entries from the Shopping List"
  - type: ps
    paragraph: Your last task is to allow the user to delete the most recent entry
      in the shopping list. For example, if a user adds apples to the shopping
      list it should reflect this change on the app. If the user immediately
      presses the delete button, it will remove apples from the list and this
      change should be reflected on the app.  If the user presses delete again,
      it will remove the entry that was added right before apples.
  - type: ps
    paragraph: 'Hint 1: Add another button below the "Add New Item" button that
      calls a helper function. The helper function should remove the last
      element inside "list" using removeLast().'
---
