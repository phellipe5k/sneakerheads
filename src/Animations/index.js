

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
}

export const slide = {
  up: {
    initial: {opacity: 0, y: 80},
    animate: {opacity: 1, y: 0,
    transition: { duration: .3, delay: 0.3 }},
   
  },
  down: {
    initial: {opacity: 0, y: -80},
    animate: {opacity: 1, y: 0,
    transition: { duration: .6, delay: 0.3 }},
   
  },
  right: {
    initial: {opacity: 0, x: 200},
    animate: {opacity: 1, x: 0,
    transition: { duration: .5 }}
  },
  left: {
    initial: {opacity: 0, x: -200},
    animate: {opacity: 1, x: 0},
    transition: { duration: .8 }
  }

}

export const dissolve = {
  initial: {opacity: 0},
  animate: {opacity: 1,
  transition: { delay: 0.6 }},
}


export const tapScale = {
  scale: 0.9
}



export const  hoverScale = {scale: 1.05, transition: { repeat: 'Infinity'}}
