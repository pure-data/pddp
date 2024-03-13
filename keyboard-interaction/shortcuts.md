Collecting all interactions here that I got used to for patching in vanilla Pd with a few comments about the state in plugdata (hoping that I checked correctly). Maybe this contributes in some way to the current work on the canvas functionality:


## object creation (while an object is selected)
* [x] create connected object via `cmd + 1`  ⚠️ connection only visible after creation though
* [x] create connected message via `cmd + 2`
* [x] create connected numberbox via `cmd + 3`
* [x] create connected listbox via `cmd + 4`
* [x] `tab` to confirm entry / move focus out of text editing  ⚠️ same can be achieved with `return` in plugdata, which makes sense in the autocomplete context though (in vanilla, this creates line breaks which are not saved anyway though)
* [x] `cmd + d` to duplicate (without connections), moves object (10, 10) pixels  ⚠️ duplicates object next to current instance(s) - vanilla users need to adapt to this behavior which was obviously added on purpose
* [x] `cmd + c` --> `cmd + v` inserts object (without connections) at (10, 10) pixels offset or at identical position in different canvas  ⚠️ pastes objects at mouse position in plugdata
* [x] `cmd + x` --> `cmd + v` cuts / pastes object at identical position (without connections)  ⚠️ pastes objects at mouse position in plugdata - vanilla users can certainly adapt, but it might be considerable to allow pasting in position? (maybe if the mouse wasn't moved during the process? - although that might be too much of a hidden feature)
* [ ] `cmd + t` to insert trigger object in selected control connection (with selected text input)
* [ ] `cmd + t` to insert nop signal subpatch in selected signal connection (with selected text input)

## aligning objects
* [ ] `cmd + shift + r` to align objects (vertically or horizontally depending on their positions)
* [x] `arrow keys` to move objects pixel-wise
* [ ] `shift + arrow keys` to quicker move objects (10-pixel-steps)

## mode management
* [x] `cmd + e` to switch between edit- and run-mode
* [x] pressing `cmd` while in edit-mode allows interactions like run-mode

## connection management
* [ ] `dragging` from outlet without mouseup allows to create multiple connections by pressing `shift` for each target inlet
* [x] `cmd + k` while 2 objects without connections selected: creates connection from upper to lower object
  * [ ] repeatedly pressing `cmd + k` when upper object has 1 outlet and lower one has more: connects multiple connections to all inlets of lower object
  * [ ] repeatedly pressing `cmd + k` when upper object has multiple outlets: creates parallel connections
* [ ] `cmd + k` while object and connection are selected: inserts object in connection
* [ ] `cmd + k` while single object with connections is selected: deletes connections (never using this though since i just do cut/paste in this case)
* [ ] `cmd + k` while 3 objects with connections in row are selected: remove middle object from connection
* [ ] `cmd + k` while 3 objects are selected where 2 are connected: insert separate object to connection
* [ ] `dragging` from outlet while 2 objects with multiple outlets/inlets are selected without mouseup: pressing `shift` creates all parallel connections starting from source outlets to target inlets
* [ ] `dragging` from outlet while more than 2 objects selected without mouseup: pressing `shift` creates connections from same outlets of other objects to target object's multiple inlets
* [ ] `dragging` from outlet of one of multiple selected objects to unselected target object: pressing `shift` creates connections from same outlets of other objects to target object's single inlet
* [ ] `dragging` from unselected object while multiple target objects are selected: pressing `shift` creates multiple connections to same target inlet
* [ ] `cmd + d` while connection is selected: add parallel connection
* [ ] `shift + click` on other connection while connection is selected: flip connection inlets or outlets (depending on the selected combination - pretty nice for trigger management)  :warning: this is used to select multiple connections in plugdata - so can't be adapted in the exact same way from vanilla

#### trigger management
* [ ] `cmd + t` while 1 object is selected with multiple connections from single outlet: inserts [trigger] object to distribute outgoing connections
* [ ] `cmd + t` while trigger object is selected with connections for each outlet: adds anything-outlet on the left
* [ ] `cmd + t` while trigger object is selected with less connections than outlets: removes unnecessary outlets
* [ ] `cmd + t` while trigger object is selected with multiple connections for single outlet: adds outlets to distribute all connections

## console
* [ ] `cmd + r` to show/hide Pd window/console (this might be nice in plugdata, too, for showing/hiding the console - even though it's not a separate window there ... in general, i really appreciate vanilla's "distraction free" appearance a lot and would love to see something similar like a "distraction free mode" for plugdata where i only see the canvas and nothing else)


here are 3 videos displaying these and more mechanisms of "intelligent patching":
* https://vimeo.com/273707442
* https://vimeo.com/279631360
* https://vimeo.com/340437816

and here is more discussion and context around these developments on the vanilla side:
* https://github.com/pure-data/pure-data/pull/575

i missed some stuff in the description above, which i never use (yet) though, like:
* [ ] cycling through outlets while dragging via `tab` or `shift + tab`
* [ ] cycling through target inlets while dragging via `tab` (only possible on linux and windows since it obviously relies on changing mouse positions - and since shift creates a connection, the shift + tab combination doesn't seem to useful to me in this case)
* [ ] paste and replace (which doesn't have a shortcut - although i wonder now if it might actually be an option to have this as an implicit `cmd + v` behavior if there's 1 object on the "clipboard" and other objects are selected?)

here are 3 videos displaying these and more mechanisms of "intelligent patching":
* https://vimeo.com/273707442
* https://vimeo.com/279631360
* https://vimeo.com/340437816

and here is more discussion and context around these developments on the vanilla side:
* https://github.com/pure-data/pure-data/pull/575

i missed some stuff in the description above, which i never use (yet) though, like:
* [ ] cycling through outlets while dragging via `tab` or `shift + tab`
* [ ] cycling through target inlets while dragging via `tab` (only possible on Linux and Windows since it relies on changing mouse positions)
* paste and replace (currently only available through the menu)
