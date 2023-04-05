export default class Controls{
  key = []
  code = []
  keyCode = []
  constructor(){
    this.element = document.getElementById( "canvas1" )
    window.addEventListener( "keydown", e => {
      if( this.key.indexOf( e.key === -1 )){
        this.key.push( e.key )
      }
    } )
  }
}