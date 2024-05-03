import React from 'react';
import { Paragraph } from '@shared/ui/Paragraph';
import styles from './styles.module.scss';


interface ImageMetadata {
    src: string; 
}

interface IAdvantage {
    advantageBlockType: 'muka-mobile' | 'butter-mobile'; 
    margin?: string;
    picture: ImageMetadata;
    heading: string;
    paragraph: string;
    paragraphType: string;
    paragraphMargin: string;
    width: string;
    line: ImageMetadata;
}


export const AdvantageBlock: React.FC<IAdvantage> = ({ advantageBlockType, margin = '',picture,heading,paragraph, paragraphType, paragraphMargin, width, line }) => {
    const advantageBlockClass = `${styles.advantage} ${styles[advantageBlockType]} ${margin ? margin : ''}`;

    return (
        <div className={advantageBlockClass}>
            <div className={styles.container} >
                <figure className={`${styles.container__circle} `}>
                    <img src={line.src} alt='line' className={`${styles.container__circle_line} `}/>
                    <img src={picture.src} alt="picture" className={styles.container__circle_picture}/>
                </figure>  
                <span className={`${styles.container__heading} animate__animated animate__fadeInUp`}>{heading}</span>
                <Paragraph text={paragraph} paragraphType={paragraphType} margin={paragraphMargin} width={width}/>
            </div>
        </div>
    );
};
