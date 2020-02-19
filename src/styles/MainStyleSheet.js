/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
const MainStyleSheet = StyleSheet.create({
    fullSizeContainer: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
    justifyContentCenter: {
        justifyContent: 'center'
    },
    halfHeightContainer: {
        height: '50%'
    },
    hight25Container: {
        height: Dimensions.get('screen').height / 4
    },
    flexBox1 :{
        flex : 1
    },
    thirtyPercentHeightContainer: {
        height : '30%'
    },
    alignItemsStart: {
        alignItems: 'flex-start'
    },
    justifyContentStart: {
        justifyContent:'flex-start'
    },
    fullWidthContainer: {
        width: Dimensions.get('screen').width
    }
});
export const dynamicHeight = (style) => {
    return {
        height: Dimensions.get('screen').height - style
    }
}
export default MainStyleSheet;