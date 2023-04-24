import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export function ItemDaLista(props){
    return(
        <View style={styles.container}>
            <View style={styles.image}>
                <Image
                    source={{
                        uri: props.url
                    }}
                    style={styles.image}
                />
            </View>
            
            <View style={styles.informations}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.role}>{props.cell}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
    },
    informations: {
        justifyContent: 'center',
    },
    image: {
        height: 50,
        width: 50,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    role: {
        fontSize: 13,
        color: '#5a5a5a',
    }
})