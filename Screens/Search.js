import * as React from 'react'
import {Text, View, SafeAreaView, TextInput,
TouchableOpacity, Image} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'
import Data from '../handle/data'
import { FlatList } from 'react-native-gesture-handler'
import data from '../handle/data'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const copyData = data.ProductData.slice()
const copyRestaurant = data.RestaurantData.slice()
const copyTitle = data.TitleData.slice()

const SearchScreen = ( {route, navigation} ) =>{
    const {data} = route.params
    const [dataSearch, setDataSearch] = React.useState(data)
    const [searchTitle, setSearchTitle] = React.useState(data)

    var tempData = []
    let tempSearchData = dataSearch.toUpperCase()
    for (let i = 0 ; i < copyData.length ; i++){
        let name = copyData[i].name.toUpperCase();
        if (name.includes(tempSearchData)){
            tempData.push(copyData[i]);
        }
        else {
            let restaurant = copyRestaurant[copyData[i].restaurant - 1].name.toUpperCase();
            if (restaurant.includes(tempSearchData) || tempSearchData.includes(restaurant)){
                tempData.push(copyData[i])
            }
            else {
                let title = copyTitle[copyData[i].title - 1].name.toUpperCase()
                if (tempSearchData.includes(title)){
                    tempData.push(copyData[i])
                }
            }
        }
    }
    const [productData, setProductData] = React.useState(tempData)
    function renderData(){
        let tempData = []
        let tempSearchData = dataSearch.toUpperCase()
        for (let i = 0 ; i < copyData.length ; i++){
            let name = copyData[i].name.toUpperCase();
            if (name.includes(tempSearchData)){
                tempData.push(copyData[i]);
            }
            else {
                let restaurant = copyRestaurant[copyData[i].restaurant - 1].name.toUpperCase();
                if (restaurant.includes(tempSearchData) || tempSearchData.includes(restaurant)){
                    tempData.push(copyData[i])
                }
                else {
                    let title = copyTitle[copyData[i].title - 1].name.toUpperCase()
                    if (tempSearchData.includes(title)){
                        tempData.push(copyData[i])
                    }
                }
            }
        }
        setProductData(tempData)
        setSearchTitle(dataSearch)
    }
    function getRestaurantName (item){
        return copyRestaurant[item.restaurant - 1].name
    }
    const renderProduct = ({item}) => {
        return (
            <TouchableOpacity style = {{
                width: deviceWidth - 40,
                height: deviceHeight / 6,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 1,
                flexDirection: 'row'
            }} onPress = {() => {
                navigation.navigate('Detail', item)
            }}>
                <Image source = {item.image} style = {{
                    height: deviceHeight / 6 - 2,
                    width: (deviceWidth - 40) / 3,
                    borderRadius: 10,
                }}></Image>
                <View style = {{
                    width: deviceWidth - 40 - (deviceWidth - 40) / 3 - 2,
                    height: deviceHeight / 6 - 2,
                    borderRadius: 10,
                    flexDirection: 'column'
                }}>
                    <Text style = {{
                        alignSelf: 'center',
                        height: (deviceHeight / 6 - 2) / 4,
                        color: 'orange',
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>{item.name}</Text>
                    <View style = {{
                        width: deviceWidth - 40 - (deviceWidth - 40) / 3 - 20,
                        marginHorizontal: 10,
                        height: (deviceHeight / 6 - 2) * 3/4 - 10,
                        flexDirection: 'column'
                    }}>
                        <View style = {{
                            flexDirection: 'row',
                            width: deviceWidth - 40 - (deviceWidth - 40) / 3 - 20,
                            height: ((deviceHeight / 6 - 2) * 2/4 - 10) / 2,
                            alignItems: 'center'
                        }}>
                            <MaterialCommunityIcons name = "details" size = {20} style = {{
                                marginRight: 10,
                                color: 'red'
                            }}/>
                            <Text style = {{
                                fontSize: 13,
                                width: deviceWidth - 40 - (deviceWidth - 40) / 3 - 40
                            }}>Model {item.name} for a wonderfull day</Text>
                        </View>
                        <View style = {{
                            flexDirection: 'row',
                            width: deviceWidth - 40 - (deviceWidth - 40) / 3 - 20,
                            height: ((deviceHeight / 6 - 2) * 2/4 - 10) / 2,
                            alignItems: 'center'
                        }}>
                            <MaterialCommunityIcons name = "silverware" size = {20} style = {{
                                marginRight: 10,
                                color: 'red'
                            }}/>
                            <Text style = {{
                                fontSize: 13,
                                width: deviceWidth - 40 - (deviceWidth - 40) / 3 - 40
                            }}>Provided by: {getRestaurantName(item)}</Text>
                        </View>
                        <View style = {{
                            flexDirection: 'row',
                            width: deviceWidth - 40 - (deviceWidth - 40) / 3 - 20,
                            height: ((deviceHeight / 6 - 2) * 2/4 - 10) / 2,
                            alignItems: 'center'
                        }}>
                            <MaterialCommunityIcons name = "currency-usd" size = {20} style = {{
                                marginRight: 10,
                                color: 'red'
                            }}/>
                            <Text style = {{
                                fontSize: 20,
                                width: deviceWidth - 40 - (deviceWidth - 40) / 3 - 40,
                                color: 'orange',
                                fontWeight: 'bold'
                            }}>{item.price}.00</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style = {{flexDirection: 'column', justifyContent: 'center'}}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress = {() => {navigation.goBack()}}>
                    <MaterialCommunityIcons name = "arrow-left" size = {30} style = {{
                    width: 50,
                    height: 30,
                    marginTop: 30,
                    marginLeft: 15
                    }}/>
                </TouchableOpacity>
                <Image source = {require("../assets/Logo/logo.png")} resizeMode="contain"
                style= {{
                width: 60,
                height: 60,
                marginTop: 30,
                marginLeft: deviceWidth / 2 - 95,
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
                    placeholder={data}
                    onChangeText = {(val) => setDataSearch(val)}>
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
                }}>
                    <MaterialCommunityIcons name="magnify" style={{
                    color: 'white'
                    }}
                    onPress = {() => renderData()}/>
                </TouchableOpacity>
            </View>
            <View style = {{
                marginLeft: 20
            }}>
                <Text>
                    There are {productData.length} result for searching "{searchTitle}"
                </Text>
            </View>
            <FlatList
            data = {productData}
            keyExtractor = {(item) => item.id.toString()}
            renderItem = {renderProduct}
            contentContainerStyle = {{
                flexDirection: 'column',
            }}
            style = {{
                margin : 20,
                marginBottom: 90
            }}></FlatList>
        </SafeAreaView>
    )
}
export default SearchScreen