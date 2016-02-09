# Dass
A comprehensive collection of default CSS settings for HTML5 tags as Silent Sass Classes and Mixins.

## Usage

```scss
@import 'dass/dass';

body {
  @extend %body;
}

a {
  @extend %a;
}

h2 {
  @media(max-width: 1024px) {
    @include h2; // each silent class has a associative mixin to be used within @media
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

CSS collisions cramping your style? Ever wish you could just set the properties for a CSS element back to the browser defaults? Now you can!
