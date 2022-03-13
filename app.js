import React, { useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet } from "react-native";
import { Draw } from "react-native-draw-image";

const App = () => {
    const [image, setImage] = useState(null);
    const [color, setColor] = useState("#ff0000");

    const randomColor = () => {
        let rColor = "#";
        for (let i = 0; i < 6; i++) {
            const random = Math.random();

            // eslint-disable-next-line no-bitwise
            const bit = (random * 16) | 0;
            rColor += bit.toString(16);
        }
        return rColor;
    };

    const onPress = async () => {
        const newImage = await this.draw?.export();
        setImage(newImage);
    };

    const onUndoPress = () => {
        this.draw.undo();
    };

    const onColorPress = () => {
        setColor(randomColor());
    };

    return (
        <SafeAreaView style={styles.app}>
            {image ? (
                <Image style={{ flex: 1 }} source={{ uri: `data:image/png;base64,${image}` }} />
            ) : (
                <Draw
                    ref={el => (this.draw = el)}
                    strokeColor={color}
                    uri={
                        "https://yt3.ggpht.com/a/AATXAJzY05FWFkxKyQxF28iHkGxHTbElWqFAsnnYyA=s900-c-k-c0xffffffff-no-rj-mo"
                    }
                />
            )}
            <Button title="Export" onPress={onPress} />
            <Button title="Undo" onPress={onUndoPress} />
            <Button title="Switch color" onPress={onColorPress} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    app: {
        flex: 1
    }
});

export default App;
