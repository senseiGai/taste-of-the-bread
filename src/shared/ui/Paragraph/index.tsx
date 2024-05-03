import React from 'react'
import styles from './styles.module.scss'
import 'animate.css'
interface Props {
	text: string
	margin?: string
	align?: string
	width?: string
	paragraphType: string| 'mobile' 
}

export const Paragraph: React.FC<Props> = ({ text, margin, width, align, paragraphType }) => {
	const paragraphClass = `${styles.paragraph} ${
		styles[`paragraph--${paragraphType}`]
	} ${margin} ${align}`

	return (
		<p className={`${paragraphClass} animate__animated animate__fadeInUp`} style={{ width }}>
			{text}
		</p>
	)
}

