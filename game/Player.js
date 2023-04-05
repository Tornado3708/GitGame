import Entity from "./super/Entity.js";
import Controls from "./tools/Controls.js";


export default class Player extends Entity{
  controls = new Controls()
  speed = {x:0,y:0}
  constructor({x,y,width,height}){
    super( {x,y,width,height} )
  }
  move(tick=0){
    this.x += this.speed.x * tick
    this.y += this.speed.y * tick
  }
  draw(ctx){
    ctx.strokeRect( this.x,this.y,this.width,this.height )
  }
}