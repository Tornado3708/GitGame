import Entity from "./super/Entity.js";
import Controls from "./tools/Controls.js";


export default class Player extends Entity{
  controls = new Controls()
  constructor({x,y,width,height}){
    super( {x,y,width,height} )
  }
  move(){
    this.x++
  }
  draw(ctx){
    ctx.fillRect( this.x,this.y,this.width,this.height )
  }
}