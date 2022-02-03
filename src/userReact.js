import './userReact.css';
import React, { useState } from 'react';
import unHeart from './images/empty_heart.png';
import Heart from './images/filled_heart.png';

function ReactionBar() {
	const [theHeart, setTheHeart] = useState(false);
	const [count, setCount] = useState(0);
	function toggleHeart() {
		setTheHeart((prevHeart) => !prevHeart);
        setCount(count => (
            !theHeart ? count + 1 : count -1
        ))
	}

	return (
		<>
			<div className="react-bar">
				<img
					src={theHeart ? Heart : unHeart}
					className="filled_heart"
					onClick={toggleHeart}
				/>
                <div className="counter">
                    {count === 0 ? '' : count}
                </div>
                
			</div>
		</>
	);
}

export default ReactionBar;
