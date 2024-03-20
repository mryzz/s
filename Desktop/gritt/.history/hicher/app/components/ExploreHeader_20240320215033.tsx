import * as React from "react"
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle, StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import Categories from "../assets/categories"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from "app/navigators"

type ExploreNavigationProp = StackNavigationProp<AppStackParamList, 'Booking'>;

export interface ExploreHeaderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ExploreHeader = observer(function ExploreHeader(props: ExploreHeaderProps) {
  // const { style } = props
  // const $styles = [$container, style]
  const navigation = useNavigation<ExploreNavigationProp>();

  return (
    <SafeAreaView>
      <View style={$container}>

          {/* <Link href={'/(modals)/booking'} asChild> */}
          <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
            <View style={$searchBtn}>
              <Ionicons name="search" size={24} />
              <View style={$headerText}>
                <Text text="Find Class"style={[$text, {fontFamily: typography.primary.semiBold }]}/>
                <Text text="Anywhere · Any week" style={[$text, { color: colors.palette.neutral500, fontFamily: typography.primary.normal }]}/>
              </View>
              <TouchableOpacity style={$filterBtn}>
                <Ionicons name="options-outline" size={28} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
})

const $container: ViewStyle = {
  backgroundColor: '#fff',
  height: 130,
  elevation: 2,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 6,
  shadowOffset: {
    width: 1,
    height: 10,
  },
}

const $headerText: ViewStyle = {
  marginRight: 10,
}

const $text: TextStyle = {
  fontSize: 14,
  position: "relative",
}

const $searchBtn: ViewStyle = {
  backgroundColor: '#fff',
  flexDirection: 'row',
  gap: 10,
  padding: 14,
  paddingHorizontal: 24,
  paddingBottom: 16,
  alignSelf: 'center',
  alignItems: 'center',
  height: 55,
  width: 325,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: '#c2c2c2',
  borderRadius: 30,
  elevation: 4,
  shadowColor: '#000',
  shadowOpacity: 0.12,
  shadowRadius: 8,
  shadowOffset: {
    width: 1,
    height: 1,
  },
}
const $filterBtn: ViewStyle = {
  padding: 10,
  borderWidth: 1,
  borderColor: '#A2A0A2',
  borderRadius: 24,
  height: 20,
  width: 20,
}