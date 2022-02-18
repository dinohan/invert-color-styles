# Invert Color Styles

select layers,
press the button,
and it turns into dark mode.

## Operating environment

You can use this plugin on Figma

To use this plugin, you need to prefix the name of the color styles.

For example, if the color styles of light mode are like this,
- `bgNormal`
- `textPrimary`
- ...

the color styles of dark mode should be like this.
- `inverted/bgNormal`
- `inverted/textPrimary`
- ...

It doesn't matter how many slashes(`/`) are included in the name.

✅ `background/bgNormal` -> `inverted/background/bgNormal` 

## How to use

First, you need to save the color styles.

You can save color styles by clicking the refresh button.

You have to run it in the file that is the source of the color styles.

And wherever those color styles are used, selecting the layers and pressing the invert button will invert the selected layers.
