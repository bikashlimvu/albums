//Import libraries to make component
import React from 'react';
import { View, Text } from 'react-native';

//Make a component
const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    );
};

//Make components available to the other parts of the app
export default AlbumDetail;
