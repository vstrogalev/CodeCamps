// RGB To Hex Conversion
/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/
function rgb(r, g, b) {
  function convert(num) {
    if (num <= 0) return '00'
    if (num > 255) return 'FF'
    return num.toString(16).padStart(2, '0').toUpperCase();
  }  
    return convert(r) + convert(g) + convert(b);
}