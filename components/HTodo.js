import { Box, HStack, Image, Heading} from "@gluestack-ui/themed"
import { StatusBar } from "react-native"
import { SafeAreaView } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
const header = ({ title, withBack = false }) => {
    const navigation = useNavigation();
    return(
        <SafeAreaView>
            <StatusBar barStyle={"light"} backgroundColor={"#10b981"} />
            <Box bg={"#10b981"} p={"$4"}> 
                <HStack justifyContent="space-between" alignItems="center">
                    <HStack alignItems="center">
                        {!withBack ? (
                            <>
                                <Image source={require("../assets/MindU.png")} w="$20" h="$20" alt="MindULogo" mr={"$3"} />
                            </>
                        ) : (
                            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()} >
                                <Box mr={"$3"}>
                                    <Ionicons name="arrow-back-outline" size={32} color="white" />
                                </Box>
                            </TouchableOpacity>
                        )}
                        <Heading color={"$white"}>{title}</Heading>
                    </HStack>
                    <HStack>
                        <Ionicons name="notifications-outline" size={20} />
                    </HStack>
                </HStack>
            </Box>
        </SafeAreaView>
    );
};
export default header;