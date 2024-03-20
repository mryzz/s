import * as React from "react"
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
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
  const { style } = props
  const $styles = [$container, style]

  return (
    <SafeAreaView style={$styles}>
      <View style={$container}>
        <View style={$actionRow}>
          {/* <Link href={'/(modals)/booking'} asChild> */}
          <TouchableOpacity>
            <View style={$searchBtn}>
              <Ionicons name="search" size={24} />
              <View>
                <Text style={{ fontFamily: 'mon-sb' }}>Where to?</Text>
                <Text style={{ color: Colors.grey, fontFamily: 'mon' }}>Anywhere · Any week</Text>
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
