export default class Canvas{
  cnv = document.createElement( "canvas" )
  destination = document.body
  constructor( {width=300,height=150, id="", destination=document.body } ){
    this.cnv.width = width
    this.cnv.height = height
    this.cnv.id = id
    destination.appendChild( this.cnv )
  }

  getContext( id ){
    return this.cnv.getContext( id )
  }

}