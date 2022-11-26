window.sr = ScrollReveal({ reset: true })

ScrollReveal({
    distance: '150px',
    duration: 800,
    origin: 'top',
    reset: false
})

// Delay

sr.reveal('.carousel', { delay: 300 })
sr.reveal('.middleImg', { delay: 500 })
sr.reveal('.sec3', { delay: 700 })
sr.reveal('.bottomBanner', { delay: 500 })