import React from 'react';
import {
    StyleSheet, Text, View,
    TextInput, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FilterBox = ({ value, onClose, onChange }) => {
    return (
        <View style={styles.container}>
            <Icon name="search" size={24} color="white" />
            <View width={15} />
            <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.textInput}
                placeholder={"Keywords of games"}
                placeholderTextColor="gray"
            />
            <View width={15} />
            <Icon name="times-circle" size={24} color="white" onPress={onClose} />
        </View>
    )
}

export default FilterBox;

const styles = StyleSheet.create({
    container: {
        // width: "100%",
        flexDirection: 'row',
        // backgroundColor: "red",
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomColor: "white",
        borderBottomWidth: 0.6,
        marginHorizontal: 10,
    },
    textInput: {
        flex: 1,
        color: "white",
        fontSize: 18,
    },
});
