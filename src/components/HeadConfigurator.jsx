import { ColorInput, Stack } from "@mantine/core"
import { SwatchesColors, useCharacterCustomization } from "../contexts/CharacterCustomizationContext"

export const HeadConfigurator = () => {
	const { hairColor, setHairColor } = useCharacterCustomization()

	return (
		<Stack spacing={"sm"} py={"sm"}>
			<ColorInput 
				label="Hair" 
				format="hex" 
				swatches={SwatchesColors} 
				value={hairColor}
				onChange={setHairColor}
				/>
		</Stack>
	)
}