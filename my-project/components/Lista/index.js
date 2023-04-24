import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {ItemDaLista} from '../ItemDaLista';

export function Lista(props){
    return(
        <FlatList 
            data={props.data}
            renderItem={({item}) => (
                <ItemDaLista url={item.url} name={item.name} cell={item.cell} />
            )}
            keyExtractor={item => item.key}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
})