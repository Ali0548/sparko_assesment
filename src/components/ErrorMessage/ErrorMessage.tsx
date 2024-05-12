import React from 'react'
import styles from './ErrorMessage.module.scss'


export interface ErrorMessageProps {
  text: string | undefined
}

export const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  return (
    <>
    {/* Error Messages For Form */}
        {props?.text && <div className={`${styles['errorText']}`}>{props?.text}</div>}</>
  )
}
