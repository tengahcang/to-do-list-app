import {Box, HStack, VStack, Text, Pressable, ButtonText, Image, Checkbox, CheckboxIndicator, CheckIcon, CheckboxIcon, FlatList, Button, Modal, ModalBackdrop, ModalContent, ModalHeader, Heading,ModalCloseButton,Icon, CloseIcon, ModalBody, ModalFooter } from "@gluestack-ui/themed";
import  Header  from "../../components/HTodo";
import datas from "../../todolist";
import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";

const hello = () => {
    const [showModalArray, setShowModalArray] = useState(Array(datas.length).fill(false));
    // console.log(showModal)
    const ref = React.useRef(null)
    const tampilModal = (index) => {
        const newShowModalArray = [...showModalArray];
        newShowModalArray[index] = !newShowModalArray[index];
        setShowModalArray(newShowModalArray);
    }
    const ToDoList = ({ item, index }) => {
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
                    <TouchableOpacity onPress={() => tampilModal(index) } >
                        <Box justifyContent="space-between" px={"$3"}>
                            <VStack space="xs">
                                <Text fontSize={"$sm"} color="$white"> {item.date} </Text>
                                <Text fontSize={"$xl"} color="$white"> {item.title} </Text>
                            </VStack>
                        </Box>
                    </TouchableOpacity>
                    <Modal
                        isOpen={showModalArray[index]}
                        onClose={() => {
                        tampilModal(index)
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
    return(
        <>
            <Header title={"To Do"} />
            {/* <Box
                bg={"$green400"}
                py={"$4"}
                px={"$3"}
                rounded={"$md"}
                height="132px"
                width={375}
                maxWidth="100%"
            >
                <HStack justifyContent="space-between">
                    
                    <Box justifyContent="space-between" px={"$2"}>
                        
                        <VStack space="xs">
                            <Text fontSize={"$sm"} color="$white">Today @ 9PM</Text>
                            <Text fontSize={"$xl"} color="$white">MEET anjing</Text>
                        </VStack>
                        <Pressable
                            rounded={"$xs"}
                            bg={"$green200"}
                            alignSelf="flex-start"
                            py={"$1"}
                            px={"$3"}
                        >
                            <ButtonText
                                fontSize={"$sm"}
                                fontWeight="$bold"
                                color="$white"
                            >remind me</ButtonText>
                        </Pressable>
                    </Box>
                    <Image source={(require("../../assets/reina.jpg"))}
                        alt="Aang flying and surrounded by clouds"
                        // height="100px"
                        rounded="$full"
                        // width="100px" 
                    />
                    <Checkbox size="md" isInvalid={false} isDisabled={false}>
                        <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon}/>
                        </CheckboxIndicator>
                    </Checkbox>
                </HStack>
            </Box> */}
            
            <FlatList data={datas} renderItem={ToDoList} keyExtractor={(item) => item.id} showsHorizontalScrollIndicator={true}/>
        </>
        
    );
};
export default hello;