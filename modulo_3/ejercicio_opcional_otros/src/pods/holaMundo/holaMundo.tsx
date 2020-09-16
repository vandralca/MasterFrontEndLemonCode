import React from 'react';

export const HolaMundo: React.FC = () => {
    return (
        <span className="title">{process.env.HOLA_MUNDO_TEXT}</span>
    );
}