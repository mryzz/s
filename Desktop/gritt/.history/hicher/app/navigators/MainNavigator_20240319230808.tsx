import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../components"
import { IndexScreen, FavoritesScreen, PostingScreen, InboxScreen, ProfileScreen } from "../screens"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import { createStackNavigator } from '@react-navigation/stack';

export type MainTabParamList = {
  Explore: undefined
  Favorites: undefined
  Post: undefined
  Inbox: undefined
  Profile: undefined
  Debug: undefined
}

export type MainTabScreenProps<T extends keyof MainTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<MainTabParamList>()

const Stack = createStackNavigator();

export const ExploreStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="IndexScreen"
        component={IndexScreen}
        options={{
          header: () => <ExploreHeader />,
          // Other options can be specified here
        }}
      />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
};

/**
 * This is the main navigator for the demo screens with a bottom tab bar.
 *
 * More info: https://reactnavigation.org/docs/bottom-tab-navigator/
 * @returns {JSX.Element} The rendered `MainNavigator`.
 */

export function MainNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Explore"
        component={ExploreStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="explore" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="heart" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Post"
        component={PostingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="add" color={focused ? colors.tint : undefined} size={100} />
          ),
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="inbox" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />

        <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon icon="profile" color={focused ? colors.tint : undefined} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
}
