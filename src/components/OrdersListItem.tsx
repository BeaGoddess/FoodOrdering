import { StyleSheet, Text, Pressable, View } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link, useSegments} from "expo-router";
import { Tables } from "@/database.types";

dayjs.extend(relativeTime);

type OrdersListItemProps = {
  order: Tables<"orders">;
};

const OrdersListItem = ({ order }: OrdersListItemProps) => {
    const segments = useSegments();
  
    return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable style={styles.container}>
        <View>
          <Text style={styles.textOrder}>Order #{order.id}</Text>
          <Text style={styles.textTime}>
            {dayjs(order.created_at).fromNow()}
          </Text>
        </View>

        <Text style={styles.textStatus}>{order.status}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textOrder: {
    fontWeight: "bold",
    marginVertical: 5,
  },
  textTime: {
    color: "gray",
  },
  textStatus: {
    fontWeight: "500",
  },
});

export default OrdersListItem;
