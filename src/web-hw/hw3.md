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
---
