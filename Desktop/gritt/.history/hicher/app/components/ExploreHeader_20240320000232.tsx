import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"
import Categories from "../assets/categories"
import { SafeAreaView } from "react-native-safe-area-context"

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
      <Text style={$text}>ExploreHeader</Text>
    </SafeAreaView>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: '#fff'
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
