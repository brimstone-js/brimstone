import React, { useContext } from 'react'
import { Language } from '../types'
import TranslationContext from './TranslationContext'

type TranslateProps = {
  [key in Language]: string
}

function Translate (props: TranslateProps): JSX.Element {
  const translation = useContext(TranslationContext)

  let text: string | undefined
  if (translation !== undefined && props[translation.language] !== undefined) {
    text = props[translation.language]
  }

  return <>{text}</>
}

export default Translate
