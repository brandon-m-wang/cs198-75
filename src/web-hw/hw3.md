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
    paragraph: "Moving onto the implementation of the
      <mark><code>detect</code></mark> function. In order to achieve the
      bounding box effect on the user's image, you need to utilize something
      called an HTML canvas. A canvas is essentially a space on your webpage
      where you can define drawing patterns through code (e.g. creating a square
      or rectangle at certain x, y coordinates). The way you'll implement the
      canvas in this web app is to overlay the canvas on top of the image, and
      draw the boxes to match up with the detected objects in the image.
      Naturally, this means that the canvas must be the same size as your image.
      Implement this. Retrieving the image's height and width has already been
      implemented for you as follows:"
  - type: cbs
    codeblock:
      code: |-
        const img = document.getElementById("img")
        const imgWidth = img.width;
        const imgHeight = img.height;
      lang: javascript
  - type: phs
    partheader: "Part 5: Predicting Image Objects"
  - type: ps
    paragraph: "To detect objects from an image, TensorFlow simplifies this for you
      with a very simple method of the neural net (that you pass into this
      function as <mark><code>net</code></mark>). Implement this in the
      indicated space:"
  - type: cbs
    codeblock:
      code: const obj = await net.detect(img);
      lang: javascript
  - type: ps
    paragraph: Notice that the return value of this method is a JavaScript object
      (an array)! You can save this into a variable after awaiting its detection
      output. This object now stores the list of predicted objects in the user's
      image.
  - type: phs
    partheader: "Part 6: Drawing on the HTML Canvas"
  - type: ps
    paragraph: "Now, think about what information you need in order to draw the
      bounding boxes on the image. You'd need the predictions, first and
      foremost. Each prediction includes data on the type of object (e.g. car,
      bird, plane), and also its bounding box coordinates. You have these
      predictions stored in <mark><code>obj</code></mark>. You'll also need the
      canvas itself, more specifically, its 2D context (think of this as simply
      a means to access drawing capabilities on the canvas, not super important
      that you understand the inner workings of HTML canvases, unless you want
      to regularly use canvases in your projects of course). With this in mind,
      you can use another helper function to take in these two parameters and
      draw the actual bounding boxes onto the image. This function is named
      <mark><code>drawRect</code></mark>, and it's already been implemented for
      you, since it's a lot of meaningless busy work (instructions defining
      drawing stroke behavior). For now, just get the canvas's 2D context to
      pass into <mark><code>drawRect</code></mark>:"
  - type: cbs
    codeblock:
      code: const ctx = canvas.getContext("2d");
      lang: javascript
  - type: phs
    partheader: "Part 7: Generating Captions using OwlBot API"
  - type: ps
    paragraph: Now, you'll be working under a function called
      <mark><code>getCaptions</code></mark>. This function takes in a
      predictions array object (which you may have noticed
      <mark><code>obj</code></mark> being passed into it in the previous
      function earlier), and will process each prediction by generating a
      relevant sentence for the caption along with some decorative things like
      hashtags and emojis if available.
  - type: ps
    paragraph: "A neat array method that you can utilize to iterate through each
      element in the array is <mark><code>Array.forEach</code></mark>. This
      method takes in a function as a parameter which defines what to do for
      each element. Pretty intuitive. "
  - type: cbs
    codeblock:
      code: |-
        predictions.forEach(async (prediction) => {

        })
      lang: javascript
  - type: ps
    paragraph: Again, you may have noticed that the anonymous function passed into
      the forEach method is asynchronous. This is because you want to make a
      request to an API to generate your caption, which is an asynchronous
      process. The function parameter in this case refers to each element in
      your predictions array object.
  - type: ps
    paragraph: "For each prediction you'll need to access the HTML div which will
      contain all individual caption sentences. You'll also need to get the
      entity associated with each prediction (i.e. if TensorFlow sees two
      objects in the image, for instance in the demo where there was a car and
      motorcycle, then iterating through you need to get each associated
      predicted object: car, motorcycle)."
  - type: cbs
    codeblock:
      code: |-
        const caption = document.getElementById("caption");
        const entity = prediction["class"];
      lang: javascript
  - type: ps
    paragraph: "It's time to make your GET request to the OwlBot API. The OwlBot API
      is a dictionary service that provides word definitions and also example
      sentences. In this web app, you want to first check to see if there's an
      example sentence available for a detected object. In the rare occasion
      that there's not, then simply provide the definition of the word. You need
      to wrap this in a try-catch block in case the API fails to deliver a
      successful response for any reason. "
---
