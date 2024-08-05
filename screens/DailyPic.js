import * as React from 'react';
import {View, Text} from 'react-native';

export default class DailyPicScreen extends React.Component{
    render() {
        return(
            <View style={{alignItems: 'centre', flex: 2}}>
                <Text style={{alignItems: 'centre', fontSize: 20, marginLeft: 90}}>
                    Daily Pics Screen!
                </Text>
            </View>
        )
    }
}