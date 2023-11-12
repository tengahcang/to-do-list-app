import { Center, Heading, View, Text, Box, FlatList } from "@gluestack-ui/themed";
import  Header  from "../../components/HTodo";
import React, {useState} from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import datas from "../../todolist";


const Calender = () => {
    const[selectedDate,setSelectedDate]=useState('');
    const[selectedItems,setSelectedItems]=useState([]);
    const handleDayPress = (day) => {
        const selectedDateString = day.dateString;
        setSelectedDate(selectedDateString);
        const selectedItems = datas.filter((item)=>item.date === selectedDateString);
        setSelectedItems(selectedItems);
    };

    const markedDates= {};
    datas.forEach((item) => {
        markedDates[item.date] = {selected: true, disableTouchEvent:false, selectedDotColor: 'orange'};
    });
    const ToDoList = ({ item }) => {
        return(
            <Box borderRadius={"$xl"} borderWidth={1} margin={10} backgroundColor={"$white"}>
                <Text> {item.title} </Text>
                <Text> {item.date} </Text>
                <Text> {item.content} </Text>
            </Box>
        );
    };
    
    return (
        <>
            <Header title={"Calender"}/>
            
            <Heading>Calender</Heading>
            <Calendar onDayPress={handleDayPress} markedDates={markedDates} />
            <View></View>
            {selectedItems.length > 0 && (
                // <Box borderRadius={"$xl"} borderWidth={1}>
                //     <Text> {selectedItems.title} </Text>
                //     <Text> {selectedItems.date} </Text>
                //     <Text> {selectedItems.content} </Text>
                // </Box>
                <FlatList data={selectedItems} keyExtractor={(item) => item.id.toString()} renderItem={({item}) => <ToDoList item={item}/>}/>
                
                
            )}
            
        </>
    );
};
export default Calender;