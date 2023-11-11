import { Tabs } from "expo-router/tabs";
import { Text } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
const noHead = {headerShown:false};
const TabsLayout = () => {
    return(
        <Tabs screenOptions={({route}) => ({
            tabBarIcon:({focused,color})=>{
                let iconName;
                switch (route.name){
                    case "Todo":
                        iconName = "create-sharp";
                        break;
                    case "Category":
                        iconName = "apps-sharp";
                        break;
                    case "Calender":
                        iconName = "today-sharp";
                        break;
                    case "Setting":
                        iconName = "settings-sharp";
                        break;
                    
                }
                return(
                    <Ionicons name={iconName} size={30} color={focused?"black":color}></Ionicons>
                );
            },
            tabBarStyle:{height: 70,},
            
            tabBarLabel: ({children,color,focused})=>{
                return(
                    <Text mb={"$2"} color={focused ? "$black" : color} fontSize={"$sm"}> {children} </Text>
                );
            }
        })}>
            <Tabs.Screen name="Todo" options={{title: "to do", ...noHead}}/>
            <Tabs.Screen name="Category" options={{title: "category", ...noHead}}/>
            <Tabs.Screen name="Calender" options={{title: "calender", ...noHead}}/>
            <Tabs.Screen name="Setting" options={{title: "setting", ...noHead}}/>
        </Tabs>
    );
};
export default TabsLayout;