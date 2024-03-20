import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text } from "app/components/Text"

export interface ExploreHeaderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

const categories = [
  {
    name: 'Tuition',
    icon: 'book', // Representing education or study
  },
  {
    name: 'Sport',
    icon: 'football', // Can vary based on the sport, e.g., 'football', 'golf-course'
  },
  {
    name: 'Music',
    icon: 'music-note', // Representing musical notes or instruments
  },
  {
    name: 'Cooking',
    icon: 'restaurant', // Or 'kitchen', representing food and cooking
  },
  {
    name: 'Art & Design',
    icon: 'palette', // Representing creativity, painting
  },
  {
    name: 'Dance',
    icon: 'directions-run', // Suggests movement; might need to find a closer match
  },
  {
    name: 'Technology',
    icon: 'computer', // Representing computers, coding, and tech overall
  },
  {
    name: 'Language',
    icon: 'translate', // For language learning and translation
  },
  {
    name: 'Yoga',
    icon: 'self-improvement', // Representing meditation, yoga poses
  },
  {
    name: 'Photography',
    icon: 'camera-alt', // For capturing images, photography skills
  },
];

/**
 * Describe your component here
 */
export const ExploreHeader = observer(function ExploreHeader(props: ExploreHeaderProps) {
  const { style } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <Text style={$text}>ExploreHeader</Text>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const $text: TextStyle = {
  fontFamily: typography.primary.normal,
  fontSize: 14,
  color: colors.palette.primary500,
}
