---
title: hw5
header: "Project 5: Dijkstra's Algorithm Visualizer"
due: Fri, 3/11
introduction: For this project, you'll be building a visualization of the
  runtime of Dijkstra's algorithm on a user-generated maze. Dijkstra's algorithm
  is a pathfinding algorithm that finds the shortest path in a network of nodes
  and weighted edges between these nodes. For this project, you'll be building
  the example on an unweighted graph (a 2D grid), so it functions similarly to a
  BFS traversal, but the underlying JavaScript implementation of Dijkstra's is
  given to you for you to expand further and incorporate edge weights into the
  project if you wish. You do not need to understand how Dijkstra's works, as
  this project is an exercise on React states, props, and functional components.
setup: Package/library dependencies in a React project are generally managed by
  the Node Package Manager (npm). When you use an external library in a project
  (e.g. require, import), you will need to have that library locally in order
  for your project to run properly. The code and assets for all these libraries
  are stored in a folder called <mark><code>node_modules</code></mark>. This
  folder can get extremely large and convoluted, so there is no good reason to
  look inside it as it simply holds all the data for your libraries and
  packages. This folder is to be ignored by git as well, as the data in
  node_modules is large and contains tens of thousands of files, and could
  potentially be OS dependent or dependent on your machine architecture. You may
  notice that you don't actually have a <mark><code>node_modules</code> folder
  in the project files after pulling from the skeleton repo. This is because
  <mark><code>node_modules</code> is ignored by git, as mentioned. Once you
  install the necessary dependencies associated with this project, the
  <mark><code>node_modules</code> folder will be created within your local
  project as well. There are some dependencies you will need to install, but it
  will be covered in the first part of the homework.
skeleton: https://github.com/brandon-m-wang/cubstart-hw5-skeleton.git
sections:
  - type: phs
    partheader: "Part 1: Installing Dependencies"
  - type: ps
    paragraph: "The dependencies are already laid out in the
      <mark><code>package.json</code></mark> file. They are all React.js
      dependencies. As a general rule of thumb, to install all the dependencies
      on your local machine so that you can run the project locally, you can
      simply navigate to the project root directory in the terminal (or within
      VSCode visit Terminal > New Terminal) and run:"
  - type: cbs
    codeblock:
      code: npm install
      lang: cpp
  - type: phs
    partheader: "Part 2: Serving Your App Locally"
  - type: ps
    paragraph: 'With React, you no longer need to rely on an external VSCode
      extension to run your app and show changes in real-time. If you navigate
      to your <mark><code>package.json</code></mark> file, notice that under
      "scripts" there is a "start" script which essentially runs the command to
      serve your application (usually on port 3000). If you were to start from
      scratch, you can use <mark><code>npx create-react-app</code></mark> (npx
      == node package execute) to set up the scripts for running, building, and
      testing automatically. To start your web application, run the following in
      your terminal:'
  - type: cbs
    codeblock:
      code: a
  - type: phs
    partheader: "Part 2: Node Component"
  - type: ps
    paragraph: a
---
