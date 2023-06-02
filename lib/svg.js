class Svg {
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" width="auto" height="auto" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
    }
    setText (txt,color) {
        this.textElement = `<text x="150" y="150" font-size="50" text-anchor="middle" fill="${color}">${txt}</text>`
    }
    setShape(shape){
        this.shapeElement = shape.render()
    }

} 
module.exports = Svg