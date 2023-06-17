// right animation

TweenMax.to(
    '#right', 2.5, {
    delay: .2,
    right: '-100%',
    ease: Expo.easeInOut
});

// left animation

TweenMax.to(
    '#left', 2, {
    delay: .2,
    left: '-100%',
    ease: Expo.easeInOut
});

// bottom animation

TweenMax.to(
    '#top', 2, {
    delay: .2,
    bottom: '-100%',
    ease: Expo.easeInOut
});

// top animation

TweenMax.to(
    '#bottom', 2, {
    delay: .2,
    top: '-100%',
    ease: Expo.easeInOut
});

// text animation

TweenMax.from(
    'h1', 1.5, {
    delay: .6,
    y: 50,
}
);