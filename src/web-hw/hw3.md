---
title: hw3
header: Caption Generation with Computer Vision
due: Fri, 2/25
introduction: >-
  In this homework, you'll be able to leverage the power of convolutional neural
  networks and APIs to build a novel web application that automatically
  generates captions based on the image contents! You'll be using TensorFlow's
  Common Objects in Context - Single Shot Detection (COCO-SSD) scheme to power
  your computer vision, and the OwlBot API to generate caption-like sentences of
  specific words.


  <div style="display: flex; justify-content: center; margin-top: 2rem">


  <iframe width="600" height="350"

  src="https://www.youtube.com/embed/xyt8_cEnpfU">

  </iframe>


  </div>
setup: All external libraries needed will be covered in the homework parts.
skeleton: https://github.com/brandon-m-wang/cubstart-hw3-skeleton.git
sections:
  - type: phs
    partheader: "Part 1: Familiarize Yourself with the HTML and CSS"
  - type: ps
    paragraph: Just take a quick second to skim through the provided HTML and CSS in
      the skeleton. Because this homework is focused on helping you get used to
      APIs and JavaScript, we have filled this in for you. It is still important
      to constantly brush up on fundamentals, and also to understand what you're
      going to target using JavaScript later on in the homework.
  - type: phs
    partheader: "Part 2: Vanilla JavaScript Libraries"
  - type: ps
    paragraph: "The way you \"import\" external libraries in vanilla JavaScript is
      to simply include a script tag with the source of your library. Recall
      where all script tags in HTML go: at the bottom of your body. This is
      because you need to have your DOM load as defined by the rest of your HTML
      body before running the scripts in your web application (otherwise you may
      be targeting things that don't yet exist). You'll be using three external
      libraries in this web application: TensorFlow.js, the COCO model for
      TensorFlow.js, and also axios, which is a Javascript library used to make
      HTTP requests."
  - type: ps
    paragraph: Be sure to include the following tags where they appropriately belong
      in your HTML document.
  - type: cbs
    codeblock:
      code: >-
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>

        <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"></script>
      lang: html
  - type: phs
    partheader: "Part 3: Initializing the TensorFlow Neural Net"
  - type: ps
    paragraph: "Now, to write your driver function for all functionality of the
      application. In order to detect objects on an image input, you need to
      initialize something called a \"neural net,\" which for the purposes of
      this class you can understand to be something that processes images and
      can recognize and classify entities. As stated earlier, you'll be using
      the COCO model from TensorFlow. This function is defined as
      <code><mark>runCoco</mark></code>, and notice how it's asynchronous.
      Loading in the neural net is an asynchronous process -- it takes time to
      load in, and JavaScript will ignore it and continue to the next line if
      you don't specify the program to await:"
  - type: cbs
    codeblock:
      code: |-
        const net = await cocoSsd.load();
        console.log("Some text here");
        detect(net);
      lang: javascript
  - type: ps
    paragraph: "Give the log statement a meaningful message for debugging purposes.
      What is <mark><code>detect(net)</code></mark>? You haven't defined this
      function behavior yet, but it will take in the neural net you now
      initialized as a parameter and use it to power the web application. "
  - type: phs
    partheader: "Part 4: HTML Canvas"
  - type: ps
    paragraph: "In order to achieve the bounding box effect on the user's image, you
      need to utilize something called an HTML canvas. A canvas is essentially a
      space on your webpage where you can define drawing patterns through code
      (e.g. creating a square or rectangle at certain x, y coordinates). The way
      you'll implement the canvas in this web app is to overlay the canvas on
      top of the image, and draw the boxes to match up with the detected objects
      in the image. Naturally, this means that the canvas must be the same size
      as your image. Implement this. Retrieving the image's height and width has
      already been implemented for you as follows:"
  - type: cbs
    codeblock:
      code: |-
        const img = document.getElementById("img")
        const imgWidth = img.width;
        const imgHeight = img.height;
      lang: javascript
---
