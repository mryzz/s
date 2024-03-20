/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React, { useEffect } from "react"
import { useColorScheme, TouchableOpacity } from "react-native"
import * as Screens from "app/screens"
import { MainNavigator, MainTabParamList } from "./MainNavigator"
import Config from "../config"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { colors } from "app/theme"
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { Icon } from "../components" 
import { LoginModal } from "../modals/login"
import { BookingModal } from "../modals/booking"
import { DetailsPage } from "../screens/details"
import * as SecureStore from "expo-secure-store"
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';

const EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
    }
  },
};

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Welcome: undefined
  Main: NavigatorScreenParams<MainTabParamList>
  Login: undefined
  Details: undefined
  Booking: undefined
  // 🔥 Your screens go here
	// IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  const { isLoaded, isSignedIn } = useAuth();
  
  useEffect(() => {
    if (isLoaded && !isSignedIn && navigationRef.isReady()) {
      navigationRef.navigate('Login')
    }
  }, [isLoaded]);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, navigationBarColor: colors.background }}
    >
      <Stack.Screen name="Welcome" component={Screens.WelcomeScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="Login"
          component={LoginModal}
          options={({ navigation }) => ({
            // These options configure the appearance and behavior of the modal screen
            presentation: 'modal',
            title: 'Log in or sign up',
            headerTitleStyle: {
              fontFamily: 'mon-sb', // Ensure this font is loaded, as mentioned before
            },
            headerShown: true, // Show the header within the modal
            headerLeft: () => (
              <TouchableOpacity 
                onPress={() => navigation.goBack()}
              >
                <Icon icon="back" color={colors.tint} size={30} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="Booking"
          component={BookingModal}
          options={({ navigation }) => ({
            // These options configure the appearance and behavior of the modal screen
            presentation: 'transparentModal',
            animation: 'fade',
            title: 'Booking',
            headerTitleStyle: {
              fontFamily: 'mon-sb', // Ensure this font is loaded, as mentioned before
            },
            headerShown: true, // Show the header within the modal
            headerLeft: () => (
              <TouchableOpacity 
                onPress={() => navigation.goBack()}
              >
                <Icon icon="back" color={colors.tint} size={30} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Group>
      <Stack.Screen name="Details" component={DetailsPage} />
      {/** 🔥 Your screens go here */}
			{/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}
    </Stack.Navigator>
  )
})

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const [fontsLoaded, fontsError] = useFonts({
    mon: require('../../assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-b': require('../../assets/fonts/Montserrat-Bold.ttf'),
  });  
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  useEffect(() => {
  async function prepare() {
      if (fontsError) {
        console.error(fontsError);
        await SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible
      } else if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded) {
    return null; // Keep showing the splash screen
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    <ClerkProvider publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      <NavigationContainer
        ref={navigationRef}
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        {...props}
      >
        <AppStack />
      </NavigationContainer>
    </ClerkProvider>
  )
})
