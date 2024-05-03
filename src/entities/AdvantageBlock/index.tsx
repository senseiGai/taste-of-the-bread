import React from 'react';
import { Paragraph } from '@shared/ui/Paragraph';
import styles from './styles.module.scss';

interface IAdvantage {
    advantageBlockType: 'muka-mobile'; 
    circle: ImageMetadata;
    margin?: string;
    picture: ImageMetadata;
    heading: string;
    paragraph: string;
    paragraphType: string;
    paragraphMargin: string;
}

export const AdvantageBlock: React.FC<IAdvantage> = ({ advantageBlockType, margin = '',picture,heading,paragraph, paragraphType, paragraphMargin }) => {
    const advantageBlockClass = `${styles.advantage} ${styles[advantageBlockType]} ${margin ? margin : ''}`;

    return (
        <div className={advantageBlockClass}>
            <div className={styles.container} >
                <div className={styles.container__circle}>  
                    <img src={picture.src} alt="picture" className={styles.container__circle_picture}/>
                </div>  
                <span className={styles.container__heading}>{heading}</span>
                <Paragraph text={paragraph} paragraphType={paragraphType} margin={paragraphMargin}/>
            </div>
       </div>
    );
};
