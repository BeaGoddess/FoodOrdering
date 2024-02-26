import { FlatList } from "react-native";
import orders from "@assets/data/orders";
import OrdersListItem from "@/components/OrdersListItem";
import { Stack } from "expo-router";

export default function OrdersScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Orders" }} />

      <FlatList
        data={orders}
        renderItem={({ item }) => <OrdersListItem order={item}/>}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </>
  );
}
