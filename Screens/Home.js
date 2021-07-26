// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import { Dimensions } from 'react-native';
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import {ListItem} from 'react-native-elements'
import { Directions, ScrollView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from 'color';
import data from '../handle/data'
import icon from '../handle/icon'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const logo = require ("../assets/Logo/logo.png")


const itemStyle = StyleSheet.create ({
  item : {
    width : deviceWidth - 30, 
    height: 200,
    backgroundColor: 'red',
    marginHorizontal: 15,
    borderRadius: 20
  },
  imageItem: {
    height: 200, 
    width: deviceWidth - 30,
    borderRadius: 20
  }
})
const copyData = data.ProductData.slice();
const popularDishesIndex = [];
var rdm = 0
for (let i = 0 ; i < 7 ; i++) {  
  rdm = Math.floor(Math.random() * (copyData.length - 1))
  if (!popularDishesIndex.includes(rdm))
    popularDishesIndex.push(rdm)
}
var popularDishes = []
for (let i = 0 ; i < popularDishesIndex.length ; i++){
  popularDishes.push(copyData[popularDishesIndex[i]])
}

const HomeScreen = ({ navigation }) => {

  const titleData = data.TitleData
  const restaurantData = data.RestaurantData
  const appData = data.ProductData

  const [products, setProducts] = React.useState(appData)
  const [searchData, setSearchData] = React.useState('')

  function getProductNamebyId(id) {
    let product = products.filter(a => a.id === id)
    if (product.length > 0){
      return product[0].name
    }
    return ""
  }

  function renderBurgerList() {
    const copyData = data.ProductData.slice();
    let burgerList = copyData.filter(a => a.title == 1)


    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
        style= {{ 
          width : deviceWidth - 30, 
          height: 200,
          backgroundColor: 'red',
          marginHorizontal: 15,
          borderRadius: 20
        }}
        onPress= {() => {
          navigation.navigate("Detail", item)
        }}>
          <Image source = {item.image}
          style={{
            height: 200, 
            width: deviceWidth - 30,
            borderRadius: 20
          }}/>
          <Text style = {{
            color: 'yellow',
            fontSize: 30,
            marginTop: 100,
            marginLeft: 20,
            fontWeight: 'bold',
            position: 'absolute',
            textShadowColor: 'black',
            textShadowOffset: {width: 0, height: 0},
            textShadowRadius: 10,
          }}>{item.name}</Text>
          <Text style= {{
            position: 'absolute',
            marginTop: 140,
            marginLeft: 20,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'yellow',
            textShadowColor: 'black',
            textShadowOffset: {width: 0, height: 0},
            textShadowRadius: 10,
          }}>{item.price}.00$</Text>
          <Text
          style={{
            position: 'absolute',
            marginTop: 170,
            marginLeft: 20,
            color: 'white',
            fontWeight: 'bold',
            textShadowColor: 'black',
            textShadowOffset: {width: 0, height: 0},
            textShadowRadius: 10,
          }}>Restaurant: {restaurantData[item.restaurant - 1].name}</Text>
        </TouchableOpacity>
      )
    }
    return (
      <FlatList
      horizontal
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      data={burgerList}
      keyExtractor = {(item) => item.id.toString()}
      renderItem = {renderItem}
      contentContainerStyle ={{
        flexDirection: 'row'
      }}></FlatList>
    )
  }
  function renderPastaList(){
    const copyData = data.ProductData.slice();
    let pastaList = copyData.filter(a => a.title == 2)

    const renderPasta = ({item}) => {
      return (
        <TouchableOpacity
        style = {itemStyle.item}
        onPress = {() => {
          navigation.navigate("Detail", item)
        }}>
          <Image source = {item.image}
          style = {itemStyle.imageItem}/>
          <Text style = {{
            color: 'yellow',
            fontSize: 30,
            marginTop: 100,
            marginLeft: 20,
            fontWeight: 'bold',
            position: 'absolute',
            textShadowColor: 'black',
            textShadowOffset: {width: 0, height: 0},
            textShadowRadius: 10,
          }}>{item.name}</Text>
          <Text style= {{
            position: 'absolute',
            marginTop: 140,
            marginLeft: 20,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'yellow',
            textShadowColor: 'black',
            textShadowOffset: {width: 0, height: 0},
            textShadowRadius: 10,
          }}>{item.price}.00$</Text>
          <Text
          style={{
            position: 'absolute',
            marginTop: 170,
            marginLeft: 20,
            color: 'white',
            fontWeight: 'bold',
            textShadowColor: 'black',
            textShadowOffset: {width: 0, height: 0},
            textShadowRadius: 10,
          }}>Restaurant: {restaurantData[item.restaurant - 1].name}</Text>
        </TouchableOpacity>
      )
    }

    return (
      <FlatList
      horizontal
      pagingEnabled = {true}
      showsHorizontalScrollIndicator = {false}
      data = {pastaList}
      keyExtractor = {(item) => item.id.toString()}
      renderItem = {renderPasta}
      contentContainerStyle = {{
        flexDirection: 'row'
      }}/>
    )
  }

  function renderPopularList(){
    
    const renderPopular = ({item}) => {
      return (
        <TouchableOpacity
        style = {itemStyle.item}
        onPress = {() => {
          navigation.navigate('Detail', item)
        }}>
          <Image source = {item.image}
          style = {itemStyle.imageItem}/>
          <Text style = {{
            color: 'yellow',
            fontSize: 30,
            marginTop: 100,
            marginLeft: 20,
            fontWeight: 'bold',
            position: 'absolute',
            textShadowColor: 'black',
            textShadowOffset: {width: 0, height: 0},
            textShadowRadius: 10,
          }}>{item.name}</Text>
          <Text style= {{
            position: 'absolute',
            marginTop: 140,
            marginLeft: 20,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'yellow',
            textShadowColor: 'black',
            textShadowOffset: {width: 0, height: 0},
            textShadowRadius: 10,
          }}>{item.price}.00$</Text>
          <Text
          style={{
            position: 'absolute',
            marginTop: 170,
            marginLeft: 20,
            color: 'white',
            fontWeight: 'bold',
            textShadowColor: 'black',
            textShadowOffset: {width: 0, height: 0},
            textShadowRadius: 10,
          }}>Restaurant: {restaurantData[item.restaurant - 1].name}</Text>
        </TouchableOpacity>
      )
    }

    return (
      <FlatList
      horizontal
      pagingEnabled = {true}
      showsHorizontalScrollIndicator = {false}
      data = {popularDishes}
      keyExtractor = {(item) => item.id.toString()}
      renderItem = {renderPopular}
      contentContainerStyle = {{
        flexDirection: 'row',
      }}
      style = {{
        marginBottom: 10
      }}/>
    )
  }

  // UI for home screen
  return (
    <ScrollView style={{ flexDirection: 'column' }}>
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


      <View
      // list view
        style={{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 10,
        alignItems: 'center'
      }}>
        <Text style={{
        fontWeight: 'bold',
        fontSize: 22, 
        color: 'black'
      }}>
        Burger 
      </Text>
      <MaterialCommunityIcons name="hamburger" size = {22} color= '#FA7E1C' style={{
        alignItems: 'center',
        marginLeft: 10,
      }}></MaterialCommunityIcons>
      </View>
      {renderBurgerList()}

      <View
      // list view
        style={{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 10,
        marginTop: 20,
        alignItems: 'center'
      }}>
        <Text style={{
        fontWeight: 'bold',
        fontSize: 22, 
        color: 'black'
      }}>
        Pasta
      </Text>
      <Image source = {icon.pasta} style = {{
        width: 25,
        height: 25,
        marginLeft: 10
      }}></Image>
      
      </View>
      {renderPastaList()}
      <View
      // list view
        style={{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 10,
        marginTop: 20,
        alignItems: 'center'
      }}>
        <Text style={{
        fontWeight: 'bold',
        fontSize: 22, 
        color: 'black'
      }}>
        Popular Dishes
      </Text>
      <Image source = {icon.beefsteak} style = {{
        width: 25,
        height: 25,
        marginLeft: 10
      }}></Image>
      </View>
      {renderPopularList()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default HomeScreen;
