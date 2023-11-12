import { Center, Heading, View, Text, Box } from "@gluestack-ui/themed";
import  Header  from "../../components/HTodo";
import React, {useState} from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import datas from "../../todolist";


const Calender = () => {
    const[selectedDate,setSelectedDate]=useState('');
    const[selectedItem,setSelectedItem]=useState(null);
    const handleDayPress = (day) => {
        const selectedDateString = day.dateString;
        setSelectedDate(selectedDateString);
        const selectedItem = datas.find((item)=>item.date === selectedDateString);
        setSelectedItem(selectedItem);
    };

    const markedDates= {};
    datas.forEach((item) => {
        markedDates[item.date] = {selected: true, disableTouchEvent:false, selectedDotColor: 'orange'};
    });
    
    return (
        <>
            <Header title={"Calender"}/>
            
            <Heading>Calender</Heading>
            <Calendar onDayPress={handleDayPress} markedDates={markedDates} />
            <View></View>
            {selectedItem && (
                <Box borderRadius={"$xl"} borderWidth={1}>
                    <Text> {selectedItem.title} </Text>
                    <Text> {selectedItem.date} </Text>
                    <Text> {selectedItem.content} </Text>

                </Box>
            )}
            
        </>
    );
};
export default Calender;