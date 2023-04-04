class Svg {
    constructor() {
        this.textColorUser = ''
        this.shapeChosenUser = ''
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeChosenUser}${this.textColorUser}</svg>`
    }

    renderTextColor(text, color) {
        if (text.length > 3) {
            throw new Error('Error, cannot be more than three characters')
        }
        else {
            this.textColorUser = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
        }
    }

    renderShapeChosen(shapeChosen) {
        this.shapeChosenUser = shapeChosen.render()
    }
}

module.exports = Svg