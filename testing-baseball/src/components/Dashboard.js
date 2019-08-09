import React from 'react';

export default function Dashboard(props) {
    const { handleStrike, handleBall, handleFoul, handleHit } = props;
    
    return (
        <div>
            <button onClick={handleStrike}>Strike</button>
            <button onClick={handleBall}>Ball</button>
            <button onClick={handleFoul}>Foul</button>
            <button onClick={handleHit}>Hit</button>
        </div>
    );
}