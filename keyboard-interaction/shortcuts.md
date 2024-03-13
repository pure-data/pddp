## mode management
* `cmd + e` to switch between edit- and run-mode
* pressing `cmd` while in edit-mode allows interactions like run-mode
* `tab` to confirm object text entry / move focus out of text editing
* `esc` to cancel selection (unselect everything)

## object creation
* `cmd + 1` creates object via 
  * `hsl` creates a horizontal slider
  * `vsl` creates a vertical slider
  * `hradio` creates a horizontal radio button
  * `vradio` creates a vertical radio button
  * `bng` creates bang object
  * `tgl` creates toggle object
* `cmd + 2` creates message box
* `cmd + 3` creates number box 
* `cmd + 4` creates list box 

#### connect new object to selected object
* all interactions above create connected objects while the source object is selected

#### insert objects to connection
* `cmd + t` to insert trigger object in selected control connection (with selected text input)
* `cmd + t` to insert nop signal subpatch in selected signal connection (with selected text input)

#### copy/paste
* `cmd + d` to duplicate (without connections), adds duplicated object at (10, 10) pixels offset
* `cmd + c` --> `cmd + v` inserts object (without connections) at (10, 10) pixels offset or at identical position in different canvas
* `cmd + x` --> `cmd + v` cuts / pastes object at identical position (without connections)
* `paste and replace` replaces all selected objects with object on clipboard (only available through menu)

## aligning objects
* `cmd + shift + r` to align objects (vertically or horizontally depending on their positions)
* `arrow keys` to move objects pixel-wise
* `shift + arrow keys` to quicker move objects (10-pixel-steps)

## connection management
* `dragging` from outlet without mouseup allows to create multiple connections by pressing `shift` for each target inlet
* `cmd + k` while 2 objects without connections selected: creates connection from upper to lower object
  * repeatedly pressing `cmd + k` when upper object has 1 outlet and lower one has more: connects multiple connections to all inlets of lower object
  * repeatedly pressing `cmd + k` when upper object has multiple outlets: creates parallel connections
* `cmd + k` while object and connection are selected: inserts object in connection
* `cmd + k` while single object with connections is selected: deletes connections (never using this though since i just do cut/paste in this case)
* `cmd + k` while 3 objects with connections in row are selected: remove middle object from connection
* `cmd + k` while 3 objects are selected where 2 are connected: insert separate object to connection
* `dragging` from outlet while 2 objects with multiple outlets/inlets are selected without mouseup: pressing `shift` creates all parallel connections starting from source outlets to target inlets
* `dragging` from outlet while more than 2 objects selected without mouseup: pressing `shift` creates connections from same outlets of other objects to target object's multiple inlets
* `dragging` from outlet of one of multiple selected objects to unselected target object: pressing `shift` creates connections from same outlets of other objects to target object's single inlet
* `dragging` from unselected object while multiple target objects are selected: pressing `shift` creates multiple connections to same target inlet
* `cmd + d` while connection is selected: add parallel connection
* `shift + click` on other connection while connection is selected: flip connection inlets or outlets (depending on the selected combination - facilitates trigger management)  
* `tab` or `shift + tab` for cycling through outlets while dragging
* `tab` cycling through target inlets while dragging (only possible on Linux and Windows since it relies on manipulating the mouse position)

## trigger management
* `cmd + t` while 1 object is selected with multiple connections from single outlet: inserts [trigger] object to distribute outgoing connections
* `cmd + t` while trigger object is selected with connections for each outlet: adds anything-outlet on the left
* `cmd + t` while trigger object is selected with less connections than outlets: removes unnecessary outlets
* `cmd + t` while trigger object is selected with multiple connections for single outlet: adds outlets to distribute all connections

## console
* `cmd + r` to show/hide Pd window/console

---

here are videos demonstrating the mechanisms of "intelligent patching":
* https://vimeo.com/273707442
* https://vimeo.com/279631360
* https://vimeo.com/340437816

and here is more discussion and context around these features on the technical siede (⚠️ this is just a reference here while editing - will remove this for the actual documentation obviously):
* https://github.com/pure-data/pure-data/pull/575

