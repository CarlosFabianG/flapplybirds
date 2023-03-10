import './style.css'
import { setupBoard } from './start'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="/logo.png" alt="" style="width:50%;">
    <div class="card">
      <button id="start" type="button">Start Game</button>
    </div>
  </div>
`

setupBoard(document.querySelector<HTMLButtonElement>('#start')!)
