---
title: rpole~
description: real one-pole filter
categories:
- object
see_also:
- lop~
- hip~
- bp~
- vcf~
- bob~
- biquad~
- fexpr~
- slop~
pdcategory: vanilla, Filters
last_update: '0.42'
inlets:
  1st:
  - type: signal
    description: real signal to filter
  2nd:
  - type: signal
    description: filter coefficient
outlets:
  1st:
  - type: signal
    description: filtered signal
arguments:
  - type: float
    description: filter coefficient 
  default: 0
methods:
  - type: set <float>
    description: set internal state
  - type: clear
    description: clear internal state to zero (same as "set 0")
draft: false
---
Rpole~ filters an audio signal (left inlet
