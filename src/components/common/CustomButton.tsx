import LinearGradient from "react-native-linear-gradient";

import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from "react-native";

type CustomButtonProps = {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
};

const CustomButton = ({ onPress, title }: CustomButtonProps) => (
  <LinearGradient
    colors={["#005daa", "#0cb6a4"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  >
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  </LinearGradient>
);

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "100%",
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    textAlign: "center",
  },
});
export default CustomButton;
