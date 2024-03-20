/* eslint-disable react-native/no-inline-styles */
import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View, TextStyle } from "react-native"
import { Button, Screen, TextField, Text } from "app/components"
import { useWarmUpBrowser } from "app/hooks/useWarmUpBrowser"
import { colors, typography } from "../theme"
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler"
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
        containerStyle={{ marginBottom: 30 }}
      />
    <Button
      text="Continue"
      preset="reversed"
    />
    <View style={$seperatorView}>
      <View style={$seperatorLine}/>
      <Text text="or" style={$seperator}/>
      <View style={$seperatorLine}/>
    </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $btnIcon: TextStyle = {
  color: '#fff',
  fontSize: 16,
  fontFamily: typography.primary.medium,
}

const $footer: ViewStyle = {
  position: 'absolute',
  height: 100,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderTopColor: colors.separator,
  borderTopWidth: StyleSheet.hairlineWidth,
}

const $seperatorView: ViewStyle = {
  flexDirection: 'row',
  gap: 10,
  alignItems: 'center',

}

const $seperatorLine: ViewStyle = {
  flex: 1,
  borderBottomColor: 'black',
  borderBottomWidth: StyleSheet.hairlineWidth,
}

const $seperator: TextStyle = {
  fontFamily: typography.primary.semiBold,
  color: colors.text,
  fontSize: 16,
}


