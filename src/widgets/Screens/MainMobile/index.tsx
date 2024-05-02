import { useRef } from 'react';
import { InvertedText } from '@shared/ui/InvertedTextMobile';
import { useAnimateSmallEllipse } from '@shared/ui/lib/hooks/Animations/useAnimateSmallEllipse';
import useAnimatedLetters from '@shared/ui/lib/hooks/Animations/useAnimatedLetters'; 
import { useAnimatedBread } from '@shared/ui/lib/hooks/Animations/useAnimatedBread';
import { letters } from '@shared/ui/lib/content/invertedLettersContent';

import big_ellipse from '@assets/Main/big_ellipse.svg';
import small_ellipse from '@assets/Main/small_ellipse.svg';
import wheat from '@assets/Main/wheat.svg';
import bread from '@assets/Main/bread.svg';

import styles from './styles.module.scss';

export default function MainMobile() {
  const smallEllipseRef = useAnimateSmallEllipse();
  const breadRef = useAnimatedBread();
  const letterContainerRef = useRef(null); 

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
        <img src={bread.src} ref={breadRef} alt="bread" className={styles.container__images_bread}/>
        <img src={big_ellipse.src} alt="big-ellipse" className={styles.container__images_big_ellipse}/>
        <img src={wheat.src} alt="wheat" className={styles.container__images_wheat} />
      </div>
    </div>
  );
}
