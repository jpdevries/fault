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

## Why?

CSS collisions cramping your style? Ever wish you could just set the properties for a CSS element back to the browser defaults? Now you can!
