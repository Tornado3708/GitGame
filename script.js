import Canvas from "./game/Canvas.js"
import Player from "./game/Player.js"

const canvas = new Canvas({width:1920,height:1080,id:"canvas1"})
const ctx = canvas.getContext( "2d" )


class Game {
  constructor(){
    this.player = new Player({x:100,y:100,width:80,height:160})
  }
}


let game = new Game()
window.game = game