---
title: mtof
description: MIDI to frequency conversion
categories:
- object
pdcategory: vanilla, Converters, Tuning, MIDI
last_update: '0.40'
see_also:
- mtof~
- expr
inlets:
  1st:
  - type: float
    description: incoming value to be converted
outlets:
  1st:
  - type: float
    description: converted value
draft: false
---
{{< md_include "objects/acoustic-conversions.md" >}}