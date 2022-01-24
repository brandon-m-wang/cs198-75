---
title: hw5
header: "Project 5: Dijkstra's Algorithm Visualizer"
due: Fri, 3/11
introduction: For this project, you'll be building a visualization of the
  runtime of Dijkstra's algorithm on a user-generated maze. Dijkstra's algorithm
  is a pathfinding algorithm that finds the shortest path in a network of
  vertices and weighted edges between these vertices. For this project, you'll
  be building the example on an unweighted graph (a 2D grid), so it functions
  similarly to a BFS traversal, but the underlying JavaScript implementation of
  Dijkstra's is given to you for you to expand further and incorporate edge
  weights into the project if you wish. You do not need to understand how
  Dijkstra's works, as this project is an exercise on React states, props, and
  functional components. This project is a React.js visualizer based on
  functional components and hooks inspired by Clement Mihailescu's Pathfinding
  Visualizer.
setup: Package/library dependencies in a React project are generally managed by
  the Node Package Manager (npm). When you use an external library in a project
  (e.g. require, import), you will need to have that library locally in order
  for your project to run properly. The code and assets for all these libraries
  are stored in a folder called <mark><code>node_modules</code></mark>. This
  folder can get extremely large and convoluted, so there is no good reason to
  look inside it as it simply holds all the data for your libraries and
  packages. This folder is to be ignored by git as well, as the data inside is
  large, contains tens of thousands of files, and could potentially be OS
  dependent or dependent on your machine architecture. You may notice that you
  don't actually have a <mark><code>node_modules</code></mark> folder in the
  project files after pulling from the skeleton repo. This is because
  <mark><code>node_modules</code></mark> is ignored by git, as mentioned. Once
  you install the necessary dependencies associated with this project, the
  <mark><code>node_modules</code></mark> folder will be created within your
  local project as well. There are some dependencies you will need to install,
  but it will be covered in the first part of the homework.
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
      extension to run your app and show changes in real-time as you save. If
      you navigate to your <mark><code>package.json</code></mark> file, notice
      that under "scripts" there is a "start" script which essentially runs the
      command to serve your application (usually on port 3000). If you were to
      start from scratch, you can use <mark><code>npx
      create-react-app</code></mark> (npx == node package execute) to set up the
      scripts for running, building, and testing automatically. To start your
      web application, run the following in your terminal:'
  - type: cbs
    codeblock:
      code: npm start
      lang: cpp
  - type: phs
    partheader: "Part 3: Node Component"
  - type: ps
    paragraph: The Node component is equivalent to a single tile on your 2D grid. As
      you saw in the demo, it can be either a wall or a valid space depending on
      whether or not it is clicked. There was also a functionality where the
      user can drag across the grid to create many walls at once. These are all
      things to consider when you begin create the React.js component hierarchy,
      and also what props are potentially needed in the Node component.
  - type: ps
    paragraph: 'Navigate to the Node component within
      "./src/PathfindingVisualizer/Node" and notice the layout of this
      functional component. The Node component itself is a function that returns
      JSX. At the bottom of the page, you have the following line:'
  - type: cbs
    codeblock:
      code: export default Node;
      lang: javascript
  - type: ps
    paragraph: This export statement allows you to access this Node component in
      other parts of the project.
  - type: ps
    paragraph: "Beginning with the props of the Node component, recall what needs to
      be considered again: whether or not the node itself is a wall, and whether
      or not the user is clicking on a node (or more appropriately, dragging) to
      convert the node. Some additional things to consider would be the node's
      location, and whether or not the node is your start/end point for the
      algorithm's execution. As such, implement the following props into your
      Node functional component:"
  - type: cbs
    codeblock:
      code: |-
        {
          col,
          isFinish,
          isStart,
          isWall,
          onMouseDown,
          onMouseEnter,
          onMouseUp,
          row,
        }
      lang: javascript
  - type: ps
    paragraph: Now, implement some additional styling options depending on the what
      the node type actually is; if it's a wall, it should be a darker tone, if
      it's the start point, make it green, if it's the finish, make it red.
  - type: cbs
    codeblock:
      code: |-
        const extraClassName = isFinish
          ? "node-finish"
          : isStart
          ? "node-start"
          : isWall
          ? "node-wall"
          : "";
      lang: javascript
  - type: ps
    paragraph: Now to handle the JSX in the return value of your Node component.
      Give the id of the div the position of the node, and the class name of the
      node depending on the criteria you defined previously.
  - type: ps
    paragraph: Then you'll need to define the event handlers onMouseDown,
      onMouseEnter, and onMouseUp. What are these?? You'll implement the
      functions associated with each prop later in a parent component, but the
      purpose is to give the parent component a connection to the Node component
      with these event handler functions, so the Node component itself can
      update via a prop change from the parent component. In other words, the
      parent component defines some function(s) to change the overarching grid
      structure that Dijkstra's algorithm runs on depending on what is and isn't
      a wall, or where the start/end points are. However, these changes must be
      propagated when the user interacts with the individual Node components. So
      by passing down the functions to the child component (Node) you can induce
      changes onto the parent component from some event (click/drag) on the
      child!
  - type: cbs
    codeblock:
      code: |-
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}
      lang: jsx
  - type: phs
    partheader: "Part 4: Understanding Helper Functions"
  - type: ps
    paragraph: 'Navigate to "./src/PathfindingVisualizer/PathfindingVisualizer.jsx"
      and scroll to the bottom of the file. Try to read through the three helper
      functions here and give a statement-by-statement explanation in the
      comments on what they do. '
  - type: phs
    partheader: "Part 5: PathfindingVisualizer Component"
  - type: ps
    paragraph: This component is your top-level component (i.e. the parent to the
      Node component). Notice at the top where your import statements are, that
      you have imported your Node component along with some Dijkstra's
      functions. You don't need to understand the Dijkstra's functions although
      you can feel free to take a look. <code><mark>dijkstras</mark></code> runs
      Dijkstra's on a grid input, and
      <code><mark>getNodesInShortestPathOrder</mark></code> takes a finish point
      after running Dijkstra's and backtracks until the start Node to give an
      in-order list of Nodes in the shortest path.
  - type: ps
    paragraph: Below, you can see there are four variables determining the
      start/finish node positions. Because the current grid is hard-coded to be
      a 20x50 grid, you'll position the start/finish nodes in opposite corners.
  - type: ps
    paragraph: "First things first, you'll need to define the states in your
      visualizer by using the <code><mark>useState</mark></code> hook. Thinking
      about this from a high-level perspective, you'll probably need something
      to track the progression of your grid throughout the visualization, and
      also something to check without or not the user's mouse is being held
      down. Implement them as such:"
  - type: cbs
    codeblock:
      code: |-
        const [grid, setGrid] = useState(getInitialGrid());
        const [mouseIsPressed, setMouseIsPressed] = useState(false);
      lang: javascript
  - type: ps
    paragraph: It's time for the three event handler functions that you touched on
      previously in the Node component. First up is to handle the behavior for
      onMouseDown. When the mouse first goes down (i.e. click and hold), you
      want to change the Node that it's clicking on to be the opposite of what
      it used to be (i.e. wall -> not wall, or not wall -> wall). You have a
      pre-defined helper function for this from part 4, so you can simply get
      the updated grid and assign it to a variable "newGrid." Then use the
      setter in your <mark><code>useState</code></mark> hook to set the updated
      grid state, and set your mouseIsPressed state to be true. Recall that the
      row, col parameters in this handler function are actually supplied by the
      child component Node. This is why you pass the handler functions down to
      the child as props, so that data from the child component can be lifted to
      the parent component!
  - type: cbs
    codeblock:
      code: |-
        const handleMouseDown = (row, col) => {
          const newGrid = getNewGridWithWallToggled(grid, row, col);
          setGrid(newGrid);
          setMouseIsPressed(true);
        };
      lang: javascript
  - type: ps
    paragraph: "Second up is to handle the behavior for onMouseEnter. When the mouse
      hovers over a Node (i.e. mouse enters), you should check for whether or
      not the mouse is already being held down, and if so continue to change
      those nodes being hovered over/entered as walls. The logic is similar, and
      simple:"
  - type: cbs
    codeblock:
      code: |-
        const handleMouseEnter = (row, col) => {
          if (!mouseIsPressed) return;
          const newGrid = getNewGridWithWallToggled(grid, row, col);
          setGrid(newGrid);
        };
      lang: javascript
  - type: ps
    paragraph: "Lastly, the behavior for when onMouseUp. Simply change the state of
      the mouse being held down to false:"
  - type: cbs
    codeblock:
      code: |-
        const handleMouseUp = () => {
          setMouseIsPressed(false);
        };
      lang: javascript
  - type: phs
    partheader: "Part 6: Animating Dijkstra's"
  - type: ps
    paragraph: In this part, you'll be doing the actual animation of Dijkstra's
      progression. Recall that the return value of the
      <code><mark>dijkstras</mark></code> function is the visited nodes through
      the runtime of Dijkstra's in order. Intuitively, when this is animated,
      you'll have to highlight the nodes in the order in which they were visited
      with some amount of delay between each. To set the delay between each
      animation, you'll use the JavaScript
      <mark><code>setTimeout()</code></mark> function which accepts some
      function to be executed, along with a delay as parameters. Then, you'll
      need to call the function to animate the shortest path after you visualize
      every visited node. Implement all this within the "animateDijkstra"
      function, which accepts the visited nodes in order, along with the nodes
      in the shortest path in order as parameters. You'll need to loop through
      each node in the visited nodes in order, animate them (by attaching a CSS
      class name to change the appearance), and then upon completion, make a
      call to a function "animateShortestPath" (which you'll implement
      afterwards) with the parameter that includes the nodes in the shortest
      path in order.
  - type: cbs
    codeblock:
      code: |-
        if (i === visitedNodesInOrder.length) {
          setTimeout(() => {
            animateShortestPath(nodesInShortestPathOrder);
          }, 10 * i);
          return;
        }
        setTimeout(() => {
          const node = visitedNodesInOrder[i];
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-visited";
        }, 10 * i);
      lang: javascript
  - type: ps
    paragraph: Now to animate the shortest path, you do something similar. Simply
      loop through the nodes in the provided list, and then change the class
      name of that node which will create the CSS animation with a delay using
      <code><mark>setTimeout()</mark></code>.
  - type: cbs
    codeblock:
      code: |-
        setTimeout(() => {
          const node = nodesInShortestPathOrder[i];
          document.getElementById(`node-${node.row}-${node.col}`).className =
            "node node-shortest-path";
        }, 50 * i);
      lang: javascript
  - type: ps
    paragraph: Within the "visualizeDijkstra" function, assign "startNode" and
      "finishNode" to the corresponding indices in the grid state, and uncomment
      the code block. Then, uncomment the commented out section in the JSX
      return value for this component. Try playing around with the tool on your
      local development server, and watch the magic happen :)
  - type: phs
    partheader: "Part 7: Creativity Requirement"
  - type: ps
    paragraph: "Try to implement one additional feature for this project of your own
      choice. Some ideas would be: creating some user input to choose start/end
      points, creating an interactive user interface (that looks better than the
      current one), etc."
---
