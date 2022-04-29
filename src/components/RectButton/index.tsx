import {View, Text, Image, TouchableOpacity} from "react-native";
import {COLORS, FONTS, SHADOWS, SIZES} from "../../constants";

const RectButton = ({ minWidth, fontSize, handlePress, ...props }: any) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                minWidth: minWidth,
                padding: SIZES.small,
                ...props
            }}
            onPress={handlePress}
        >
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: fontSize,
                color: COLORS.white,
                textAlign: 'center'
            }}>
                Place a bid
            </Text>
        </TouchableOpacity>
    )
}

export {
    RectButton
}