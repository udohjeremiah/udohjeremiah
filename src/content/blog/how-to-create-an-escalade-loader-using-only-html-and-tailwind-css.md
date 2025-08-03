---
title: How to Create an Escalade Loader Using Only HTML and Tailwind CSS
description: Learn how to create an escalade loader from scratch using HTML and Tailwind CSS.
heroImage: ../../../public/blog/how-to-create-an-escalade-loader/hero.webp
publishedOn: 2025-08-03
tags: [animations, coding, html, tailwindcss]
---

## Introduction

An escalade loader is a type of web animation where visual elements move up in a
staggered pattern, simulating the appearance of climbing a ladder. There are
many variations of this, but here's the one we will be building, inspired by
[Vitaly Silkin's Dribbble shot](https://dribbble.com/shots/3907093-escalade-loader):

![Escalade loader](/blog/how-to-create-an-escalade-loader/escalade.gif)

We'll recreate the animation using only HTML and Tailwind CSS.

An escalade loader is ideal for animations shown while a user waits for an
activity to complete, especially when that activity represents progress from one
step or level to the next.

## Prerequisite

This article assumes you can write basic HTML and Tailwind CSS. If not, I
recommend familiarising yourself with those before proceeding.

## Setting up Tailwind CSS

Before setting up Tailwind CSS, create a file named `index.html`. Then open it
in your code editor and browser. Inside the file, paste the following starter
HTML structure:

```html title="index.html" ins={1-9}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Escalade Loader</title>
  </head>
  <body></body>
</html>
```

Tailwind CSS is usually installed via package managers like `npm` in larger
projects. That's fine for full apps but overkill for a quick demo.

Fortunately, we can use Tailwind CSS in an HTML file without installing it. We
do this by simply adding the Tailwind CSS CDN script tag within the `<head>` of
our HTML file:

```html title="index.html" ins={7}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Escalade Loader</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body></body>
</html>
```

A **CDN** (content delivery network) is like a team of delivery trucks stationed
all around the world. Instead of having to drive from the warehouse every time
you want something, the truck closest to you brings it much faster. When you add
that line to your HTML, you're telling the browser, "Hey, before showing the
page, go to this CDN link and load Tailwind CSS tools from there."

Under the hood, your browser sees that `<script>` tag, quickly connects to the
nearest jsDelivr server, and downloads the Tailwind CSS JavaScript tools. This
JavaScript sets up Tailwind CSS to work in the browser. We can now write
Tailwind CSS classes in our HTML file, and it will apply the styles on the fly.

## Building the escalade loader

To place everything we'll be designing at the centre of the page, add the
following utility class to the `<body>` tag:

```html title="index.html" {9}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Escalade Loader</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body class="flex min-h-screen max-w-screen items-center justify-center overflow-x-hidden"></body>
</html>
```

To create the loader, we'll use this algorithm:

1. Draw two small arc-shaped paths using `<svg>`:

   - One arc curves clockwise upward from bottom to top.
   - The second arc curves counterclockwise downward, starting slightly higher
     and extending lower.
   - Each arc is inside its own `<g>` (group), so we can animate them
     separately.

2. Define a colour gradient (`<linearGradient>`) that is applied as the `stroke`
   of the arcs.

3. Apply stroke-based animation to simulate a "ladder climbing" effect:

   - The `stroke-dasharray` and `stroke-dashoffset` properties are animated to
     make each arc appear to "draw itself" from nothing to full length.
   - Then they animate again to "erase" themselves in the same direction.

4. Synchronise the motion to alternate between arcs:

   - The first arc starts drawing and sliding upwards.
   - After a brief delay, the second arc begins its draw and slide-up animation.
   - This results in a staggered, continuous loop: one arc draws while the other
     clears, then they swap roles.

Taking the first step of the algorithm, update your `index.html` with the
following changes:

```html title="index.html" ins={10-13}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Escalade Loader</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body class="flex min-h-screen max-w-screen items-center justify-center overflow-x-hidden">
    <svg class="h-37.5 w-25 overflow-visible">
      <g><path d="M 50,100 A 1,1 0 0 1 50,0" /></g>
      <g><path d="M 50,75 A 1,1 0 0 0 50,-25" /></g>
    </svg>
  </body>
</html>
```

`overflow-visible` allows the animation we'll be applying to each `<path>` to go
outside the `<svg>` box — it's clipped to the `<svg>` by default.

After adding the changes, refresh your browser, and it should look like this:

![Step 1](/blog/how-to-create-an-escalade-loader/step-1.webp)

Next, let's define the colour gradient and apply it as the `stroke` of each
`<path>` in the `<svg>`:

```html title="index.html" ins={14,20,23-28}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Escalade Loader</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body class="flex min-h-screen max-w-screen items-center justify-center overflow-x-hidden">
    <svg class="h-37.5 w-25 overflow-visible">
      <g>
        <path
          d="M 50,100 A 1,1 0 0 1 50,0"
          class="fill-none stroke-[url(#gradient)] stroke-20 [stroke-dasharray:0_157px] [stroke-dashoffset:0px] [stroke-linecap:round]"
        />
      </g>
      <g>
        <path
          d="M 50,75 A 1,1 0 0 0 50,-25"
          class="fill-none stroke-[url(#gradient)] stroke-20 [stroke-dasharray:0_158px] [stroke-dashoffset:1px] [stroke-linecap:round]"
        />
      </g>
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" class="[stop-color:#ff56a1] [stop-opacity:1]" />
          <stop offset="100%" class="[stop-color:#ff9350] [stop-opacity:1]" />
        </linearGradient>
      </defs>
    </svg>
  </body>
</html>
```

The `<linearGradient>` was placed within `<defs>` to show that it will not be
rendered directly but referenced at a later time to display it. Inside
`<linearGradient>`, we defined a smooth colour blend from pink (`#ff56a1`) at
the start, to orange (`#ff9350`) at the end. Finally, we apply it to the
`stroke` of each `<path>` in the `<svg>` by referencing it using its `id`
attribute.

After adding the changes, refresh your browser, and it should look like this:

![Step 2](/blog/how-to-create-an-escalade-loader/step-2.webp)

Next, let's create the animation to simulate the "ladder climbing" effect. We'll
define two animations. The first will be applied to each `<g>` to make it appear
as if it's moving from bottom to top. The second will be applied to each
`<path>` to simulate the drawing and erasing of the stroke using
`stroke-dasharray` and `stroke-dashoffset`:

```html title="index.html" ins={8-32} {36,39,42,45}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Escalade Loader</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
      @keyframes slide-up {
        0% {
          transform: translateY(-50px);
        }
        100% {
          transform: translateY(50px);
        }
      }

      @keyframes climb {
        0% {
          stroke-dasharray: 0 157px;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 157px 157px;
          stroke-dashoffset: 0;
        }
        100% {
          stroke-dasharray: 157px 157px;
          stroke-dashoffset: -156px;
        }
      }
    </style>
  </head>
  <body class="flex min-h-screen max-w-screen items-center justify-center overflow-x-hidden">
    <svg class="h-37.5 w-25 overflow-visible">
      <g class="animate-[slide-up_2s_linear_infinite]">
        <path
          d="M 50,100 A 1,1 0 0 1 50,0"
          class="animate-[climb_2s_cubic-bezier(0.8,_0,_0.2,_1)_infinite] fill-none stroke-[url(#gradient)] stroke-20 [stroke-dasharray:0_157px] [stroke-dashoffset:0px] [stroke-linecap:round]"
        />
      </g>
      <g class="animate-[slide-up_2s_linear_infinite]">
        <path
          d="M 50,75 A 1,1 0 0 0 50,-25"
          class="animate-[climb_2s_cubic-bezier(0.8,_0,_0.2,_1)_infinite] fill-none stroke-[url(#gradient)] stroke-20 [stroke-dasharray:0_158px] [stroke-dashoffset:1px] [stroke-linecap:round]"
        />
      </g>
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" class="[stop-color:#ff56a1] [stop-opacity:1]" />
          <stop offset="100%" class="[stop-color:#ff9350] [stop-opacity:1]" />
        </linearGradient>
      </defs>
    </svg>
  </body>
</html>
```

After adding the changes, refresh your browser, and it should look like this:

![Step 3](/blog/how-to-create-an-escalade-loader/step-3.gif)

Finally, let's synchronise the motion to alternate between the two `<path>`. To
achieve this, add a half-second animation delay to the second arc — that is, the
second `<g>` and `<path>`, respectively:

```html {42,45}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Escalade Loader</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <style>
      @keyframes slide-up {
        0% {
          transform: translateY(-50px);
        }
        100% {
          transform: translateY(50px);
        }
      }

      @keyframes climb {
        0% {
          stroke-dasharray: 0 157px;
          stroke-dashoffset: 0;
        }
        50% {
          stroke-dasharray: 157px 157px;
          stroke-dashoffset: 0;
        }
        100% {
          stroke-dasharray: 157px 157px;
          stroke-dashoffset: -156px;
        }
      }
    </style>
  </head>
  <body class="flex min-h-screen max-w-screen items-center justify-center overflow-x-hidden">
    <svg class="h-37.5 w-25 overflow-visible">
      <g class="animate-[slide-up_2s_linear_infinite]">
        <path
          d="M 50,100 A 1,1 0 0 1 50,0"
          class="animate-[climb_2s_cubic-bezier(0.8,_0,_0.2,_1)_infinite] fill-none stroke-[url(#gradient)] stroke-20 [stroke-dasharray:0_157px] [stroke-dashoffset:0px] [stroke-linecap:round]"
        />
      </g>
      <g class="animate-[slide-up_2s_linear_infinite] [animation-delay:0.5s]">
        <path
          d="M 50,75 A 1,1 0 0 0 50,-25"
          class="animate-[climb_2s_cubic-bezier(0.8,_0,_0.2,_1)_infinite] fill-none stroke-[url(#gradient)] stroke-20 [animation-delay:0.5s] [stroke-dasharray:0_158px] [stroke-dashoffset:1px] [stroke-linecap:round]"
        />
      </g>
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" class="[stop-color:#ff56a1] [stop-opacity:1]" />
          <stop offset="100%" class="[stop-color:#ff9350] [stop-opacity:1]" />
        </linearGradient>
      </defs>
    </svg>
  </body>
</html>
```

After adding the changes, refresh your browser, and it should look like this:

![Step 4](/blog/how-to-create-an-escalade-loader/step-4.gif)

That's it! We did it.

## Conclusion

This brings us to the end of this article. We created the escalade loader
animation from scratch using only HTML and Tailwind CSS. More importantly, we
went through each step of the animation, understanding how each part works.

I hope you learned a thing or two about Tailwind CSS and animations on the web.
If you did, that's great, and if you didn't, please go through the article
again, I'm sure you will.

Remember, **"hackers hack, crackers crack, and whiners whine. Be a hacker."**
Thanks for reading.
