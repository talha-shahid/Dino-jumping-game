console.log("hello, world");

let score = 0;
let cross = true;

//When a User presses a key on keyBoard
document.onkeydown = function (e) {
    //If the key is " ArrowUp" - dinosaur will jump
    if (e.code == "ArrowUp") {
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(() => {
            dino.classList.remove("animateDino");
        }, 700);
    }
    //If the key is "ArrowRight" - dinosaur will move right
    if (e.code == "ArrowRight") {
        dino = document.querySelector(".dino");
        dino_X = parseInt(window.getComputedStyle(dino, null).getPropertyValue('right'));
        dino.style.right = (dino_X - 130) + "px";
    }
    //If the key is "ArrowLeft" - dinosaur will move left
    if (e.code == "ArrowLeft") {
        dino = document.querySelector(".dino");
        dino_X = parseInt(window.getComputedStyle(dino, null).getPropertyValue('right'));
        dino.style.right = (dino_X + 130) + "px";
    }
}

//Collision Course
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));


    //indicates the difference between Dino and Obstacle positions
    offsetX = Math.abs(dx - ox); //for Width
    offsetY = Math.abs(dy - oy); //for Height

    console.log(offsetX);
    //if Dino and Obstacle are too close then, GAME OVER!!
    if (offsetX < 50 && offsetY < 100) {
        gameOver.innerHTML = "Game Over - Reload to Play Again";
        obstacle.classList.remove('obstacleAni');
        dino.classList.remove('.animateDino');
        // audiogo.play();
        // setTimeout(() => {
        //     audiogo.pause();
        //     audio.pause();
        // }, 1000);
    }
    else if (offsetX > 114 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 5000);
        // setTimeout(() => {
        //     aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        //     newDur = aniDur - 0.1;
        //     obstacle.style.animationDuration = newDur + 's';
        //     console.log('New animation duration: ', newDur)
        // }, 500);

    }


}, 10);


//updateScore function
function updateScore(score) {
    scoreCount.innerHTML = "Your Score: " + score;
}