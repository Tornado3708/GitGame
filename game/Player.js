import Entity from "./super/Entity.js";
import Controls from "./tools/Controls.js";


export default class Player extends Entity{
  controls = new Controls()
  speed = {x:0,y:0}
  constructor({x,y,width,height}){
    super( {x,y,width,height} )
  }
  move(tick=0){
    if( this.controls.key.indexOf( "d" ) > -1 ){
      this.speed.x++
    }else if( this.controls.key.indexOf( "a" ) > -1 ){
      this.speed.x--
    }

    if( this.controls.key.indexOf( "s" ) > -1 ){
      this.speed.y++
    }else if( this.controls.key.indexOf( "w" ) > -1 ){
      this.speed.y--
    }

    this.x += this.speed.x * tick * 50
    this.y += this.speed.y * tick * 50

    this.speed.x *= 0.95
    this.speed.y *= 0.95
  }
  draw(ctx){
    ctx.strokeRect( this.x,this.y,this.width,this.height )
  }
}