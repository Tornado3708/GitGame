import Entity from "./super/Entity.js";

export default class Player extends Entity{
  controls = new Controls()
  constructor({x,y,width,height}){
    super( {x,y,width,height} )
  }
  move(){}
  draw(){}
}