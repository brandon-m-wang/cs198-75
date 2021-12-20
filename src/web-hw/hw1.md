---
title: hw1
header: "Project 1: Personal Portfolio"
due: Fri, 2/11
introduction: Welcome to CS198-75! For your first homework, you'll be building
  out a single-page complete personal portfolio that can serve as your own site
  for showcasing your education, work experience, achievements, and projects
  using HTML and CSS. You can expect the format of all released homeworks here
  on out to be in this guided doc format. Feel free to collaborate with your
  teammates on this homework, but remember that everyone has to submit their own
  homework.
setup: For this project (and all projects), you will have a project skeleton to
  work off of. The skeleton includes some JavaScript components, pre-existing
  styling, and boilerplate code to help you get started. You only need to worry
  about the parts marked with comments corresponding to each part of the
  homework.
skeleton: https://github.com/brandon-m-wang/cubstart-hw1-skeleton.git
sections:
  - type: phs
    partheader: "Part 1: The Document Head"
  - type: ps
    paragraph: Access the <mark><code>index.html</code></mark> file in the project
      directory. This is where the layout of your site is; think of it as the
      skeleton of the site.
  - type: ps
    paragraph: Recall that the head of the document is where metadata, page
      information, and important link tags go. You are able to link style sheets
      (your .css files) within the document head, as well as title your page as
      it shows on your browser tab.
  - type: ps
    paragraph: Add a title for your website, and link your stylesheet in the
      enclosing head tags. The corresponding tags are referenced for your
      convenience.
  - type: cbs
    codeblock: |-
      <link rel="" href="">
      <title>Your Name</title>
  - type: phs
    partheader: "Part 2: HTML Tags and Attributes"
  - type: ps
    paragraph: Here, you'll be creating your logo, which in this example will be
      your initials. Within the <mark><code>h3</code></mark> tags in the
      problem, you will add an <mark><code>a</code></mark> tag with your
      initials, with the class of "link" linking to the same page that it is on
      (referencing the current path is possible with "/").
  - type: phs
    partheader: "Part 3: CSS Flex Layout"
  - type: ps
    paragraph: Take a look at the header tag, with classes "header" and "center."
      This entire section is your page's header, which includes your logo,
      navigation, and other buttons. Think about how a header like this is laid
      out across the top of a page. What kinds of orientation would you need for
      its elements?
  - type: cbs
    codeblock: <header class="header center">
  - type: ps
    paragraph: >-
      Within the <mark><code>styles.css</code></mark> file, you'll find a class
      selector for the class <mark><code>center</code></mark>. The intent of
      this class is to vertically center the children of elements of this class
      using a flex-box layout. Accomplish this task by adding the two necessary
      styles to

      achieve this.
  - type: ps
    paragraph: Underneath, there is also a class selector for the class
      <mark><code>header</code></mark>. Because our header in
      <mark><code>index.html</code></mark> includes both classes "header" and
      "center," styling the "header" class will also cause stylistic changes on
      our header element. Recall that <code><mark>justify-content</mark></code>
      is the attribute that pertains to manipulating elements in the horizontal
      direction in a flex-box context. Choose the style for
      <code><mark>justify-content</mark></code> that you feel would best fit the
      look of the header tag and its children.
  - type: ibs
    imageblock: https://cdn-media-1.freecodecamp.org/images/OBGVr-DdHiQ2y9VOWuhXqXeGnFnyDSBTx7hv
  - type: phs
    partheader: "Part 4: Basic Animation with CSS"
  - type: ps
    paragraph: "You will now create a simple underline animation with CSS. You will
      notice that the styles in this section have a strange selector:"
  - type: cbs
    codeblock: |-
      .link::before {
          content: "";
          display: inline;
          width: 0%;
          height: 0.2em;
          position: absolute;
          bottom: 0;
          background-color: var(--clr-primary);
          /* transition: */
      }
  - type: ps
    paragraph: The <mark><code>::before</code></mark> selector is called a
      "pseudo-selector," which essentially just refers to a pseudo-element that
      exists before the selected element. You can give this pseudo-element an
      appearance by setting its <mark><code>display</code></mark> to a specific
      attribute. In this case, we are using it to create our text underline.
      You'll notice now, if you try to hover the links on the header, you will
      see the underline, but it just appears instantly. We want to create this
      animation, so that it comes out from the left.
  - type: ps
    paragraph: "The <mark><code>transition</code></mark> property provides a way to
      control animation speed when changing CSS properties. Instead of having
      property changes take effect immediately, you can cause the changes in a
      property to take place over a period of time. Property changes are found
      in elements that have properties that change on certain actions, for
      instance hover (mouse over) and focus (selected). The property changes can
      be defined by <mark><code>:hover</code></mark> and
      <mark><code>:focus</code></mark> selectors as such:"
  - type: cbs
    codeblock: |-
      .link:hover::before, .link:focus::before {
          width: 100%;
      }
  - type: ps
    paragraph: Observe that the way the underline appears. When the link is either
      hovered or selected, the width of the pseudo-element
      <mark><code>.link::before</code></mark> changes to 100%, else it is 0 when
      it isn't hovered/selected. We want to animate this change. Fill in the
      transition style so that we achieve a smooth animation.
  - type: cbs
    codeblock: "transition: [property] [duration] [timing-function];"
  - type: ps
    paragraph: In the property section, you will want to target
      <code><mark>width</mark></code> as mentioned previously. As for the
      timing-function, you can use <mark><code>ease-in</code></mark>, but there
      are many options available. Try playing around with the timing of the
      animation and see the results by hovering your links and logo!
  - type: phs
    partheader: "Part 5: Understanding Media Queries"
  - type: ps
    paragraph: Some homework parts will involve analyzing parts of the skeleton
      code, so that you can understand its use cases. Answer the questions in
      the commented margins.
  - type: cbs
    codeblock: |-
      <button type="button" aria-label="toggle theme" class="btn btn--icon">
          <i id="btn-theme" class="fas fa-moon"></i>
      </button>
  - type: ps
    paragraph: "5.1: What does this button tag correspond to on the site?"
  - type: cbs
    codeblock: >-
      <button type="button" aria-label="toggle navigation" class="btn btn--icon
      nav__hamburger">
          <i class="fas fa-bars"></i>
      </button>
  - type: ps
    paragraph: "5.2: Try Ctrl-F in styles.css and look the class 'nav__hamburger'.
      You'll notice that it appears in 2 places. Why is one of the rules
      'display: none' on one instance? How do you make it so that this button
      appears on screen Hint: remember what @media (max-width: 600px) means."
  - type: phs
    partheader: "Part 6: About Section"
  - type: ps
    paragraph: Notice that the containing div for the section has two classes. The
      <mark><code>about__contact</code></mark> class div underneath this part
      has already been filled in for you. You can ignore this for now.
  - type: ps
    paragraph: "Your task is to create your name, role, and bio positioned front and
      center. To do so, you need to add an html element for each, one after the
      other:"
  - type: ps
    paragraph: >-
      <ul>
                  <li>
                      An <code><mark>h1</mark></code> tag for your name. Try to make it in this format: "Hi, I'm" followed by
                      your name in blue. (Hint: you can achieve this using the <mark><code>span</code></mark> tag, which is
                      designed to be nested within text-based elements to indicate a difference in style or some other
                      function. The class style <mark><code>about__name</code></mark> provides this coloring for you.)
                  </li>
                  <li>
                      An <code><mark>h2</mark></code> tag for your role, with the class of
                      <mark><code>about__role</code></mark>.
                  </li>
                  <li>
                      A <code><mark>p</mark></code> tag for your bio, with the class of <mark><code>about__desc</code></mark>.
                  </li>
              </ul>
---
