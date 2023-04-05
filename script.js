import Canvas from "./game/Canvas.js"
import Player from "./game/Player.js"

const canvas = new Canvas({width:1920,height:1080,id:"canvas1"})
const ctx = canvas.getContext( "2d" )


class Game {
  time = {
    delta: 0,
    now: 0,
    then: 0
  }
  constructor(){
    this.player = new Player({x:100,y:100,width:80,height:160})
    this.animate(0)
  }

  draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.strokeRect(this.player.x,this.player.y,this.player.width,this.player.height)
  }
  move(){

  }

  animate(timeStamp){
    this.time.now = timeStamp
    console.log(timeStamp)
    this.draw()
    this.move()
    setTimeout(this.animate,1000)
  }

}


let game = new Game()
window.game = game