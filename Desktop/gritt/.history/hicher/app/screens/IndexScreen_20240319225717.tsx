import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { MainTabScreenProps } from "app/navigators"
import { Screen } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface IndexScreenProps extends MainTabScreenProps<"Explore"> {}

export const IndexScreen: FC<IndexScreenProps> = observer(function IndexScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll" safeAreaEdges={["top"]}>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  marginTop: 80,
}
