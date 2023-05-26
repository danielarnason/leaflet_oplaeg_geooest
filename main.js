import Reveal from 'reveal.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/night.css'
import RevealNotes from 'reveal.js/plugin/notes/notes.js'

const deck = new Reveal({
  hash: true,
  plugins: [
    RevealNotes
  ]
})
deck.initialize()