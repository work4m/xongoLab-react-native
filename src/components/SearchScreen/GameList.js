import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

import ListEmptyView from './ListEmptyView';
import RenderItems from './RenderItems';

const GameList = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(item) => item._id}
                data={props.data}
                ListEmptyComponent={() => <ListEmptyView />}
                renderItem={({ item, index }) => <RenderItems item={item} index={index} />}
                style={styles.container}
                contentContainerStyle={styles.contentContainerStyle}
                numColumns={2}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
        </View>
    )
}

export default GameList;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "white",
    },
    contentContainerStyle: {
        padding: 18,
        // backgroundColor: "red",
    },
});
