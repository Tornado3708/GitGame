import Entity from "./super/Entity.js";

export default class Player extends Entity{
  constructor({x,y,width,height}){
    super( {x,y,width,height} )
  }
  move(){}
  draw(){}
}