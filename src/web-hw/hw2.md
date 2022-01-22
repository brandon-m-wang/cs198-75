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
---
