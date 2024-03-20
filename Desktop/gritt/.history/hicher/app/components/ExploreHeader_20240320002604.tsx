import * as React from "react"
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle, StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import Categories from "../assets/categories"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

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

  return (
    <SafeAreaView>
      <View style={$container}>
        <View style={$actionRow}>
          {/* <Link href={'/(modals)/booking'} asChild> */}
          <TouchableOpacity>
            <View style={$searchBtn}>
              <Ionicons name="search" size={24} />
              <View>
                <Text text="Find Class"style={{ fontFamily: typography.primary.semiBold }}/>
                <Text text="Anywhere · Any week" style={{ color: colors.palette.neutral500, fontFamily: typography.primary.normal }}/>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={$filterBtn}>
            <Ionicons name="options-outline" size={24} />
          </TouchableOpacity>
        </View>
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

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}

const $actionRow: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 24,
  paddingBottom: 16,
}

const $searchBtn: ViewStyle = {
  backgroundColor: '#fff',
  flexDirection: 'row',
  gap: 10,
  padding: 14,
  alignItems: 'center',
  height: 80,
  width: 300,
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
}