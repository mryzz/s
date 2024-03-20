import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { MainTabScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { useAuth } from "@clerk/clerk-expo"

interface ProfileScreenProps extends MainTabScreenProps<"Profile"> {}

export const ProfileScreen: FC<ProfileScreenProps> = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const { signOut, isSignedIn }
   
  return (
    <Screen style={$root} preset="scroll" safeAreaEdges={["top"]}>
      <Text text="profile" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
