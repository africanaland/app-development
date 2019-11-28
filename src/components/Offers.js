import React, {Component} from 'react';

import {Text, View, TextInput, CheckBox, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
import RadioGroup from 'react-native-radio-buttons-group';
import { createAppContainer, DrawerItems } from 'react-navigation';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import IconInput from './common/IconInput';
import Button from './common/Button';

import { Rating, AirbnbRating } from 'react-native-elements';
import MapView from 'react-native-maps';
import R from 'res/R';
import { ScrollView } from 'react-native-gesture-handler';
const { PALETTE, COLORS } = R;

export default class Offers extends Component {
  constructor(props){
    super(props);
    this.state = {
      is_selete_previous: true,
      isCancelBookingModalVisible: false,
      data: [
          {
              label: 'I found another guesthouse in Africana Land.',
              size: 15,
          },
          {
              label: 'I found a better offer in another place.',
              size: 15,
          },
          {
              label: 'Another reason.',
              size: 15,
          },
      ],
    }
  }

  onPress = data => this.setState({ data });


  render() {
    let selectedButton = this.state.data.find(e => e.selected == true);
    selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        
    return (
      <View style = {[PALETTE.login.container]}>
        <Modal isVisible={this.state.isCancelBookingModalVisible}
          onBackdropPress={() => this.setState({ isCancelBookingModalVisible: false })}
        >
          <View style={{backgroundColor:COLORS.white, borderRadius:5, padding:10}}>
            <View style={{width:"100%", marginBottom:10, alignItems:"center"}}>
              <Text style={[PALETTE.textbold,{fontSize:20, color:COLORS.black}]}>Cancel Booking</Text>
            </View>
            <View style={{marginBottom:10}}>
              <Text style={[PALETTE.text,{fontSize:12, color:COLORS.black}]}>We are sorry to that, but would you please select the cancellation reason?</Text>
            </View>
            <RadioGroup radioButtons={this.state.data} onPress={this.onPress} />
            <TextInput multiline={true} style={{margin:10,height:50, borderWidth:1, borderColor:COLORS.darkgrey}}>adsf</TextInput>
            <Button
              text = "Cancel Booking"
              onPress = {() => this.setState({ isCancelBookingModalVisible: false })}
              bgcolor = {COLORS.redcolor}
              color = {COLORS.white}
              style = {{marginBottom:20, marginTop:10}}
              btnstyle = {[PALETTE.textbold]}
              height = {40}
              width = "100%"
            />
          </View>

        </Modal>

        <View style={[PALETTE.row,PALETTE.primaryBetween,PALETTE.secondaryCenter,PALETTE.menubar,]}>
          
          <Button
            onPress={()=>{this.props.navigation.toggleDrawer()}}
            text = "&#xf0c9;"
            height = {30}
            width = {30}
            btnstyle = {[PALETTE.icontext,{fontSize:30}]}
          />         
          <View>
            <View style={PALETTE.row}>
              <Text style={[PALETTE.textbold, {fontSize:20}]}>Favorites</Text>
            </View>
          </View>
          <View>
            <View style={PALETTE.row}>
              <Button
                text = "&#xf0e0;"
                height = {30}
                width = {30}
                btnstyle = {[PALETTE.icontext,{fontSize:20, }]}
              /> 
              <Button
                text = "&#xf0f3;"
                height = {30}
                width = {30}
                btnstyle = {[PALETTE.icontext,{fontSize:20}]}
              /> 
            </View>
          </View>
        </View>

        <View style={[PALETTE.homepage.hr]} />
        
        <ScrollView style={{width:"100%"}}>
          <View style={[PALETTE.row]}>
            <View style={{borderWidth:2, borderColor:COLORS.grey, flex:1,  marginLeft:5,  padding:10}}>
              
              <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center"}} >
                <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:30, width:60, height:60}} >
                  <Image style={{width:25, height:25}} source={require("../res/images/icons/offer-membership/offer-membership_06.png")} />
                </View>
                <View style={{flex:1, justifyContent:"center"}} >
                  <Text style={[PALETTE.text, {color:COLORS.darkgrey, marginTop:10}]}>Classic</Text>
                </View>

                <View style={[PALETTE.row,{justifyContent:"center"}]} >
                  <Text style={[PALETTE.text, {color:COLORS.maincolor, marginTop:10}]}>
                    $50.00
                  </Text>
                  <Text style={[PALETTE.text, {textDecorationLine: "line-through",fontSize:12, color:COLORS.black, marginTop:11, marginLeft:10}]}>
                    $60.00
                  </Text>
                </View>
                <View style={[PALETTE.row,{justifyContent:"center", borderWidth:1, borderColor:COLORS.grey, marginTop:10}]} >
                  <View style={[PALETTE.f1,{padding:5, backgroundColor:COLORS.grey}]}>
                    <Text style={[PALETTE.text,{color:COLORS.mgrey, fontSize:10}]}>Start Offer:</Text>
                    <Text style={[PALETTE.textbold,{color:COLORS.darkgrey, fontSize:10, marginTop:5}]}>13-April-2019</Text>
                  </View>
                  <View style={[PALETTE.f1,{padding:5, backgroundColor:COLORS.white}]}>
                    <Text style={[PALETTE.text,{color:COLORS.mgrey, fontSize:10}]}>Start Offer:</Text>
                    <Text style={[PALETTE.textbold,{color:COLORS.darkgrey, fontSize:10, marginTop:5}]}>13-April-2019</Text>
                 </View>
                </View>
              </View>
            </View>
            
            <View style={{borderWidth:2, borderColor:COLORS.grey, flex:1,  marginLeft:5,  padding:10}}>              
              <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center"}} >
                <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:30, width:60, height:60}} >
                <Image style={{width:25, height:25}} source={require("../res/images/icons/offer-membership/offer-membership_03.png")} />
                </View>
                <View style={{flex:1, justifyContent:"center"}} >
                  <Text style={[PALETTE.text, {color:COLORS.darkgrey, marginTop:10}]}>Silver</Text>
                </View>

                <View style={[PALETTE.row,{justifyContent:"center"}]} >
                  <Text style={[PALETTE.text, {color:COLORS.maincolor, marginTop:10}]}>
                    $100.00
                  </Text>
                  <Text style={[PALETTE.text, {textDecorationLine: "line-through",fontSize:12, color:COLORS.black, marginTop:11, marginLeft:10}]}>
                    $110.00
                  </Text>
                </View>
                <View style={[PALETTE.row,{justifyContent:"center", borderWidth:1, borderColor:COLORS.grey, marginTop:10}]} >
                  <View style={[PALETTE.f1,{padding:5, backgroundColor:COLORS.grey}]}>
                    <Text style={[PALETTE.text,{color:COLORS.mgrey, fontSize:10}]}>Start Offer:</Text>
                    <Text style={[PALETTE.textbold,{color:COLORS.darkgrey, fontSize:10, marginTop:5}]}>13-April-2019</Text>
                  </View>
                  <View style={[PALETTE.f1,{padding:5, backgroundColor:COLORS.white}]}>
                    <Text style={[PALETTE.text,{color:COLORS.mgrey, fontSize:10}]}>Start Offer:</Text>
                    <Text style={[PALETTE.textbold,{color:COLORS.darkgrey, fontSize:10, marginTop:5}]}>13-April-2019</Text>
                 </View>
                </View>
              </View>
            </View>
            
          </View>

          <View style={[PALETTE.row,{marginTop:5}]}>
            <View style={{borderWidth:2, borderColor:COLORS.grey, flex:1,  marginLeft:5,  padding:10}}>
              
              <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center"}} >
                <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:30, width:60, height:60}} >
                <Image style={{width:25, height:25}} source={require("../res/images/icons/offer-membership/offer-membership_14.png")} />
                </View>
                <View style={{flex:1, justifyContent:"center"}} >
                  <Text style={[PALETTE.text, {color:COLORS.darkgrey, marginTop:10}]}>Gold</Text>
                </View>

                <View style={[PALETTE.row,{justifyContent:"center"}]} >
                  <Text style={[PALETTE.text, {color:COLORS.maincolor, marginTop:10}]}>
                    $150.00
                  </Text>
                  <Text style={[PALETTE.text, {textDecorationLine: "line-through",fontSize:12, color:COLORS.black, marginTop:11, marginLeft:10}]}>
                    $160.00
                  </Text>
                </View>
                <View style={[PALETTE.row,{justifyContent:"center", borderWidth:1, borderColor:COLORS.grey, marginTop:10}]} >
                  <View style={[PALETTE.f1,{padding:5, backgroundColor:COLORS.grey}]}>
                    <Text style={[PALETTE.text,{color:COLORS.mgrey, fontSize:10}]}>Start Offer:</Text>
                    <Text style={[PALETTE.textbold,{color:COLORS.darkgrey, fontSize:10, marginTop:5}]}>13-April-2019</Text>
                  </View>
                  <View style={[PALETTE.f1,{padding:5, backgroundColor:COLORS.white}]}>
                    <Text style={[PALETTE.text,{color:COLORS.mgrey, fontSize:10}]}>Start Offer:</Text>
                    <Text style={[PALETTE.textbold,{color:COLORS.darkgrey, fontSize:10, marginTop:5}]}>13-April-2019</Text>
                 </View>
                </View>
              </View>
            </View>
            
            <View style={{borderWidth:2, borderColor:COLORS.grey, flex:1,  marginLeft:5,  padding:10}}>
              
              <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center"}} >
                <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:30, width:60, height:60}} >
                <Image style={{width:25, height:25}} source={require("../res/images/icons/offer-membership/offer-membership_11.png")} />
                </View>
                <View style={{flex:1, justifyContent:"center"}} >
                  <Text style={[PALETTE.text, {color:COLORS.darkgrey, marginTop:10}]}>VIP</Text>
                </View>

                <View style={[PALETTE.row,{justifyContent:"center"}]} >
                  <Text style={[PALETTE.text, {color:COLORS.maincolor, marginTop:10}]}>
                    $200.00
                  </Text>
                  <Text style={[PALETTE.text, {textDecorationLine: "line-through",fontSize:12, color:COLORS.black, marginTop:11, marginLeft:10}]}>
                    $210.00
                  </Text>
                </View>
                <View style={[PALETTE.row,{justifyContent:"center", borderWidth:1, borderColor:COLORS.grey, marginTop:10}]} >
                  <View style={[PALETTE.f1,{padding:5, backgroundColor:COLORS.grey}]}>
                    <Text style={[PALETTE.text,{color:COLORS.mgrey, fontSize:10}]}>Start Offer:</Text>
                    <Text style={[PALETTE.textbold,{color:COLORS.darkgrey, fontSize:10, marginTop:5}]}>13-April-2019</Text>
                  </View>
                  <View style={[PALETTE.f1,{padding:5, backgroundColor:COLORS.white}]}>
                    <Text style={[PALETTE.text,{color:COLORS.mgrey, fontSize:10}]}>Start Offer:</Text>
                    <Text style={[PALETTE.textbold,{color:COLORS.darkgrey, fontSize:10, marginTop:5}]}>13-April-2019</Text>
                 </View>
                </View>
              </View>
            </View>
            
          </View>
        </ScrollView>
        
        
      </View>
    );
  }
}
