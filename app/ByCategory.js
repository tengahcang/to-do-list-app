import { Center, Box, HStack, VStack, Text, Pressable, ButtonText, Image, Checkbox, CheckboxIndicator, CheckIcon, CheckboxIcon, FlatList, Button, Modal, ModalBackdrop, ModalContent, ModalHeader, Heading,ModalCloseButton,Icon, CloseIcon, ModalBody, ModalFooter } from "@gluestack-ui/themed";
import { useLocalSearchParams } from "expo-router";
import { TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import datas from "../todolist";



const ByCategory = () => {
    const params = useLocalSearchParams();
    const [showModal, setShowModal] = useState(false)
    const ref = React.useRef(null)
    const data = datas.filter((item) => item.category === params.category);
    const ToDoList = ({ item }) => {
        return (
            <Box
                bg={"$green400"}
                // py={"$4"}
                // px={"$3"}
                rounded={"$md"}
                // height="132px"
                // width={375}
                // maxWidth="100%"
            >
                <HStack justifyContent="space-between">
                    <TouchableOpacity onPress={() => setShowModal(true)} ref={ref}>
                        <Box justifyContent="space-between" px={"$3"}>
                            <VStack space="xs">
                                <Text fontSize={"$sm"} color="$white"> {item.date} </Text>
                                <Text fontSize={"$xl"} color="$white"> {item.title} </Text>
                            </VStack>
                        </Box>
                    </TouchableOpacity>
                    <Modal
                        isOpen={showModal}
                        onClose={() => {
                        setShowModal(false)
                        }}
                        finalFocusRef={ref}
                    >
                        <ModalBackdrop />
                        <ModalContent>
                        <ModalHeader>
                            <Heading size="lg"> {item.title} </Heading>
                            <ModalCloseButton>
                            <Icon as={CloseIcon} />
                            </ModalCloseButton>
                        </ModalHeader>
                        <ModalBody>
                            <Text>
                                date line: {item.date}
                            </Text>
                            <Text>
                                {item.content}
                            </Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                            size="sm"
                            action="positive"
                            borderWidth="$0"
                            onPress={() => {
                                setShowModal(false)
                            }}
                            >
                            <ButtonText>Ok !</ButtonText>
                            </Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
                    
                    
                    <Checkbox size="md" isInvalid={false} isDisabled={false}>
                        <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon}/>
                        </CheckboxIndicator>
                    </Checkbox>
                </HStack>
            </Box>
        );
    };
    
    return (
        <>
           
            <Center flex={1}>
                <Heading>{ params.category }</Heading>
            </Center>
            <FlatList data={data} renderItem={ToDoList} keyExtractor={(item) => item.id} showsHorizontalScrollIndicator={true} />
        </>
    );
};
export default ByCategory;