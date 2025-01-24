import React from "react";
import { View, Text, Button } from "react-native";

const ScannedData = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const { qrData } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Scanned QR Data:</Text>
      <Text style={{ fontSize: 18 }}>{qrData}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ScannedData;
