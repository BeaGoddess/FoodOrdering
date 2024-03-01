import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import OrdersListItem from "@/components/OrdersListItem";
import OrderItemListItem from "@/components/OrderItemListItem";
import { useOrderDetails } from "@/api/orders";

const OrderDetailsScreen = () => {
  // Query params from URL (id)
  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(typeof idString === "string" ? idString : idString[0]);

  // Data from Api
  const { data: order, error, isLoading } = useOrderDetails(id);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error || !order) {
    return <Text>Failed to fetch orders</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order #${order.id}` }} />

      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem orderItem={item} />}
        contentContainerStyle={{ gap: 10 }}
        ListHeaderComponent={() => <OrdersListItem order={order} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
    flex: 1,
  },
});

export default OrderDetailsScreen;
