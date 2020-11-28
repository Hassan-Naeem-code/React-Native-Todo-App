import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Text, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { enterDataInTodo, deleteDataFromTodo, deleteAllData, editDataFromTodoHere } from '../Store/actions/auth';

const colors = {
    themeColor: '#1E90FF',
    white: '#fff',
    gray: '#a4a4a4',
    background: '#f4f6fc',
    tint: '#2b49c3'
}
const TodoApp = () => {
    const dispatch = useDispatch();
    const getState = useSelector(({ auth }) => { return auth.name });
    const dataisHere = useSelector(({ auth }) => { return auth.todo });
    const [text, setText] = useState('');
    const [check, setCheck] = useState(false);
    const [indexNumber, setIndexNumber] = useState(0);
    console.log('The Redux State IS:', getState);
    const enterDataFromHere = () => {
        if (text === '') {
            alert('Please Fill The Field Then Press The Plus Button');
        }
        else {
            dispatch(enterDataInTodo(text));
            setText('');
        }
    }
    const deleteData = (index) => {
        dispatch(deleteDataFromTodo(index));
    }
    const deleteAllDataFromRedux = () => {
        if (!dataisHere.length) {
            alert('No Todo Found To Delete In The Todo List Dumb....');
        }
        else {
            dispatch(deleteAllData());
        }
    }
    const editTheDataInTextField = (index, item) => {
        console.log('Data we get------------------------------------------------', index, item);
        setText(item);
        setCheck(true);
        setIndexNumber(index);
    }
    const editDataEntry = () => {
        let obj = {
            index: indexNumber,
            data: text,
        }
        dispatch(editDataFromTodoHere(obj));
        setCheck(false);
        setText('');
        setIndexNumber(0);
    }


    useEffect(() => {
        console.log('Data That Is Enter In Redux Is:', dataisHere);
    });
    return (
        <View style={{ flex: 1, backgroundColor: colors.themeColor }}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.themeColor} />
            <View style={{ backgroundColor: colors.themeColor }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
                    <TouchableOpacity onPress={() => { console.log('Hello World'); }}>
                        <FontAwesome name={'bars'} size={30} color={colors.white} />
                    </TouchableOpacity>
                    <Text style={{ color: colors.white, fontSize: 24, fontWeight: 'bold' }}>Welcom To Todo App</Text>
                    <Text></Text>
                </View>
            </View>
            <View style={{ padding: 16 }}>
                <Text style={{ color: colors.white, fontSize: 22, fontWeight: 'bold' }}><FontAwesome name={'user'} size={20} color={colors.white} />   {getState}</Text>

            </View>
            <View style={{ justifyContent: 'center', width: '100%', marginTop: 15 }}>
                <TextInput style={{ backgroundColor: colors.white, borderRadius: 20, width: '80%', marginLeft: 30, color: colors.tint }} placeholder="Add Your Todo From Here..." value={text} onChangeText={(event) => { setText(event); }} />
                <TouchableOpacity style={{ position: 'absolute', right: 65 }} onPress={check ? editDataEntry : enterDataFromHere}>
                    <FontAwesome name={'plus'} size={20} color={colors.themeColor} />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    padding: 20,
                    backgroundColor: colors.white,
                    flexDirection: 'row',
                    marginTop: 30,
                    justifyContent: 'space-between',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>TASKS</Text>
                <View style={{ backgroundColor: colors.white, borderRadius: 100, paddingHorizontal: 10, paddingVertical: 5, marginLeft: 15 }}>
                    <TouchableOpacity onPress={deleteAllDataFromRedux}>
                        <FontAwesome name={'trash'} size={25} style={{ color: 'red' }} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                {
                    dataisHere.map((item, index) => {
                        return (
                            <View key={index} style={{ backgroundColor: colors.background, flexDirection: 'row', marginHorizontal: 16, marginVertical: 4, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 24, justifyContent: 'center' }}>
                                <View style={{ flex: 5 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity onPress={() => editTheDataInTextField(index, item)}>
                                        <FontAwesome name={'pencil'} size={30} style={{ color: colors.themeColor }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity onPress={() => deleteData(index)}>
                                        <FontAwesome name={'trash-o'} size={30} style={{ color: 'red' }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

export default TodoApp;