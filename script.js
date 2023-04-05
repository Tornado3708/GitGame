import Canvas from "./game/tools/Canvas.js"
import Player from "./game/Player.js"

const canvas = new Canvas({width:1920,height:1080,id:"canvas1"})
const ctx = canvas.getContext( "2d" )


class Game {
    delta = 0
    now = 0
    then = 0
    fpsInterval = 1000
  constructor(){
    this.player = new Player({x:100,y:100,width:80,height:160})
    this.animate(0)
  }

  draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    this.player.draw(ctx)
  }
  move(){
    this.player.move()
  }

  animate(timeStamp){
    this.now = timeStamp
    this.delta = this.now - this.then
    console.log(timeStamp)
    if(this.delta > this.fpsInterval){
      this.draw()
      this.move()
      this.then = this.now
      this.delta %= this.fpsInterval
    }
    
    requestAnimationFrame(this.animate.bind(this))
  }

}


let game = new Game()
window.game = game