import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { MainTabScreenProps } from "app/navigators"
import { Screen, Button } from "app/components"
import { useAuth } from "@clerk/clerk-expo"
import { useNavigation } from "@react-navigation/native";

interface ProfileScreenProps extends MainTabScreenProps<"Profile"> {}

export const ProfileScreen: FC<ProfileScreenProps> = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  const navigation = useNavigation()
  const { signOut, isSignedIn } = useAuth()
   
  return (
    <Screen style={$root} preset="scroll" safeAreaEdges={["top"]}>
      <Button
        text="Log out"
        preset="default"
        onPress={() => signOut()}
      />
      {!isSignedIn && (
        <Button
          text="Log in"
          preset="filled"
          onPress={() => navigation.navigate('Login')}
        />
      )}
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
