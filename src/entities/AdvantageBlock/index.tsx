import React from 'react';
import { Paragraph } from '@shared/ui/Paragraph';
import styles from './styles.module.scss';
import test from '@assets/Advantages/test.svg'


interface ImageMetadata {
    src: string; 
}

interface IAdvantage {
    advantageBlockType: 'muka-mobile'; 
    margin?: string;
    picture: ImageMetadata;
    heading: string;
    paragraph: string;
    paragraphType: string;
    paragraphMargin: string;
    width: string;
}


export const AdvantageBlock: React.FC<IAdvantage> = ({ advantageBlockType, margin = '',picture,heading,paragraph, paragraphType, paragraphMargin, width }) => {
    const advantageBlockClass = `${styles.advantage} ${styles[advantageBlockType]} ${margin ? margin : ''}`;

    return (
        <div className={advantageBlockClass}>
            <div className={styles.container} >
                <div className={styles.container__circle}>  
                    <img src={picture.src} alt="picture" className={styles.container__circle_picture}/>
                </div>  
                <span className={styles.container__heading}>{heading}</span>
                <Paragraph text={paragraph} paragraphType={paragraphType} margin={paragraphMargin} width={width}/>
            </div>
       </div>
    );
};
