// right animation

TweenMax.to(
    '#right', 2.5, {
    delay: .2,
    right: '-100%',
    ease: Expo.easeInOut,
    stragger: 1
});

// left animation

TweenMax.to(
    '#left', 2, {
    delay: .2,
    left: '-100%',
    ease: Expo.easeInOut,
    stragger: 2 
});

// bottom animation

TweenMax.to(
    '#top', 2, {
    delay: .2,
    bottom: '-100%',
    ease: Expo.easeInOut,
    stragger: 3
});

// top animation

TweenMax.to(
    '#bottom', 2, {
    delay: .2,
    top: '-100%',
    ease: Expo.easeInOut,
    stragger: 4
});

// text animation

TweenMax.from(
    'h1', 1.5, {
    delay: .6,
    y: 50,
}
);