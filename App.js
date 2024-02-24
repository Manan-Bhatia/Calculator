import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.upperRegion}></View>
            <View style={styles.lowerRegion}>
                <View style={styles.bar}></View>
                <View style={styles.circleContainer}>
                    <View style={styles.circle}></View>
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
        width: "100%",
        height: "100%",
        aspectRatio: 1,
        borderRadius: 500,
        backgroundColor: "#14213D",
    },
});
