import deepmerge from 'deepmerge';
import { Platform, StyleSheet } from 'react-native';
import ResponsiveStylesSheet from 'react-native-responsive-stylesheet';
import { ScaledSheet } from 'react-native-size-matters';
import { PLATFORM } from '../../theme/variables/commonColor';

import Utils from '../../utils/Utils';

/**
 *
 */
export default function computeStyleSheet(): StyleSheet.NamedStyles<any> {
  const commonColor = Utils.getCurrentCommonColor();
  const commonStyles = ScaledSheet.create({
    selected: {
      opacity: 0.5
    },
    text: {
      fontSize: '15@s',
      color: commonColor.textColor
    },
    userContent: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderBottomWidth: 1,
      alignItems: 'center',
      borderBottomColor: commonColor.listBorderColor,
      paddingLeft: '5@s',
      paddingRight: '5@s',
      height: '80@s',
      width: '100%'
    },
    columnContainer: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '75%',
      paddingLeft: '3@s'
    },
    left: {
      width: '20%',
      paddingLeft: '3%'
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      flex: 0
    },
    firstName: {
      marginRight: '5@s',
      maxWidth: '50%'
    },
    name: {
      flex: 1
    },
    email: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      marginBottom: '3@s'
    },
    status: {
      backgroundColor: commonColor.containerBgColor,
      borderWidth: 1,
      margin: 0,
      height: '21@s'
    },
    statusContainer: {
      marginLeft: '7@s',
      marginBottom: 0
    },
    active: {
      borderColor: commonColor.brandSuccess,
      color: commonColor.brandSuccess
    },
    statusText: {
      fontSize: '11@s',
      fontWeight: 'bold',
      lineHeight: Platform.OS === PLATFORM.ANDROID ? 1 : 0
    },
    inactive: {
      color: commonColor.brandDanger,
      borderColor: commonColor.brandDanger
    },
    pending: {
      color: commonColor.brandWarning,
      borderColor: commonColor.brandWarning
    },
    role: {
      fontSize: '12@s'
    },
    roleContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%'
    }
  });
  const portraitStyles = {};
  const landscapeStyles = {};
  return ResponsiveStylesSheet.createOriented({
    landscape: deepmerge(commonStyles, landscapeStyles) as StyleSheet.NamedStyles<any>,
    portrait: deepmerge(commonStyles, portraitStyles) as StyleSheet.NamedStyles<any>
  });
}
