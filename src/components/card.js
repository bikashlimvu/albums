//Import libraries to make component
import React from 'react';
import { View } from 'react-native';

//Make a component
const Card = () => {
    return (
        <View style={styles.containerStyle}>
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }.
};

//Make components available to the other parts of the app
export default Card;
