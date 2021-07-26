
import * as React from 'react';
import { View, Text, SafeAreaView, Image,
TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Logo from '../handle/logo'
import { Dimensions } from 'react-native';
import data from '../handle/data'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const restaurantData = data.RestaurantData

const DetailsScreen = ({ route, navigation}) => {
  const {id, name, title, image, price, restaurant, stock} = route.params
  const restaurantName = restaurantData.filter(a => a.id == restaurant)
  const [curStock, setStock] = React.useState(0)

  function editStock(action){
    if (action == "minus"){
      let checkStock = curStock;
      if (checkStock < 0){
        setStock(0)
      }
      else {
        setStock(checkStock - 1)
      }
    }
    if (action == "plus"){
      let checkStock = curStock;
      if (checkStock > stock){
        setStock(stock)
      }
      else {
        setStock(checkStock + 1)
      }
    }
    console.log(curStock)
  }

  function getCurrentStock(){
    return curStock
  }

  return (
    <SafeAreaView style = {{
      flexDirection :'column'
    }}>
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
      <View style = {{
        alignItems: 'center'
      }}>
        <Image resizeMode = 'contain' source = {image} style = {{
          width : deviceWidth,
          height: deviceHeight / 3,
          marginTop: 20,
          borderRadius: 10
        }}/>
        <View style = {{
          flexDirection : 'row',
          //backgroundColor: 'red',
          width: 200,
          height: 50,
          position: 'absolute',
          marginTop: deviceHeight / 3 - 20
        }}>
            <TouchableOpacity style = {{
              height: 50,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10
            }}
            onPress = {() => editStock("minus")}>
              <MaterialCommunityIcons name = "minus" size = {20} style = {{
              color: 'white'
              }}/>
            </TouchableOpacity>
            <View style = {{
              height: 50,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white'
            }}>
              <Text style = {{
                fontWeight: 'bold',
                fontSize: 18
              }}>{getCurrentStock()}</Text>
            </View>
            <TouchableOpacity style = {{
              height: 50,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'red',
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10
            }}
            onPress = {() => editStock("plus")}>
              <MaterialCommunityIcons name = "plus" size = {20} style = {{
              color: 'white'
              }}/>
            </TouchableOpacity>
          </View>  
          {/* style and desciption */}
          <View style = {{
            margin: 20,
            width: deviceWidth - 40,
            height: deviceHeight / 3,
            alignItems: 'center'
          }}>
            <Text style = {{
              color: 'orange',
              fontWeight: 'bold',
              fontSize: 35,
          
            }}>{name}</Text>
            <Text style = {{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 13,
              marginTop: 10
            }}>Magnificent {name}</Text>
            <Text style = {{
              marginTop: 40,
              color: 'black',
              fontSize: 20,
              fontWeight: 'bold'
            }}>Delivery by: {restaurantName[0].name}</Text>
            <Text style = {{
              marginTop: 90,
              color: 'orange',
              fontWeight: 'bold',
              fontSize: 29
            }}>Price: {price}.00$</Text>
          </View>
          <TouchableOpacity style = {{
            position: 'absolute',
            width: deviceWidth - 100,
            height: deviceWidth / 3 - 60,
            backgroundColor: 'red',
            marginTop: deviceHeight - (deviceWidth / 3 - 60) - 150,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20
          }} // onpress here>
          >
            <Text style = {{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 30
            }}>
              Order now
            </Text>
          </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};
export default DetailsScreen;
