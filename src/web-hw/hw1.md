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
    codeblock:
      code: |-
        <link rel="" href="">
        <title>Your Name</title>
      lang: html
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
    codeblock:
      code: <header class="header center">
      lang: html
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
    codeblock:
      code: |-
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
      lang: css
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
    codeblock:
      code: |-
        .link:hover::before, .link:focus::before {
            width: 100%;
        }
      lang: css
  - type: ps
    paragraph: Observe that the way the underline appears. When the link is either
      hovered or selected, the width of the pseudo-element
      <mark><code>.link::before</code></mark> changes to 100%, else it is 0 when
      it isn't hovered/selected. We want to animate this change. Fill in the
      transition style so that we achieve a smooth animation.
  - type: cbs
    codeblock:
      code: "transition: [property] [duration] [timing-function];"
      lang: css
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
    codeblock:
      code: |-
        <button type="button" aria-label="toggle theme" class="btn btn--icon">
            <i id="btn-theme" class="fas fa-moon"></i>
        </button>
      lang: html
  - type: ps
    paragraph: "5.1: What does this button tag correspond to on the site?"
  - type: cbs
    codeblock:
      code: >-
        <button type="button" aria-label="toggle navigation" class="btn
        btn--icon nav__hamburger">
            <i class="fas fa-bars"></i>
        </button>
      lang: html
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
  - type: phs
    partheader: "Part 7: Fixing the About Section Layout"
  - type: ps
    paragraph: "Right now, your about section doesn't look to be entirely correct on
      the webpage. This is due to an issue with styling, namely how the flex
      display is oriented. Notice how your about section outer-div again has two
      classes: \"about\" and \"center.\" Recall that the \"center\" class is the
      same class from the previous part, where it essentially sets
      <mark><code>display: flex;</code></mark> and vertically centers the
      contents within the flex-box. Our about section, however, needs some
      additional formatting to display correctly. This will be done in the
      <mark><code>about</code></mark> class. Fill in this style so that the
      contents in this flex-box are arranged in a vertical fashion. Add a
      <code><mark>margin-top</mark></code> if you'd like."
  - type: phs
    partheader: "Part 8: Project Section"
  - type: ps
    paragraph: For your project section, the skeleton code has created a
      <mark><code>div</code></mark> with class <mark><code>project</code></mark>
      which represents a card that describes each of your projects, including
      name, tech stack, and description. Try creating multiple copies of this
      div one after the other, and see how it displays on the browser. We want
      to preserve this "card" aspect to these project divs, and not have them
      stack in a long rectangular fashion repeatedly. To do so, we'll use
      something called a grid layout.
  - type: phs
    partheader: "Part 9: CSS Grid Layout"
  - type: ps
    paragraph: "Given the following starter styles:"
  - type: cbs
    codeblock:
      code: |-
        .projects__grid {
            max-width: 1100px;
            margin: 0 auto;
            /* display: */
            /* grid-template-columns: */
            /* grid-gap: */
        }
      lang: css
  - type: ps
    paragraph: Fill in the missing styles to create a grid-like layout of the
      project cards. The style names should be fairly intuitive, but if you get
      stuck, it is always okay to look up CSS reference. No matter how
      experienced the developer, no one realistically knows every style by
      memory. Try different values for
      <mark><code>grid-template-columns</code></mark> to see how this style
      works. You will notice that this style does not have a set number of
      arguments, but will take as many as you want columns. This can result in
      redundant code, so you can try using these CSS functions
      <mark><code>repeat()</code></mark> and <mark><code>calc()</code></mark> to
      handle this style, breaking the grid into rows of 3s. What is happening is
      essentially repeating a fixed calculation of width for each column in the
      grid. This calculation is derived from 1/3 of the parent div's width
      subtracted from your chosen <mark><code>grid-gap</code></mark>*2/3 (since
      you will have 2 gaps between 3 cards in each row).
  - type: cbs
    codeblock:
      code: "grid-template-columns: repeat(auto-fit, calc(100% / 3 - [your chosen
        grid-gap value] * 2 / 3));"
      lang: css
  - type: phs
    partheader: "Part 10: Skills Section"
  - type: ps
    paragraph: For this section, feel free to just fill in each
      <mark><code>li</code></mark> item with your skills and add more as you see
      fit.</p>
  - type: phs
    partheader: "Part 11: More CSS Flex Layout"
  - type: ps
    paragraph: "You may find it strange that we are applying a flex display to a
      list element. This is an acceptable use case of a flex-box layout, as a
      <mark><code>ul</code></mark> element is simply another container element
      for smaller <mark><code>li</code></mark> elements. Fill in the styling for
      the <mark><code>skills__list</code></mark> class selector given the
      following skeleton:"
  - type: cbs
    codeblock:
      code: |-
        .skills__list {
            max-width: 450px;
            width: 95%;
            margin: 0 auto;
            /* display: */
            /* flex-wrap: */
            /* justify-content: */
        }
      lang: css
  - type: ps
    paragraph: Recall that <mark><code>justify-content</code></mark> refers to
      orienting flex-box items horizontally, so we want to center these items.
      Further, take a look at the <mark><code>flex-wrap</code></mark> attribute.
      This style can allow for a flex-box's child elements to wrap around into a
      new row (or column depending on the
      <code><mark>flex-direction</mark></code>) if the width of the combined
      child elements exceeds that of the flex-box.
  - type: ps
    paragraph: Now that the skills are oriented correctly, there are still some
      issues with the look of the skills section. The blocks seem too cramped,
      so we need to give them spacing between. You may remember that we used
      <mark><code>justify-content</code></mark> to accomplish this task in the
      past. However, in this case, we want to control the amount of space
      between each element explicitly, and not rely on preset spacing. As such,
      we can simply manipulate each child element to have additional margins.
      Fill in the styling for the <mark><code>skills__list-item</code></mark>
      class selector.
  - type: phs
    partheader: "Part 12: Add a Footer"
  - type: ps
    paragraph: "You have already been provided a footer with styling (feel free to
      analyze the styling in <mark><code>styles.css</code></mark>):"
  - type: cbs
    codeblock:
      code: |-
        <a href="/" class="link footer__link">
            Created By Your Name
        </a>
      lang: html
  - type: ps
    paragraph: Your task is to add some additional information on the footer and
      style it so it looks natural with the rest of the page and footer.
  - type: phs
    partheader: "Part 13: Creativity Requirement"
  - type: ps
    paragraph: Congratulations! You've successfully built out the core requirements
      and design for your very own personal portfolio website with a clean and
      sleek look. Now, your final task is to add three of your own personal
      touches to the project as a standout measure. Be sure to document these
      three personal touches in your README.md so graders can easily determine
      your modifications. These modifications will be graded on effort.
---
