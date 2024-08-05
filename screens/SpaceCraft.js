import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class SpaceCraft extends React.Component{
  render() {
    return(
        <View style={{alignItems: 'centre', flex: 2}}>
            <Text style={{alignItems: 'centre', fontSize: 20, marginLeft: 90}}>
                Space Crafts Screen!
            </Text>
        </View>
    )
  }
}