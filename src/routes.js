import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./pages/main";
import Login from "./pages/login";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}
                    options={{
                        title: "LOGIN",
                        headerTitleAlign: "center",
                        headerStyle: {
                            backgroundColor: "#8c018c",
                        },
                        headerTitleStyle: {
                            fontWeight: "bold",
                            color: "#FFF"
                        }
                    }} />
                <Stack.Screen name="Main" component={Main}
                    options={{
                        title: "GitHub Viewer",
                        headerTitleAlign: "center",
                        headerLeft: null,
                        headerStyle: {
                            backgroundColor: "#8c018c",
                        },
                        headerTitleStyle: {
                            fontWeight: "bold",
                            color: "#FFF"
                        }
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}