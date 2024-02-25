import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const objects = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const operations = ["+", "×", "-", "÷"];
    const [parentWidth, setParentWidth] = useState(0);
    const onLayout = (event) => {
        setParentWidth(event.nativeEvent.layout.width);
    };
    const [parentWidth2, setParentWidth2] = useState(0);
    const onLayout2 = (event) => {
        setParentWidth2(event.nativeEvent.layout.width);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.upperRegion}></View>
            <View style={styles.lowerRegion}>
                <View style={styles.bar}></View>
                <View style={styles.circleContainer}>
                    <View onLayout={onLayout} style={styles.circle}>
                        {objects.map((text, index) => {
                            return (
                                <Text
                                    key={index}
                                    style={{
                                        color: "#E5E5E5",
                                        position: "absolute",
                                        transform: [
                                            { rotate: `${index * 36}deg` },
                                            { translateY: -parentWidth / 2.4 },
                                        ],
                                        fontSize: 30,
                                    }}
                                >
                                    {text}
                                </Text>
                            );
                        })}
                        <View onLayout={onLayout2} style={styles.circle2}>
                            {operations.map((text, index) => {
                                return (
                                    <Text
                                        key={index}
                                        style={{
                                            color: "#14213D",
                                            position: "absolute",
                                            transform: [
                                                { rotateZ: `${index * 90}deg` },
                                                {
                                                    translateY:
                                                        -parentWidth2 / 2.8,
                                                },
                                            ],
                                            fontSize: 40,
                                        }}
                                    >
                                        {text}
                                    </Text>
                                );
                            })}
                            <View
                                style={{
                                    backgroundColor: "black",
                                    width: "100%",
                                    height: 1,
                                    transform: [{ rotate: "-45deg" }],
                                }}
                            ></View>
                            <View
                                style={{
                                    backgroundColor: "black",
                                    width: "100%",
                                    height: 1,
                                    transform: [{ rotate: "45deg" }],
                                }}
                            ></View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    upperRegion: {
        flex: 0.45,
        padding: 20,
        backgroundColor: "#000",
        borderBlockColor: "black",
        borderWidth: 1,
    },
    lowerRegion: {
        flex: 0.55,
        padding: 20,
        paddingBottom: 50,
        gap: 20,
        alignItems: "center",
        backgroundColor: "rgba(20, 33, 61, 0.4)",
        borderBlockColor: "black",
        borderWidth: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    bar: {
        width: "40%",
        height: 10,
        borderRadius: 99,
        backgroundColor: "#E5E5E5",
    },
    circleContainer: {
        flex: 1,
        justifyContent: "center",
    },
    circle: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        aspectRatio: 1,
        borderRadius: 500,
        backgroundColor: "#14213D",
    },
    circle2: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60%",
        aspectRatio: 1,
        borderRadius: 500,
        backgroundColor: "#fff",
    },
});
