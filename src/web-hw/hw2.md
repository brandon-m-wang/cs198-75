---
title: hw2
header: "Project 2: JavaScript Playground"
due: Fri, 2/18
introduction: This week's homework is intended to set you up for the more
  complex JavaScript-heavy projects to come in future weeks. Here, we'll go
  through the foundations and allow you to work with manipulating the DOM.
setup: For this project, there won't be any use of external libraries, so the
  skeleton simply includes the basic web file structure that we covered in
  lecture (HTML, CSS, JavaScript).
skeleton: https://github.com/brandon-m-wang/cubstart-hw2-skeleton.git
sections:
  - type: phs
    partheader: "Part 1: Creating a Counter"
  - type: ps
    paragraph: "In this part, you'll be creating a simple counter application with
      three main features: a button to +1, a button to -1, and the number
      displayed depending on the button presses."
  - type: ps
    paragraph: First things first, you'll need to define the relevant elements in
      the DOM with HTML. Use an <mark><code>h1</code></mark> tag to hold the
      displayed counter number and give it the nice semantic id attribute of
      "count-display." Then, you'll need two buttons, one for adding and one for
      subtracting. Use the HTML <mark><code>button</code></mark> element for
      these buttons and give them the class of "button" and respective ids of
      "subtract" and "add." A button tag can hold text within its enclosing
      tags.
  - type: cbs
    codeblock:
      code: |-
        <h1 id="count-display">0</h1>
        <button class="button" id="subtract">-</button>
        <button class="button" id="add">+</button>
      lang: html
  - type: ps
    paragraph: That's all the HTML you'll need for a counter. The logic is all
      handled in JavaScript. The styles for the button are within the styles
      folder, feel free to change the look of your application however you'd
      like. Navigate to "./scripts/playground.js" and open the file.
  - type: phs
    partheader: "Part 2: Targeting DOM Elements"
  - type: ps
    paragraph: 'This is the JavaScript file that is linked to your playground HTML
      file. As such, you are able to target DOM elements within
      "playground.html" here. Recall that the syntax for targeting DOM elements
      in JS is <mark><code>document.getElementById()</code></mark>. Because you
      assigned ids to all the relevant elements in your counter, you can do so
      and assign them to a variable that you can manipulate:'
  - type: cbs
    codeblock:
      code: |-
        const countDisplay = document.getElementById("count-display");
        const subtractButton = document.getElementById("subtract");
        const addButton = document.getElementById("add");
      lang: javascript
  - type: phs
    partheader: "Part 3: Event Listeners"
  - type: ps
    paragraph: If you want something to happen when an element is clicked, in this
      case your buttons, you want to use what's known as an event listener. An
      event listener generally accepts 2 parameters, the first being the type of
      event (e.g. "click"), and the second being the function that executes when
      the event occurs on the associated element. In JavaScript, another way to
      define anonymous functions is to use ES6 arrow syntax. <mark><code>() =>
      {// function body here}</code></mark> where the parentheses are for
      parameters and the braces indicate the function's body. Within this
      function, you want to increment your count variable (pre-defined and
      assigned to 0) and then update the contents of your counter display to be
      the new count value!
  - type: cbs
    codeblock:
      code: |-
        addButton.addEventListener("click", () => {
          count += 1;
          countDisplay.innerHTML = count;
        });
      lang: javascript
  - type: ps
    paragraph: Now implement this for the subtract button on your own! Try playing
      around with your counter and you should see that it's now fully functional
      :)
  - type: phs
    partheader: "Part 4: Building a Todo List"
  - type: ps
    paragraph: Now, you'll build a simple todo list. At first glance, you'll need to
      make some kind of input field to hold text values of tasks to add to the
      list, and some kind of empty list that holds the tasks, along with buttons
      that allow you to actually submit tasks and clear the list. You should use
      an HTML <mark><code>input</code></mark> element of type "text" to create a
      space where a user can input text (i.e. the todo task). You can also use a
      <mark><code>ul</code></mark> element which is an unordered list that can
      hold <mark><code>li</code></mark> elements which are list item elements
      that can contain text. Try to implement all the necessary DOM elements as
      you see fit, but you can also use the code provided to you below. The div
      with id "input-handlers" is simply for stylistic choice, where the buttons
      can be displayed together.
  - type: cbs
    codeblock:
      code: |-
        <input type="text" id="task-name" />
        <div id="input-handlers">
          <button class="button" id="submit">Submit</button>
          <button class="button" id="clear">Clear</button>
        </div>
        <ul id="tasks"></ul>
      lang: html
  - type: phs
    partheader: "Part 5: More DOM Targeting"
  - type: ps
    paragraph: Go back to the "playground.js" file. Again, declare and initialize
      your JavaScript variables to manipulate the respective elements on the
      DOM.
  - type: cbs
    codeblock:
      code: |-
        const taskName = document.getElementById("task-name");
        const submitButton = document.getElementById("submit");
        const clearButton = document.getElementById("clear");
        const taskList = document.getElementById("tasks");
      lang: javascript
  - type: phs
    partheader: "Part 6: Dynamic Element Creation"
  - type: ps
    paragraph: "This part will be more guided to allow you some explanation and
      experience with some more complex JavaScript methods. Once again, you want
      a list element to be added to the todo list when the submit button is
      clicked. So you need an event listener on the submit button to do just
      that. The logical flow of what to expect when carrying out this action is
      as follows: if there is a valid task name in the text input field, then
      create a <code><mark>li</mark></code> list item element and set its
      innerHTML to be the text in the input field. Then add this element to the
      enclosing <code><mark>ul</mark></code> parent element with
      <mark><code>appendChild()</code></mark>."
  - type: cbs
    codeblock:
      code: |-
        submitButton.addEventListener("click", () => {
          if (taskName.value != "") {
            const task = document.createElement("li");
            task.innerHTML = taskName.value;
            taskList.appendChild(task);
          }
        });
      lang: javascript
  - type: ps
    paragraph: To clear the list, a way to achieve this is by simply replacing all
      the children of your taskList with nothing. Then reset your input text to
      be an empty string to reset the input text as well (so the user doesn't
      have to manually delete it).
  - type: cbs
    codeblock:
      code: |-
        clearButton.addEventListener("click", () => {
          taskList.replaceChildren();
          taskName.value = "";
        });
      lang: javascript
  - type: ps
    paragraph: You'll notice there is another event listener on the taskName element
      which listens on "input." This is an example of another event triggering a
      function's execution. On "input" means every time the input field is
      modified (e.g. typing a new letter). So you'll notice that whenever you
      type the value "Cal Hacks" into your task input field, the count display
      on your previous counter app turns blue!
  - type: cbs
    codeblock:
      code: |
        taskName.addEventListener("input", () => {
          if (taskName.value == "Cal Hacks") {
            countDisplay.style.color = "steelblue";
          }
        });
      lang: javascript
---
