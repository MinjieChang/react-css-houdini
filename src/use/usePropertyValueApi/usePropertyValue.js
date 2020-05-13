export default function (){
  window.CSS.registerProperty({
    name: '--registered',
    syntax: '<color>',
    inherits: false,
    initialValue: 'red',
  });
  // window.CSS.registerProperty({
  //   name: '--unregistered',
  //   syntax: '<color>',
  //   inherits: false,
  //   initialValue: 'red',
  // });
}