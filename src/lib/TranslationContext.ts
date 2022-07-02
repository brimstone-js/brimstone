import { createContext } from 'react'
import { Language } from '../types'

const TranslationContext = createContext<{
  /**
   * The current language
   */
  language: Language

  /**
   * Setter for current language
   */
  setLanguage: (language: Language) => void
} | undefined>(undefined)

export default TranslationContext
