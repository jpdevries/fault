# fault
A comprehensive collection of default CSS settings for HTML5 tags as Silent Sass Classes and Mixins.

Fault is completely silent. Including fault in your project initially adds 0 bytes to your CSS payload. So if your site is slow well, that's your&nbsp;fault.

## Usage

```scss
@import 'de/fault';

body {
  @extend %body;
}

a {
  @extend %a;
}

h2 {
  @media(max-width: 1024px) {
    @include h2; // each silent class has a associated mixin to be used within @media
  }
}
```

will output:

```css
body {
  display: block; }

a:link, a:visited {
  text-decoration: underline;
  cursor: auto; }

body {
  margin: 8px; }
  body:focus {
    outline: none; }

@media (max-width: 1024px) {
  h2 {
    display: block;
    font-weight: bold;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0; } }
```

## Why?

CSS collisions cramping your style? Ever wish you could just set the properties for a CSS element back to the browser defaults? Now you&nbsp;can!

## Where?
Data is pulled from Default CSS Settings for each tag in the [W3C&nbsp;Reference](http://www.w3schools.com/tags/tag_blockquote.asp).
