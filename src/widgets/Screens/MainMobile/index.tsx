import React from 'react'

import big_ellipse from '@assets/Main/big_ellipse.svg'
import small_ellipse from '@assets/Main/small_ellipse.svg'
import taste from '@assets/Main/taste.svg'
import wheat from '@assets/Main/wheat.svg'
import bread from '@assets/Main/bread.svg'

import styles from './styles.module.scss'

export default function MainMobile() {
  return (
    <div className={styles.container}>
      <div className={`${styles.container__images} flex flex-row`}>
        <img src={small_ellipse.src} alt="small-ellipse" className={styles.container__images_small_ellipse} />
        <img src={taste.src} className={styles.container__images_taste} alt="Taste" />
        <img src={bread.src} alt="bread" className={styles.container__images_bread}/>
        <img src={big_ellipse.src} alt="big-ellipse" className={styles.container__images_big_ellipse}/>
        <img src={wheat.src} alt="wheat" className={styles.container__images_wheat} />
      </div>
    </div>
  )
}