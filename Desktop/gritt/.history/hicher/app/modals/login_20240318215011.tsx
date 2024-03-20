import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, TextFieldAccessoryProps } from "app/components"
import { useWarmUpBrowser } from "app/hooks/useWarmUpBrowser"
import { useNavigation } from "@react-navigation/native";
// import { useStores } from "app/models"

interface LoginModalProps {}

export const LoginModal: FC<LoginModalProps> = observer(function LoginModal() {
  useWarmUpBrowser()

  return (
    <Screen style={$root} preset="scroll" safeAreaEdges={["top"]}>
      <TextField
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}