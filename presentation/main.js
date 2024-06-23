import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import hljs from 'highlight.js';
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
// import ComparisonSlider from "comparison-slider";
import 'reveal.js/dist/theme/black.css';

const deck = new Reveal();
deck.initialize({
  hash: true,
  slideNumber: true,
});
