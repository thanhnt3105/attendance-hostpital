import {
  Button,
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import CustomButton from "../components/common/CustomButton";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
  navigation: NavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [step, setStep] = useState(1);
  return (
    <ImageBackground
      source={require("../../assets/home.png")}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "44%",
          backgroundColor: "#FFFFFF",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          padding: 28,
          gap: 18,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            color: "#1D1E1F",
          }}
        >
          Smart & Fast
        </Text>
        <Text>
          Get interesting promos here, register your account immediately so you
          can meet your animal needs.
        </Text>
        {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
          color="#841584"
        /> */}
        <Text>{step}</Text>
        <CustomButton title="Next" onPress={() => setStep(step + 1)} />
        <Text style={{ color: "#39BBB5" }}>Skip</Text>
        <StatusBar />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
