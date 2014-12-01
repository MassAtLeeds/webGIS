This repo encapsulates course materials on web-based GIS.

##Writing for the site

You can use HTML or md for pages (includes are simpler in md).
All files should start with the appropriate header. Files that need to appear on the main menu, should start:

layout: page
title: Title / text for menu

All others should start:

layout: default
title: Title text

See any page for how to structure this info in a header.

##Structure

The materials can be repurposed for multiple courses, but a course currently holds them together, the main pages for which are in /web-based-gis/

The handbook for the course is in: handbook.md
The course structure and links to materials are in materials.md
Assessments are in subdirectories, linked from assessments.md

Please:
place lectures in /lectures, making sure they're independent of each other and the course
place practicals in /practicals, making sure they're independent of each other and the course
place data in the subdirectories of /data, though indexes are likely to change for courses, so here in /web-based-gis/data.html
place pages about software in /software, though indexes are likely to change for courses, so here in /web-based-gis/software.md
place general info likely to be of use for lots of courses in /info
For example, the reading list/recommended text is in /info/reading.md
place code examples in /info/code, there's an index page in the directory /info/code/index.md
structure material in appropriate subdirectories in all directories.

If you think material will be of use in multiple lectures, please place it in /_includes/materials, suitably sub-directoried.
These can then be included using includes.

404.html moves to root when built, but is currently in /web-based-gis/ so it can be built per-course.

Stuff that currently has no clear place is in /web-based-gis/lost-and-found/

##Building and serving

If you serve the site:
jekyll serve
the site for web-based-gis will first be generated in /_site_wbg
It will then be served at localhost:4000/web-based-gis/

There are examples of most things on the different pages. Only thing currently missing is a working example of including material from md in HTML, but there is the reverse in the lectures.