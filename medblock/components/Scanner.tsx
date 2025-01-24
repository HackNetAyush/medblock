import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { VStack } from "@/components/Vstack";
import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useState } from "react";
import { ActivityIndicator, Alert } from "react-native";

export default function Scanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanningEnabled, setScanningEnabled] = useState(true);

  if (!permission) {
    return (
      <VStack>
        <ActivityIndicator size={"large"} />
      </VStack>
    );
  }

  if (!permission.granted) {
    return (
      <VStack>
        <Text>Camera access is required to scan tickets.</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text className="text-white">Allow Camera Access</Text>
        </TouchableOpacity>
      </VStack>
    );
  }

  async function onBarcodeScanned({ data }: BarcodeScanningResult) {
    if (!scanningEnabled) return;

    try {
      alert(data);
    } catch (error) {
      Alert.alert("Error");
      setScanningEnabled(true);
    }
  }

  return (
    <CameraView
      style={{ flex: 1 }}
      facing="back"
      onBarcodeScanned={onBarcodeScanned}
      barcodeScannerSettings={{
        barcodeTypes: ["qr"],
      }}
    />
  );
}
