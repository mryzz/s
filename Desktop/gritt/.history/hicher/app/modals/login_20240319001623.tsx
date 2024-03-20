/* eslint-disable react-native/no-inline-styles */
import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View, TextStyle } from "react-native"
import { Button, Screen, TextField, Text } from "app/components"
import { useWarmUpBrowser } from "app/hooks/useWarmUpBrowser"
import { colors, typography, spacing } from "../theme"
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler"
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from "@clerk/clerk-expo"
// import { useStores } from "app/models"

interface LoginModalProps {}

export const LoginModal: FC<LoginModalProps> = observer(function LoginModal() {
  useWarmUpBrowser()
  

  const [input, setInput] = useState("")
  const inputRef = useRef()

  return (
    // For email and continue
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

    {/* For the seperator */}
    <View style={$seperatorView}>
      <View style={$seperatorLine}/>
      <Text text="or" style={$seperator}/>
      <View style={$seperatorLine}/>
    </View>

    {/* For social Login */}
    <View style={{ gap: 20 }}>
      <TouchableOpacity style={$btnOutline}>
        <Ionicons name="call-outline" size={24} style={$btnIcon} />
        <Text style={$btnOutlineText}>Continue with Phone</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={$btnOutline} onPress={() => onSelectAuth(Strategy.Apple)}>
        <Ionicons name="logo-apple" size={24} style={$btnIcon} />
        <Text style={$btnOutlineText}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={$btnOutline} onPress={() => onSelectAuth(Strategy.Google)}>
        <Ionicons name="logo-google" size={24} style={$btnIcon} />
        <Text style={$btnOutlineText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={$btnOutline} onPress={() => onSelectAuth(Strategy.Facebook)}>
        <Ionicons name="logo-linkedin" size={24} style={$btnIcon} />
        <Text style={$btnOutlineText}>Continue with LinkedIn</Text>
      </TouchableOpacity>
    </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $btnOutline: ViewStyle = {
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: colors.text,
  height: 60,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  marginHorizontal: spacing.md,
}

const $btnOutlineText: TextStyle = {
  color: colors.text,
  fontSize: 18,
  fontFamily: typography.primary.semiBold,
}

const $btnIcon: TextStyle = {
  fontSize: 24,
  fontFamily: typography.primary.semiBold,
  position: "absolute",
  left: 0,
  padding: 10
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
  marginVertical: 20,
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


