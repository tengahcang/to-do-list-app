import { Center, Heading, View, Text, Box } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import  Header  from "../../components/HTodo";

const Profile = () => {
    return (
        <>
            <Header title={"category"}/>
            <Box flex={1} flexDirection="row" flexWrap="wrap" justifyContent="space-around" alignItems="center" backgroundColor="#fff">
                <Link href={{ pathname: "/ByCategory", params: {"category":"personal"} }} asChild >
                    <TouchableOpacity activeOpacity={0.5}>
                        <Box backgroundColor={"$white"} borderWidth={1} borderRadius={"$xl"} w={225} height={150} margin={10} justifyContent="center" alignItems="center" >
                            <Text>Personal</Text>
                        </Box>
                    </TouchableOpacity>
                </Link>
                <Link href={{ pathname: "/ByCategory", params: {"category":"collage"} }} asChild >
                    <TouchableOpacity activeOpacity={0.5}>
                        <Box backgroundColor={"$white"} w={225} borderWidth={1} borderRadius={"$xl"} height={150} margin={10} justifyContent="center" alignItems="center"  >
                            <Text>Collage</Text>
                        </Box>
                    </TouchableOpacity>
                </Link>
                <Link href={{ pathname: "/ByCategory", params: {"category":"home"} }} asChild >
                    <TouchableOpacity activeOpacity={0.5}>
                        <Box backgroundColor={"$white"} w={225} borderWidth={1} borderRadius={"$xl"} height={150} margin={10} justifyContent="center" alignItems="center" >
                            <Text>Home</Text>
                        </Box>
                    </TouchableOpacity>
                </Link>
                <Link href={{ pathname: "/ByCategory", params: {"category":"personal"} }} asChild >
                    <TouchableOpacity activeOpacity={0.5}>
                        <Box backgroundColor={"$white"} w={225} borderWidth={1} borderRadius={"$xl"} height={150} margin={10} justifyContent="center" alignItems="center" >
                            <Text>New</Text>
                        </Box>
                    </TouchableOpacity>
                </Link>
                
                
                
            </Box>
        </>
    );
};
export default Profile;