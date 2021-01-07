import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const RenderItems = (props) => {
    const { title, description, image } = props.item;

    return (
        <View style={[styles.container, props.index % 2 == 0 ? { marginRight: "2%" } : { marginLeft: "2%" }]}>
            <Image
                source={{ uri: image }}
                style={{ width: "100%", height: "50%" }}
                resizeMode="stretch"
            />
            <View style={styles.textContainer}>
                <Text style={{ textAlign: 'center', color: "#60c1d1", fontSize: 20, }}>25 Questions</Text>
                <Text style={{ textAlign: 'center', color: "white" }}>{title}</Text>
                <Text
                    style={{
                        textAlign: 'center',
                        color: "white"
                    }}
                    numberOfLines={2}
                >
                    {description}
                </Text>
            </View>
        </View>
    )
};

export default RenderItems;

const styles = StyleSheet.create({
    container: {
        width: "48%",
        height: 180,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: "#b19c65",
        backgroundColor: "#21343b",
    },
    textContainer: {
        justifyContent: 'center',
        flex: 1,
        // marginVertical: 10
    },
});
