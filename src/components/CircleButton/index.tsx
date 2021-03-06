import {View, Text, Image, TouchableOpacity} from "react-native";
import {COLORS, SHADOWS, SIZES} from "../../constants";

const CircleButton = ({ imgUrl, handlePress, ...props }: any) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: 'absolute',
                borderRadius: SIZES.extraLarge,
                alignItems: 'center',
                justifyContent: 'center',
                ...SHADOWS.light,
                ...props
            }}
            onPress={handlePress}
        >
            <Image
                source={imgUrl}
                resizeMode='contain'
                style={{
                    width: 24,
                    height: 24
                }}
            />
        </TouchableOpacity>
    )
}

export {
    CircleButton
}