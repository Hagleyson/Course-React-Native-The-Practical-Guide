import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button, View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { useEffect, useState } from "react";
//lembrar de alterar o app.json

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
    };
  },
});

export default function App() {
  const [pushToken, setPushToken] = useState();
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          throw new Error("Permission not granted!");
        }
      })
      .then(() => {
        console.log("Getting token");
        return Notifications.getExpoPushTokenAsync();
      })
      .then((response) => {
        const token = response.data;
        console.log(token);
        setPushToken(token);
      })
      .catch((err) => {
        console.log("error: " + err);
        return null;
      });
  });
  useEffect(() => {
    const foregroundSubscription =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("notification: ", notification);
      });

    const backgroundSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("response: ", response);
      });
    return () => {
      foregroundSubscription.remove();
      backgroundSubscription.remove();
    };
  }, []);
  const triggerNotifications = () => {
    // Notifications.scheduleNotificationAsync({
    //   content: {
    //     title: "My first local notification",
    //     body: "This is the first local notification we are sending",
    //     data: { mySpecialData: "Some text" },
    //   },
    //   trigger: {
    //     seconds: 10,
    //   },
    // });
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-Encoding": "gzip, deflte",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: pushToken,
        data: { extraData: "Some data" },
        title: "Sent via the app",
        body: "this push notification was send via the app!",
      }),
    });
  };
  return (
    <View style={styles.container}>
      <Button title="Trigger Notifications" onPress={triggerNotifications} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
