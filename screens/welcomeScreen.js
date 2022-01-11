import React from 'react';
import { Image, ImageBackground } from 'react-native';

function welcomeScreen(props) {
    return (
        <ImageBackground
            styles={styles.background}
            source={require('../assets/background.jpg')} />
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    }
})

export default welcomeScreen;
