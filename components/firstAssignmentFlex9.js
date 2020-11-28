import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const FirstAssgnment = () => {
    const getState = useSelector(({ auth }) => { return auth.name });
    console.log('Get The State from Redux Here: ', getState);
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flex: 2, justifyContent: 'center', alignContent: 'center', borderRightColor: 'black', border: 1, alignItems: 'center', alignSelf: 'center', backgroundColor: 'purple', height: 245 }}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>1</Text>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignContent: 'center', borderRightColor: 'black', border: 1, alignItems: 'center', alignSelf: 'center', backgroundColor: 'orange', height: 245 }}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>2</Text>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignContent: 'center', borderRightColor: 'black', border: 1, alignItems: 'center', alignSelf: 'center', backgroundColor: 'coral', height: 245 }}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>3</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flex: 2, justifyContent: 'center', alignContent: 'center', borderRightColor: 'black', border: 1, alignItems: 'center', alignSelf: 'center', backgroundColor: 'orange', height: 245 }}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>4</Text>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignContent: 'center', borderRightColor: 'black', border: 1, alignItems: 'center', alignSelf: 'center', backgroundColor: 'coral', height: 245 }}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>5</Text>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignContent: 'center', borderRightColor: 'black', border: 1, alignItems: 'center', alignSelf: 'center', backgroundColor: 'purple', height: 245 }}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>6</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flex: 2, justifyContent: 'center', alignContent: 'center', borderRightColor: 'black', border: 1, alignItems: 'center', alignSelf: 'center', backgroundColor: 'purple', height: 245 }}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>7</Text>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignContent: 'center', borderRightColor: 'black', border: 1, alignItems: 'center', alignSelf: 'center', backgroundColor: 'orange', height: 245 }}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>8</Text>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center', alignContent: 'center', borderRightColor: 'black', border: 1, alignItems: 'center', alignSelf: 'center', backgroundColor: 'coral', height: 245 }}>
                        <Text style={{ fontSize: 30, color: 'white', fontWeight: 'bold' }}>9</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FirstAssgnment;