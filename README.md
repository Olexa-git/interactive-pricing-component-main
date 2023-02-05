# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8).

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Links

- Solution URL: https://github.com/Olexa-git/interactive-pricing-component-main
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

HTML -> CSS -> JS

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JS eventlisteners

### What I learned

I have learned how to:
- color only part of element background using "linear-gradient";
- create custom sliders using mouse and touch events;

```js
scale_ball.onmousedown = function(event) {
  event.preventDefault(); // prevent selection start (browser action)
  let shiftX = event.clientX - scale_ball.getBoundingClientRect().left;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - scale.getBoundingClientRect().left;
    if (newLeft < 0) {
      newLeft = 0;
    }
    ......
```
