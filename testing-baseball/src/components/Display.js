import React from 'react';

export default function Display({ strikes, balls }) {
    return (
        <div>
            <h2>{strikes} Strikes</h2>
            <h2>{balls} Balls</h2>
        </div>
    )
}