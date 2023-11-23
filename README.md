# saltcorn-edit-qrcode

This is Saltcorn plugin, to use it you need install it into your saltcorn instance/tenant.

It adds to `String` type fieldview able to show it as QRcode SVG image.

## Usage

In any view (List/Show/Edit will work) add Field element, select text field and select `qrcode` in "Field view".

There are very limited configurations:

- Size - both width and height in pixels.
- Border - boolean to enable single-block border

## TODO

- Implement alternative implementations:
  - Server-side SVG generation (i.e. package [pure-svg-code](https://github.com/gwuhaolin/pure-svg-code) found)
  - Pure browser-side SVG generation (i.e. package [qrcode-svg](https://github.com/datalog/qrcode-svg) found)
  - Preformatted text format ([uqr](https://github.com/unjs/uqr).`renderUnicodeCompact()` function)
- Think if more configuration needed (border size 0-4 instead of 0-1, colors (bg/fg), error correction level)
