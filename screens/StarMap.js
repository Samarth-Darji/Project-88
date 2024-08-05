import * as React from 'react';
import {View, Text} from 'react-native';

export default class StarMapScreen extends React.Component{
    render() {
        return(
            <View style={{alignItems: 'centre', flex: 2}}>
                <Text style={{alignItems: 'centre', fontSize: 20, marginLeft: 90}}>
                    Star Map Screen!
                </Text>
            </View>
        )
    }
}