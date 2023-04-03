class Svg {
    constructor() {
        this.textColorUser = ''
        this.shapeChosenUser = ''
    }
    render() {
        return `<svg width="300" height="200">${this.shapeChosenUser}${this.textColorUser}</svg>`
    }

    renderShapeColor(text, color) {
        if (text.length > 3) {
            throw new Error('Error, cannot be more than three characters')
        }
        else {
            this.textColorUser = `<text x="0" y="15" fill="${color}">${text}</text>`
        }
    }

    renderShapeChosen(shapeChosen) {
        this.shapeChosenUser = shapeChosen.render()
    }
}

module.exports = Svg