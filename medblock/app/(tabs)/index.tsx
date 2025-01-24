import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, FlatList } from "react-native";
import OpenCard, { CardType } from "@/components/OpenCard";
import ClosedCard from "@/components/ClosedCard";
import { getTrials } from "@/scripts/contract_functions";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [data, Setdata] = useState([]);

  async function getdata() {
    const trails = await getTrials();
    //@ts-ignore
    Setdata(trails);
  }

  useEffect(() => {
    getdata();
  }, []);

  const renderitem = ({ item }: { item: any }) => {
    if (item.Status === "open") {
      return <OpenCard obj={item} />;
    } else {
      return <ClosedCard obj={item} />;
    }
  };

  return (
    <SafeAreaView>
      <Text className="text-[#fdfdfd] text-2xl text-center my-4 ">Home</Text>
      <View className="w-full h-[90%] flex items-center">
        <View className="w-[90%] ">
          <FlatList
            data={data}
            renderItem={renderitem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
