import { Application } from "pixi.js";

(async () => {

    const app = new Application();

    await app.init({
        // width: window.innerWidth,
        // height: window.innerHeight,

        resizeTo: window,
});

    app.canvas.style.position = 'absolute';

    // first flower

    document.body.appendChild(app.canvas)

})();