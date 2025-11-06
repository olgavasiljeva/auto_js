class Button {
    constructor(width, height, type = "button", color = "green"){
        this.width = width;
        this.height = height;
        this.type = type;
        this.color = color;
    }
    onClick() {
        console.log(this);
    }
}

let newButton = new Button(30, 20)
newButton.onClick();

function testButton(button, expectedWidth, expectedHeight, expectedType, expectedColor) {
    if (
        button.width === expectedWidth &&
        button.height === expectedHeight &&
        button.type === expectedType &&
        button.color === expectedColor
    ) 
    {
        console.log("Properties match")
    } else {
        console.log("Properties do not match")
    }
}

testButton(newButton, 30, 20, "button", "green");