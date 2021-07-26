import * as React from 'react'
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import data from '../handle/data'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const copyTitle = data.TitleData.slice();
const copyRestaurant = data.RestaurantData.slice();

const FilterScreen = ({navigation})=>{

    const [searchData, setSearchData] = React.useState('')

    let ListContent = [];
    for (let i = 0 ; i < copyTitle.length ; i++){
        ListContent.push({id: i, content: copyTitle[i].name})
    }

    for (let i = 0 ; i < copyRestaurant.length ; i++){
        ListContent.push({id: copyTitle.length + i, content: copyRestaurant[i].name})
    }

    const renderContent = ({item}) => {
        return (
            <TouchableOpacity style = {{
                height: 30,
                padding: 5,
                paddingHorizontal: 20,
                backgroundColor: 'red',
                margin: 10,
                borderRadius: 15
            }}
            onPress = {() => {
                navigation.navigate('Search', {data: item.content})
            }}>
                <Text style = {{
                    fontWeight: 'bold',
                    color: 'white'
                }}>{item.content}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <SafeAreaView style= {{
            flex: 1, 
            alignItems: 'center',
            }}>
            <View style = {{
                minHeight: "7%", 
                marginTop: "5%", 
                alignItems: 'center', 
                justifyContent: 'center',
                }}>
                <Image source={require ("../assets/Logo/logo.png")}
                resizeMode="contain"
                style= {{
                width: 60,
                height: 60,
                tintColor: 'red'
                }}></Image>
            </View>
            <View style={{
                minHeight: 70, 
                maxHeight: 70, 
                alignItems: 'center', 
                justifyContent: 'center',
                width: "80%",
                marginHorizontal: "10%",
                flexDirection: 'row'
                }}>
                <TextInput
                    style={{
                        marginLeft: 10,
                        paddingLeft: 10, 
                        paddingRight: 10, 
                        borderColor: '#000000', 
                        borderWidth: 1, 
                        borderRadius: 5, 
                        opacity: 0.6,
                        width: "100%"  
                    }}
                    placeholder="Search for products"
                    onChangeText = {(val) => setSearchData(val)}>
                </TextInput>
                <TouchableOpacity style= {{
                    marginLeft: 10,
                    borderRadius: 5,
                    backgroundColor: 'red',
                    paddingLeft:10,
                    paddingRight: 10,
                    paddingTop: 9,
                    paddingBottom: 9,
                    justifyContent: 'center'
                    }}
                    onPress = {() => {
                        if (searchData.length > 0){
                        navigation.navigate('Search', {data: searchData})
                        }
                    }}>
                    <MaterialCommunityIcons name="magnify" style={{
                    color: 'white'
                    }}/>
                </TouchableOpacity>
            </View>
            <FlatList
            data = {ListContent}
            keyExtractor = {(item) => item.id.toString()}
            renderItem = {renderContent}
            numColumns = {2}
            style = {{
            width: deviceWidth - 40,
            marginHorizontal: 20 
            }}/>
        </SafeAreaView>
    )
}
export default FilterScreen