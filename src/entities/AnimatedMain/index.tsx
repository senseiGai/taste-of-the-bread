import { useRef } from 'react';
import { InvertedText } from '@shared/ui/InvertedTextMobile';
import { useAnimateSmallEllipse } from '@shared/lib/hooks/Animations/useAnimateSmallEllipse';
import useAnimatedLetters from '@shared/lib/hooks/Animations/useAnimatedLetters'; 
import { useAnimateBigEllipse } from '@shared/lib/hooks/Animations/useAnimatedBigEllipse';
import { useAnimateWheat } from '@shared/lib/hooks/Animations/useAnimatedWheat';
import { letters } from '@shared/lib/content/invertedLettersContent';
import { Paragraph } from '@shared/ui/Paragraph';

import big_ellipse from '@assets/Main/big_ellipse.svg';
import small_ellipse from '@assets/Main/small_ellipse.svg';
import wheat from '@assets/Main/wheat.svg';
import bread from '@assets/Main/bread.webp';

import styles from './styles.module.scss';

export const AnimatedMain = () => {

  const smallEllipseRef = useAnimateSmallEllipse();
  const letterContainerRef = useRef(null); 
  const bigEllipseRef = useAnimateBigEllipse();
  const wheatRef = useAnimateWheat();

  useAnimatedLetters(letterContainerRef); 

  return (
    <div className={styles.container}>
      <div className={`${styles.container__images} flex flex-row`}>
        <img src={small_ellipse.src} ref={smallEllipseRef} alt="small-ellipse" className={styles.container__images_small_ellipse} />
        <div ref={letterContainerRef} className="flex items-center flex-col-reverse mt-5 ml-7">
          {letters.map((letter, index) => (
            <InvertedText key={index} letter={letter} invertedTextType="mobile" />
          ))}
        </div>
        <img src={bread.src} alt="bread"  className={styles.container__images_bread}/>
        <img src={big_ellipse.src}  alt="big-ellipse" ref={bigEllipseRef} className={styles.container__images_big_ellipse}/>
        <img src={wheat.src} alt="wheat" ref={wheatRef} className={styles.container__images_wheat} />
      </div>
      <div className='flex justify-center items-center'>
        <Paragraph text='Продукция в наших пекарнях готовится исключительно из натуральных продуктов' paragraphType='mobile' margin='mt-5' width='80%'/>
      </div>
    </div>
  );
}
