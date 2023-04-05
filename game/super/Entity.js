export default class Entity{
  constructor({x,y,width,height}){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }
  get centerX(){ return this.x + this.width * .5 }
  get centerY(){ return this.y = this.height * .5 }
  get center(){ return {x: this.centerX, y: this.centerY } }

  get oppositeX(){ return this.x + this.width }
  get oppositeY(){ return this.y + this.height }
  get opposite(){ return {x:this.oppositeX,y:this.oppositeY}}
}