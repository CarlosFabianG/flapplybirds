export function setupBoard(element: HTMLButtonElement) {
  function startGame() {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
      <canvas id="board" width="400" height="600"></canvas>
    </div>
  `
  }
  element.addEventListener('click', () => startGame())
}
