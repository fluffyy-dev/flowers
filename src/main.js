import { Application, Graphics } from "pixi.js";

(async () => {

    const app = new Application();

    await app.init({
        // width: window.innerWidth,
        // height: window.innerHeight,

        resizeTo: window,
    });

    app.canvas.style.position = 'absolute';

    // first flower
    const flowerY = 300;
    const flowerX = 300;
    const petalWidth = 30;
    const petalHeight = 50;
    const carpelRad = 38;
    const petals = 8;

    const TurnDegrees = (2 * Math.PI) / petals;

    for (let i = 0; i < petals; i++) {
        const petal = new Graphics()
        .ellipse(0, 0, petalWidth, petalHeight)
        .fill({color: 0xffea00})
        app.stage.addChild(petal);
        petal.x = flowerX;
        petal.y = flowerY;
        petal.pivot.set(0, petalHeight);
        petal.rotation = TurnDegrees * i;
    }

    const carpel = new Graphics()
    .circle(300, 300, carpelRad)
    .fill({color: 0x381607})
    app.stage.addChild(carpel);

    // center of flower
    // const pete = new Graphics()
    // .rect(300, 300, 6, 6)
    // .fill({color: 0x42f59e})
    // app.stage.addChild(pete);
    // pete.pivot.set(3, 3);

    // app.stage.addChild(petal1);

    document.body.appendChild(app.canvas)
})();