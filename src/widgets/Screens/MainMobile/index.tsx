import {useAnimateSmallEllipse} from '@shared/ui/lib/hooks/Animations/useAnimateSmallEllipse'
import { useAnimatePathLetters } from '@shared/ui/lib/hooks/Animations/useAnimatePathLetters'

import big_ellipse from '@assets/Main/big_ellipse.svg'
import small_ellipse from '@assets/Main/small_ellipse.svg'
import wheat from '@assets/Main/wheat.svg'
import bread from '@assets/Main/bread.svg'

import styles from './styles.module.scss'

export default function MainMobile() {
  const smallEllipseRef = useAnimateSmallEllipse(); 


  return (
    <div className={styles.container}>
      <div className={`${styles.container__images} flex flex-row`}>
        <img src={small_ellipse.src} ref={smallEllipseRef} alt="small-ellipse" className={styles.container__images_small_ellipse} />
        <span className={styles.container__images_taste}>c</span>
        <span className={styles.container__images_taste}>y</span>
        <span className={styles.container__images_taste}>k</span>
        <span className={styles.container__images_taste}>B</span>
        <img src={bread.src} alt="bread" className={styles.container__images_bread}/>
        <img src={big_ellipse.src} alt="big-ellipse" className={styles.container__images_big_ellipse}/>
        <img src={wheat.src} alt="wheat" className={styles.container__images_wheat} />
      </div>
    </div>
  )
}
