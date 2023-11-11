// import { config } from "@gluestack-ui/config";
// import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed";

// const App = () => {
//     return (
//         <GluestackUIProvider config={config}>
//             <Box w={"$full"} justifyContent="center" alignContent="center">
//                 <Text justifyContent="center">Open up app/index.js to start working on your app!</Text>
//             </Box>
//         </GluestackUIProvider>
//     );
// };

// export default App;
import { Redirect } from "expo-router";
const root = () => {
    return <Redirect href="/Todo" />
};
export default root;