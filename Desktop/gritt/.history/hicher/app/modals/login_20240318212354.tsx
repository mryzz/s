import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "app/components"
import { useWarmUpBrowser } from "app/hooks/useWarmUpBrowser"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface LoginModalProps {}

export const LoginModal: FC<LoginModalProps> = observer(function LoginModal() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  useWarmUpBrowser()
  return (
    <Screen style={$root} preset="scroll" safeAreaEdges={["top"]}>
      <Text text="Login" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}