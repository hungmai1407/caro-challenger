import './caro.scss'
import clsx from 'clsx'
import { ICaroState } from './caro.component'

export default function CaroTemplate({ username, step }: ICaroState) {

	function renderAllSquares() {
		const board = Array(step).fill(null);
		for (let i = 0; i < step; i++) {
			const squares = Array(step).fill(null);
			for (let j = 0; j < step; j++) {
				var squareKey = i * step + j;
				squares.push(<span key={squareKey}>{renderSquare(squareKey)}</span>);
			}
			board.push(<div key={i}>{squares}</div>);
		}
		return board;
	}

	function renderSquare(position: number) {
		return <div key={position} className='step-item'></div>
	}

	return (
		<div className={clsx('caro', { '-active': username })}>
			<article className={clsx('content', { '-display': username })}>
				<div className={clsx('color')}></div>
				<div className={clsx('play-board')}>
					{renderAllSquares()}
				</div>
				<div className={clsx('color')}></div>
			</article>
		</div>
	)
}


