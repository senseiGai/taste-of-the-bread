import React from 'react'
import styles from './styles.module.scss'

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
		<p className={`${paragraphClass} `} style={{ width }}>
			{text}
		</p>
	)
}

