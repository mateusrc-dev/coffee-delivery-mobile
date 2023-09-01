import { StyleSheet } from "react-native"

import { THEME } from "."

export const styles = StyleSheet.create({
    swipeableContainer: {
        width: '100%',
        height: 122,
        backgroundColor: THEME.colors.red[100],
    },
    swipeableRemove: {
        width: 90,
        height: 122,
        backgroundColor: THEME.colors.red[100],
        alignItems: 'center',
        justifyContent: 'center'
    }
})