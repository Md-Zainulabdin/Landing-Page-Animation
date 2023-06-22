// right animation

let tl = gsap.timeline();

tl

.to(
    '#right', 2, {
    delay: .2,
    right: '-100%',
    ease: Expo.easeInOut,
    stragger: 1
})

.from(
    'h1', 1.5, {
    delay: .6,
    y: 50,
}
)

// left animation

.to(
    '#left', 1, {
    delay: .2,
    left: '-100%',
    ease: Expo.easeInOut,
    stragger: 2 
})

// bottom animation

.to(
    '#top', 1, {
    delay: .2,
    bottom: '-100%',
    ease: Expo.easeInOut,
    stragger: 3
})

// top animation

.to(
    '#bottom', 1, {
    delay: .2,
    top: '-100%',
    ease: Expo.easeInOut,
    stragger: 4
})

// text animation

