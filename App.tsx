import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {DetailScreen, HomeScreen} from "./src/Screens";

type RootStackParamList = {
    HomeScreen: undefined;
    DetailScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: 'transparent'
  }
}

const App = () => {

    const [loaded] = useFonts({
        InterBold: require('./assets/fonts/Inter-Bold.ttf'),
        InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
        InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
        InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
        InterLight: require('./assets/fonts/Inter-Light.ttf')
    });

    if(!loaded) return null;

    return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
