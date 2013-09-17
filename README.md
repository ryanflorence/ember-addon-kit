Ember Addon Kit
===============

This is a scaffold repository to bootstrap ember addons. Hopefully it
serves as a conventional project structure so tools like Ember App Kit
can tool around it (like precompiling templates from addons into your
app, etc.).

This is mostly a work in progress as we figure out how this should all
fit together, please be patient if you decide to use it :)

Instructions
------------

1. Clone this repository `git clone
   https://github.com/rpflorence/ember-addon-kit.git`
2. `npm install` and `bower install`
3. Change 'my-addon' to the name of your addon in
   - `bower.json`
   - `example/app/main.js`
   - `example/index.html`
   - `test/main.js`
4. `$ grunt dev`
5. `$ grunt karma:watch`
6. Add files to lib with the same file naming conventions found in ember app kit.
7. Export things in `main.js`.

License & Copyright
-------------------

MIT Style License.

Copyright (c) 2013 Instructure, Inc.

