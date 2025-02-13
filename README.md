## Creative Exercise: SVG
- Glitch Link: https://creative-exercise-maeve-norton.glitch.me/
- The topic I chose to do is SVG animation.
- The example my code is based on is the SVG Script for Animation example from the following webpage. https://www.w3schools.com/graphics/svg_scripting.asp 
- The changes I made to my code are that I put the <script> part of the code into a main.js, therefore in the index.html I added <script src="js/main.js"></script>. I also changed what shape and color was used in the animation. It was a red circle, now it is a green square.
  - This line is what tuned the circle into the rectangle. <rect id="rectangle" x="0" y="60" width="95" height="100" fill="green"/>. I want the rectangle to fit directly above the start and stop buttons. I did this by changing the numbers for x,y,width, and height until it looked good to me.
  - In main.js I had to change the "circle4" to "rectangle", "circle" to "rect", "cx" to "x", and "newCX" to "newX"
- I am running a server.js using Express