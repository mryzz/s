import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, TextField } from "app/components"
import { useWarmUpBrowser } from "app/hooks/useWarmUpBrowser"
import { useNavigation } from "@react-navigation/native";
// import { useStores } from "app/models"

interface LoginModalProps {}

export const LoginModal: FC<LoginModalProps> = observer(function LoginModal() {
  useWarmUpBrowser()

  const [input, setInput] = useState("")
  const inputRef = useRef()

  return (
    <Screen style={$root} preset="scroll" safeAreaEdges={["top"]}>
      <TextField
        value={input}
        onChangeText={setInput}
        placeholder="Email"
        autoCapitalize="none"
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $footer: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: typography.primary.medium,
  textAlign: "center",
  flexShrink: 1,
  flexGrow: 0,
  zIndex: 2,
}