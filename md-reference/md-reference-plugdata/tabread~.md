---
title: tabread~
description: non-interpolating table lookup for signals
categories:
- object
see_also:
- tabwrite~
- tabread4~
- tabread
- tabread4
- tabsend~
- tabwrite
- tabreceive~
- tabplay~
pdcategory: vanilla, Signal Generators, Arrays and Tables
last_update: '0.43'
inlets:
  1st:
  - type: signal
    description: sets table index and output its value
outlets:
  1st:
  - type: signal
    description: value of index input
arguments:
  - type: symbol
    description: sets table name with the sample
methods:
  - type: set <symbol>
    description: set the table name
draft: false
---
Tabread~ looks up values out of the named array. Incoming values are truncated to the next lower integer, and values out of bounds get the nearest (first or last) point.
