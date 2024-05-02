import React from 'react';
import styles from './styles.module.scss';

interface IInvertedText {
    invertedTextType: 'mobile'; 
    letter: string;
    margin?: string; 
}

export const InvertedText: React.FC<IInvertedText> = ({ invertedTextType, letter, margin = '' }, ref) => {
    const invertedTextClass = `${styles.letter} ${styles[invertedTextType]} ${margin ? margin : ''}`;

    return (
        <span className={invertedTextClass}>
            {letter}
        </span>
    );
};
