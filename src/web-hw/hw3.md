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
  - type: ps
    paragraph: 'Within the try block, you want to make your request. Do this using
      axios, which simplifies the process of making HTTP requests greatly. The
      first parameter is the accessed endpoint, and the second parameter is any
      additional HTTP headers in the form of a JavaScript object. Because the
      OwlBot API requires an access token, it will need to be added as an
      Authentication header to the HTTP request. You need to use your own token,
      and you can get one for free by providing your e-mail <a
      href="https://owlbot.info/" target="_blank">here</a>. Again, because HTTP
      requests are asynchronous, you want to await the completion of the
      request. The OwlBot API response looks something like this for any given
      word (in this case, your predicted entity from TensorFlow):'
  - type: ibs
    imageblock: https://calhacks-sierra.s3.us-west-2.amazonaws.com/assets/cubstart/image.png
  - type: cbs
    codeblock:
      code: |-2
         // Access token provided
        const accessToken = "YOUR TOKEN HERE";
        // Store the response from GET request
        const response = await axios.get(
        `https://owlbot.info/api/v4/dictionary/${entity}`,
        { headers: { Authorization: `Token ${accessToken}` } }
        );
      lang: javascript
  - type: ps
    paragraph: "Now, how can you break down the response to just the first (most
      common) entry of a word? You can use dot notation to navigate through the
      response object as such:"
  - type: cbs
    codeblock:
      code: |-
        // Retrieve the data portion of the response
        const data = response.data;
        // From the data, get the first entry of the definitions
        const entry = data.definitions[0];
      lang: javascript
  - type: ps
    paragraph: "Then, you can use the <code><mark>let</mark></code> keyword to
      declare a variable to hold either the example sentence if it's available,
      or the definition (if the example sentence is not available). Recall that
      you must use the let keyword here, as const is not reassignable and
      therefore must be initialized when it is declared. Then, if there is an
      emoji given to you by the API response for the given word, include it in
      the caption as well :). Finally, append a hashtag followed by the entity:"
  - type: cbs
    codeblock:
      code: |-
        if (entry.example) {
            lineText = entry.example;
        } else {
            lineText = entry.definition;
        }
        if (entry.emoji) {
            lineText += " " + entry.emoji;
        }
        lineText += " #" + entity;
      lang: javascript
  - type: ps
    paragraph: Lastly, you want to add each sentence as a
      <mark><code>p</code></mark> tag to the display card. Recall that you can
      generate HTML elements using the <mark><code>createElement</code></mark>
      method on the DOM. Setting its innerText to be the generated sentence and
      then adding it to the caption container should do it.
  - type: cbs
    codeblock:
      code: |-
        const line = document.createElement("p");
        line.innerText = lineText;
        caption.appendChild(line);
      lang: javascript
  - type: ps
    paragraph: "ALl in all, your <mark><code>getCaption</code></mark> function
      should look something like this:"
  - type: cbs
    codeblock:
      code: |-
        const getCaption = (predictions) => {
            predictions.forEach(async (prediction) => {
                const caption = document.getElementById("caption");
                const entity = prediction["class"];
                try {
                    // Access token provided
                    const accessToken = "YOUR TOKEN HERE";
                    // Store the response from GET request
                    const response = await axios.get(
                    `https://owlbot.info/api/v4/dictionary/${entity}`,
                    { headers: { Authorization: `Token ${accessToken}` } }
                    );
                    // Retrieve the data portion of the response
                    const data = response.data;
                    // From the data, get the first entry of the definitions
                    const entry = data.definitions[0];
                    let lineText;
                    if (entry.example) {
                        lineText = entry.example;
                    } else {
                        lineText = entry.definition;
                    }
                    if (entry.emoji) {
                        lineText += " " + entry.emoji;
                    }
                    lineText += " #" + entity;
                    const line = document.createElement("p");
                    line.innerText = lineText;
                    caption.appendChild(line);
                } catch (error) {
                    console.log(error);
                }
            })
        }
      lang: javascript
---
