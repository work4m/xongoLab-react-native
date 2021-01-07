import React, { useEffect, useState } from 'react';
import {
    StyleSheet, Text, View,
    FlatList, SafeAreaView, ActivityIndicator,
} from 'react-native';

import FilterBox from '../../components/SearchScreen/FilterBox';
import GameList from '../../components/SearchScreen/GameList';
import data from './data';

const SearchScreen = () => {
    const [dataLoading, setdataLoading] = useState(true);

    // data for filter
    const [listData, setlistData] = useState([...data]);

    // data to display
    const [listDataFilter, setlistDataFilter] = useState([...data]);

    const [searchList, setsearchList] = useState("");

    useEffect(() => {
        getDataFromApi();
    }, []);

    const getDataFromApi = async () => {
        try {
            const data = await fetch('http://54.201.160.69:3051/api/contest/contest', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTE4MjRhNTU2ODgzNTFjZGVjYTNhMCIsImVtYWlsIjoibWVldC5hZ2hlcmFAeG9uZ29sYWIuY29tIiwiaWF0IjoxNjA4NjI5Mzg0LCJleHAiOjE2MDg3MTU3ODR9.v68a1ARbOTO-WcRtV-CW0cEC22IoTYEzn-EPdAM5Tfo"
                }
            });
            const dataResponse = await data.json();
            if (dataResponse.code && dataResponse.code === 200) {
                setlistData(dataResponse.data);
                setdataLoading(false);
            }
        } catch (error) {
            alert(error);
        }
    }

    const onChangeFilter = (text) => {
        setsearchList(text);
        const filterText = text.trim();
        if (filterText === "") {
            // alert(filterText === "");
            resetData();
        } else {
            const filteredData = listData.filter((x) => {
                if (x.title.toUpperCase().indexOf(text.toUpperCase()) > -1) return true;
                return false;
            });
            setlistDataFilter(filteredData);
        }
        // setlistDataFilter();
    }

    const onClose = () => {
        onChangeFilter("");
        resetData();
    }

    const resetData = () => {
        setlistDataFilter(listData);
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                {
                    dataLoading
                        ?
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
                            <ActivityIndicator color="black" size="large" />
                        </View>
                        :
                        <>
                            <FilterBox
                                onChange={onChangeFilter}
                                onClose={onClose}
                                value={searchList}
                            />
                            <GameList data={listDataFilter} />
                        </>
                }
            </SafeAreaView>
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#21343b",
        flex: 1,
    },
});
