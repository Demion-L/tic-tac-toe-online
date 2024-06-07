import { GameCell } from "./game-cell";
import { GameInfo } from "./game-info";
import styles from "./game.module.css";
import { useGameState } from "./use-game-state";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    resetGame,
    toggleCell,
    getWinnerCell,
  } = useGameState();

  return (
    <div className='flex flex-column items-center w-40 mx-auto my-24 p-5 border border-black'>
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className='grid pt-px pl-px'>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={getWinnerCell(index)}
            onClick={() => toggleCell(index)}
          />
        ))}
      </div>
      <button
        className='cursor-pointer mt-2.5 bg-transparent border border-gray-400 py-1 px-3 rounded'
        onClick={resetGame}>
        Сбросить
      </button>
    </div>
  );
}
