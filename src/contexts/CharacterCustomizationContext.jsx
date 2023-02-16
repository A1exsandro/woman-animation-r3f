import { createContext, useContext, useState } from 'react'

const CharacterCustomizationContext = createContext({})

export const CameraModes = {
  FREE: "FREE",
  HEAD: "HEAD",
  TOP: "TOP",
  BOTTOM: "BOTTOM"
}

export const CharacterCustomizationProvider = ({children}) => {
  const [cameraMode, setCameraMode] = useState(CameraModes.FREE)
  return (
    <CharacterCustomizationContext.Provider value={{
      cameraMode,
      setCameraMode
    }}>
      {children}
    </CharacterCustomizationContext.Provider>
  )
}

export const useCharacterCustomization = () => {
  return useContext(CharacterCustomizationContext)
}