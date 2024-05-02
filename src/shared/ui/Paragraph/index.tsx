import React from 'react';
import styles from './styles.module.scss';

interface IParagraph {
    paragraphType: 'mobile'; 
    text: string;
    margin?: string; 
}

export const Paragraph: React.FC<IParagraph> = ({ paragraphType, margin = '' ,text}) => {
    const paragraphClass = `${styles.letter} ${styles[paragraphType]} ${margin ? margin : ''}`;

    return (
        <span className={paragraphClass}>
            {text}
        </span>
    );
};