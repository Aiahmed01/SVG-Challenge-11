class Shape {
    constructor(){
        this.color = "" 
    }
    setColor(color){
        this.color = color
    }
}
class Circle extends Shape {
    render (){
        return  ` <circle cx="150" cy="115" r="100" stroke="black" stroke-width="3" fill="${this.color}" />`

    }
}

class Triangle extends Shape {
    render (){
        
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`

    }
}

class Square extends Shape {
    render() {
      let style = 'fill:blue;';
      if (this.color) {
        style += `fill:${this.color};`;
      }
      return `<rect x="55" y="20" width="180" height="180" style="${style}" />`;
    }
  }

module.exports = {Circle, Triangle, Square}
