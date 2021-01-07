import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListEmptyView = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>No context available</Text>
    </View>
);

export default ListEmptyView;
