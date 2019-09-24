const score = document.querySelector( '.score' ),
    start = document.querySelector( '.start' ),
    gameArea = document.querySelector( '.gameArea' ),
    car = document.createElement( 'div' ),
    keys = {
        ArrowUp: false,
        ArrowRight: false,
        ArrowDown: false,
        ArrowLeft: false
    },
    setting = {
        start: false,
        score: 0,
        speed: 3
    };

car.classList.add( 'car' );

function startGame () {
    start.classList.add( 'hide' );
    setting.start = true;
    gameArea.appendChild( car );
    requestAnimationFrame( playGame );
}

function playGame () {
    console.log( 'playGame' );
    if( setting.start ) {
        requestAnimationFrame( playGame );
    }
}

function startRun ( event ) {
    event.preventDefault();
    keys[event.key] = true;
}

function stopRun ( event ) {
    event.preventDefault();
    keys[event.key] = false;
}

start.addEventListener( 'click', startGame );
document.addEventListener( 'keydown', startRun ); 
document.addEventListener( 'keyup', stopRun );