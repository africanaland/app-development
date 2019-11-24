import React, {Component} from 'react';

import {Text, View, CheckBox, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { createAppContainer, DrawerItems } from 'react-navigation';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import IconInput from './common/IconInput';
import Button from './common/Button';

import { Rating, AirbnbRating } from 'react-native-elements';
import MapView from 'react-native-maps';
import R from 'res/R';
import { ScrollView } from 'react-native-gesture-handler';
const { PALETTE, COLORS } = R;

export default class Booking extends Component {
  constructor(props){
    super(props);
    this.state = {
      is_selete_previous: true,
    }
  }
  render() {
    return (
      <View style = {[PALETTE.login.container]}>
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
              <Text style={[PALETTE.textbold, {fontSize:20}]}>Booking Management</Text>
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
        <View style={[PALETTE.row]}>
          <View style={[PALETTE.f1,this.state.is_selete_previous?{borderBottomColor:COLORS.maincolor, borderBottomWidth:1}:{}]}>
            <Button
              text = "Previous"
              height = {30}
              btnstyle = {[PALETTE.text,{fontSize:15}]}
              color = {this.state.is_selete_previous?COLORS.maincolor:COLORS.darkgrey}
              onPress = {()=>{this.setState({ is_selete_previous: true });}}
            /> 
          </View>
          <View style={[PALETTE.f1,!this.state.is_selete_previous?{borderBottomColor:COLORS.maincolor, borderBottomWidth:1}:{}]}>
            <Button
              text = "Upcoming"
              height = {30}
              btnstyle = {[PALETTE.text,{fontSize:15}]}
              color = {!this.state.is_selete_previous?COLORS.maincolor:COLORS.darkgrey}
              onPress = {()=>{this.setState({ is_selete_previous: false });}}
            /> 
          </View>
        </View>
        <View style={[PALETTE.row]}>
          <IconInput 
            icon = "&#xf002;"
            text = "Search..."
            style = {{width:"100%"}}
          />             
        </View>
        {this.state.is_selete_previous?(
        <ScrollView style={{width:"100%"}}>
          <View style={[PALETTE.row,{marginBottom:5}]}>
            <View style={[PALETTE.f1]}>
              <Image style={{width:"100%", height:undefined, aspectRatio:0.9, borderRadius:5}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_17.png")} />
            </View>
            <View style={[PALETTE.f1,{padding:10, borderWidth:2, borderColor:COLORS.grey}]}>
              <View style={[PALETTE.row]}>
                <View style={[]}>
                  <Image style={{width:30, height:30}} source = {require("../res/images/icons/search-guest-house_host-by-indivisual-popup/booking-management-previous_48.png")} />
                </View>
                <View style={[PALETTE.textbold, {marginLeft:10}]}>
                  <Text style={[PALETTE.textbold, PALETTE.txtprofilename, {fontSize:10, color:COLORS.black}]}>Company name</Text>
                  <View style={[PALETTE.row,{alignItems:"center"}]}>
                  <Rating
                    ratingCount={5}
                    startingValue={4}
                    defaultRating={5}
                    showRating={false}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 0}}
                    imageSize={10}
                    readonly
                  />
                  <Text style={{fontSize:10, marginLeft:5}}>[Rating]</Text>
                  </View>
                </View>
              </View>
              <View><Text style={[PALETTE.textbold, {fontSize:12, marginTop:5}]}>Abell Hotel Kuching</Text></View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />

              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.icontext, {fontSize:9,color:COLORS.darkgrey, marginRight:10}]}>&#xf3c5;</Text>
                <Text style={[PALETTE.text,{fontSize:9, color:COLORS.darkgrey} ]}>Keas 69 Str.15234, Chalandri Athens, Greece</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Booking ID : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>25751263</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-in : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-out : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row,{justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                <View style={{ marginRight:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_35.png")} />
                </View>
                <View style={{ justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.maincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_37.png")} />
                </View>
                <View style={{ marginLeft:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_39.png")} />
                </View>
              </View>
              

            </View>
          </View>
          <View style={[PALETTE.row,{marginBottom:5}]}>
            <View style={[PALETTE.f1]}>
              <Image style={{width:"100%", height:undefined, aspectRatio:0.9, borderRadius:5}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_17.png")} />
            </View>
            <View style={[PALETTE.f1,{padding:10, borderWidth:2, borderColor:COLORS.grey}]}>
              <View style={[PALETTE.row]}>
                <View style={[]}>
                  <Image style={{width:30, height:30}} source = {require("../res/images/icons/search-guest-house_host-by-indivisual-popup/booking-management-previous_48.png")} />
                </View>
                <View style={[PALETTE.textbold, {marginLeft:10}]}>
                  <Text style={[PALETTE.textbold, PALETTE.txtprofilename, {fontSize:10, color:COLORS.black}]}>Company name</Text>
                  <View style={[PALETTE.row,{alignItems:"center"}]}>
                  <Rating
                    ratingCount={5}
                    startingValue={4}
                    defaultRating={5}
                    showRating={false}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 0}}
                    imageSize={10}
                    readonly
                  />
                  <Text style={{fontSize:10, marginLeft:5}}>[Rating]</Text>
                  </View>
                </View>
              </View>
              <View><Text style={[PALETTE.textbold, {fontSize:12, marginTop:5}]}>Abell Hotel Kuching</Text></View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />

              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.icontext, {fontSize:9,color:COLORS.darkgrey, marginRight:10}]}>&#xf3c5;</Text>
                <Text style={[PALETTE.text,{fontSize:9, color:COLORS.darkgrey} ]}>Keas 69 Str.15234, Chalandri Athens, Greece</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Booking ID : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>25751263</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-in : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-out : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row,{justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                <View style={{ marginRight:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_35.png")} />
                </View>
                <View style={{ justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.maincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_37.png")} />
                </View>
                <View style={{ marginLeft:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_39.png")} />
                </View>
              </View>
              

            </View>
          </View>
          <View style={[PALETTE.row,{marginBottom:5}]}>
            <View style={[PALETTE.f1]}>
              <Image style={{width:"100%", height:undefined, aspectRatio:0.9, borderRadius:5}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_17.png")} />
            </View>
            <View style={[PALETTE.f1,{padding:10, borderWidth:2, borderColor:COLORS.grey}]}>
              <View style={[PALETTE.row]}>
                <View style={[]}>
                  <Image style={{width:30, height:30}} source = {require("../res/images/icons/search-guest-house_host-by-indivisual-popup/booking-management-previous_48.png")} />
                </View>
                <View style={[PALETTE.textbold, {marginLeft:10}]}>
                  <Text style={[PALETTE.textbold, PALETTE.txtprofilename, {fontSize:10, color:COLORS.black}]}>Company name</Text>
                  <View style={[PALETTE.row,{alignItems:"center"}]}>
                  <Rating
                    ratingCount={5}
                    startingValue={4}
                    defaultRating={5}
                    showRating={false}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 0}}
                    imageSize={10}
                    readonly
                  />
                  <Text style={{fontSize:10, marginLeft:5}}>[Rating]</Text>
                  </View>
                </View>
              </View>
              <View><Text style={[PALETTE.textbold, {fontSize:12, marginTop:5}]}>Abell Hotel Kuching</Text></View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />

              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.icontext, {fontSize:9,color:COLORS.darkgrey, marginRight:10}]}>&#xf3c5;</Text>
                <Text style={[PALETTE.text,{fontSize:9, color:COLORS.darkgrey} ]}>Keas 69 Str.15234, Chalandri Athens, Greece</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Booking ID : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>25751263</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-in : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-out : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row,{justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                <View style={{ marginRight:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_35.png")} />
                </View>
                <View style={{ justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.maincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_37.png")} />
                </View>
                <View style={{ marginLeft:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_39.png")} />
                </View>
              </View>
              

            </View>
          </View>
          <View style={[PALETTE.row,{marginBottom:5}]}>
            <View style={[PALETTE.f1]}>
              <Image style={{width:"100%", height:undefined, aspectRatio:0.9, borderRadius:5}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_17.png")} />
            </View>
            <View style={[PALETTE.f1,{padding:10, borderWidth:2, borderColor:COLORS.grey}]}>
              <View style={[PALETTE.row]}>
                <View style={[]}>
                  <Image style={{width:30, height:30}} source = {require("../res/images/icons/search-guest-house_host-by-indivisual-popup/booking-management-previous_48.png")} />
                </View>
                <View style={[PALETTE.textbold, {marginLeft:10}]}>
                  <Text style={[PALETTE.textbold, PALETTE.txtprofilename, {fontSize:10, color:COLORS.black}]}>Company name</Text>
                  <View style={[PALETTE.row,{alignItems:"center"}]}>
                  <Rating
                    ratingCount={5}
                    startingValue={4}
                    defaultRating={5}
                    showRating={false}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 0}}
                    imageSize={10}
                    readonly
                  />
                  <Text style={{fontSize:10, marginLeft:5}}>[Rating]</Text>
                  </View>
                </View>
              </View>
              <View><Text style={[PALETTE.textbold, {fontSize:12, marginTop:5}]}>Abell Hotel Kuching</Text></View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />

              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.icontext, {fontSize:9,color:COLORS.darkgrey, marginRight:10}]}>&#xf3c5;</Text>
                <Text style={[PALETTE.text,{fontSize:9, color:COLORS.darkgrey} ]}>Keas 69 Str.15234, Chalandri Athens, Greece</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Booking ID : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>25751263</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-in : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-out : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row,{justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                <View style={{ marginRight:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_35.png")} />
                </View>
                <View style={{ justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.maincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_37.png")} />
                </View>
                <View style={{ marginLeft:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_39.png")} />
                </View>
              </View>
              

            </View>
          </View>
          <View style={[PALETTE.row,{marginBottom:5}]}>
            <View style={[PALETTE.f1]}>
              <Image style={{width:"100%", height:undefined, aspectRatio:0.9, borderRadius:5}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_17.png")} />
            </View>
            <View style={[PALETTE.f1,{padding:10, borderWidth:2, borderColor:COLORS.grey}]}>
              <View style={[PALETTE.row]}>
                <View style={[]}>
                  <Image style={{width:30, height:30}} source = {require("../res/images/icons/search-guest-house_host-by-indivisual-popup/booking-management-previous_48.png")} />
                </View>
                <View style={[PALETTE.textbold, {marginLeft:10}]}>
                  <Text style={[PALETTE.textbold, PALETTE.txtprofilename, {fontSize:10, color:COLORS.black}]}>Company name</Text>
                  <View style={[PALETTE.row,{alignItems:"center"}]}>
                  <Rating
                    ratingCount={5}
                    startingValue={4}
                    defaultRating={5}
                    showRating={false}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 0}}
                    imageSize={10}
                    readonly
                  />
                  <Text style={{fontSize:10, marginLeft:5}}>[Rating]</Text>
                  </View>
                </View>
              </View>
              <View><Text style={[PALETTE.textbold, {fontSize:12, marginTop:5}]}>Abell Hotel Kuching</Text></View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />

              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.icontext, {fontSize:9,color:COLORS.darkgrey, marginRight:10}]}>&#xf3c5;</Text>
                <Text style={[PALETTE.text,{fontSize:9, color:COLORS.darkgrey} ]}>Keas 69 Str.15234, Chalandri Athens, Greece</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Booking ID : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>25751263</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-in : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-out : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row,{justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                <View style={{ marginRight:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_35.png")} />
                </View>
                <View style={{ justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.maincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_37.png")} />
                </View>
                <View style={{ marginLeft:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_39.png")} />
                </View>
              </View>
              

            </View>
          </View>
        
          <View style={[PALETTE.homepage.hr,{marginTop:15, marginBottom:15, marginLeft:0, marginRight:0}]} />
        </ScrollView>
        ):(
          <ScrollView style={{width:"100%"}}>
          <View style={[PALETTE.row,{marginBottom:5}]}>
            <View style={[PALETTE.f1]}>
              <Image style={{width:"100%", height:undefined, aspectRatio:0.9, borderRadius:5}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_17.png")} />
            </View>
            <View style={[PALETTE.f1,{padding:10, borderWidth:2, borderColor:COLORS.grey}]}>
              <View style={[PALETTE.row]}>
                <View style={[]}>
                  <Image style={{width:30, height:30}} source = {require("../res/images/icons/search-guest-house_host-by-indivisual-popup/booking-management-previous_48.png")} />
                </View>
                <View style={[PALETTE.textbold, {marginLeft:10}]}>
                  <Text style={[PALETTE.textbold, PALETTE.txtprofilename, {fontSize:10, color:COLORS.black}]}>Company name</Text>
                  <View style={[PALETTE.row,{alignItems:"center"}]}>
                  <Rating
                    ratingCount={5}
                    startingValue={4}
                    defaultRating={5}
                    showRating={false}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 0}}
                    imageSize={10}
                    readonly
                  />
                  <Text style={{fontSize:10, marginLeft:5}}>[Rating]</Text>
                  </View>
                </View>
              </View>
              <View><Text style={[PALETTE.textbold, {fontSize:12, marginTop:5}]}>Abell Hotel Kuching</Text></View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />

              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.icontext, {fontSize:9,color:COLORS.darkgrey, marginRight:10}]}>&#xf3c5;</Text>
                <Text style={[PALETTE.text,{fontSize:9, color:COLORS.darkgrey} ]}>Keas 69 Str.15234, Chalandri Athens, Greece</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Booking ID : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>25751263</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-in : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-out : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row,{justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                <View style={{ marginRight:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_35.png")} />
                </View>
                <View style={{marginRight:15,  justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.maincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_37.png")} />
                </View>
                <View style={{marginRight:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_39.png")} />
                </View>
                <View style={{ justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_03.png")} />
                </View>
              </View>
              

            </View>
          </View>
          <View style={[PALETTE.row,{marginBottom:5}]}>
            <View style={[PALETTE.f1]}>
              <Image style={{width:"100%", height:undefined, aspectRatio:0.9, borderRadius:5}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_17.png")} />
            </View>
            <View style={[PALETTE.f1,{padding:10, borderWidth:2, borderColor:COLORS.grey}]}>
              <View style={[PALETTE.row]}>
                <View style={[]}>
                  <Image style={{width:30, height:30}} source = {require("../res/images/icons/search-guest-house_host-by-indivisual-popup/booking-management-previous_48.png")} />
                </View>
                <View style={[PALETTE.textbold, {marginLeft:10}]}>
                  <Text style={[PALETTE.textbold, PALETTE.txtprofilename, {fontSize:10, color:COLORS.black}]}>Company name</Text>
                  <View style={[PALETTE.row,{alignItems:"center"}]}>
                  <Rating
                    ratingCount={5}
                    startingValue={4}
                    defaultRating={5}
                    showRating={false}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 0}}
                    imageSize={10}
                    readonly
                  />
                  <Text style={{fontSize:10, marginLeft:5}}>[Rating]</Text>
                  </View>
                </View>
              </View>
              <View><Text style={[PALETTE.textbold, {fontSize:12, marginTop:5}]}>Abell Hotel Kuching</Text></View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />

              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.icontext, {fontSize:9,color:COLORS.darkgrey, marginRight:10}]}>&#xf3c5;</Text>
                <Text style={[PALETTE.text,{fontSize:9, color:COLORS.darkgrey} ]}>Keas 69 Str.15234, Chalandri Athens, Greece</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Booking ID : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>25751263</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-in : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-out : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row,{justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                <View style={{ marginRight:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_35.png")} />
                </View>
                <View style={{ justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.maincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_37.png")} />
                </View>
                <View style={{ marginLeft:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_39.png")} />
                </View>
              </View>
              

            </View>
          </View>
          <View style={[PALETTE.row,{marginBottom:5}]}>
            <View style={[PALETTE.f1]}>
              <Image style={{width:"100%", height:undefined, aspectRatio:0.9, borderRadius:5}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_17.png")} />
            </View>
            <View style={[PALETTE.f1,{padding:10, borderWidth:2, borderColor:COLORS.grey}]}>
              <View style={[PALETTE.row]}>
                <View style={[]}>
                  <Image style={{width:30, height:30}} source = {require("../res/images/icons/search-guest-house_host-by-indivisual-popup/booking-management-previous_48.png")} />
                </View>
                <View style={[PALETTE.textbold, {marginLeft:10}]}>
                  <Text style={[PALETTE.textbold, PALETTE.txtprofilename, {fontSize:10, color:COLORS.black}]}>Company name</Text>
                  <View style={[PALETTE.row,{alignItems:"center"}]}>
                  <Rating
                    ratingCount={5}
                    startingValue={4}
                    defaultRating={5}
                    showRating={false}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 0}}
                    imageSize={10}
                    readonly
                  />
                  <Text style={{fontSize:10, marginLeft:5}}>[Rating]</Text>
                  </View>
                </View>
              </View>
              <View><Text style={[PALETTE.textbold, {fontSize:12, marginTop:5}]}>Abell Hotel Kuching</Text></View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />

              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.icontext, {fontSize:9,color:COLORS.darkgrey, marginRight:10}]}>&#xf3c5;</Text>
                <Text style={[PALETTE.text,{fontSize:9, color:COLORS.darkgrey} ]}>Keas 69 Str.15234, Chalandri Athens, Greece</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Booking ID : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>25751263</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-in : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-out : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row,{justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                <View style={{ marginRight:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_35.png")} />
                </View>
                <View style={{ justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.maincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_37.png")} />
                </View>
                <View style={{ marginLeft:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_39.png")} />
                </View>
              </View>
              

            </View>
          </View>
          <View style={[PALETTE.row,{marginBottom:5}]}>
            <View style={[PALETTE.f1]}>
              <Image style={{width:"100%", height:undefined, aspectRatio:0.9, borderRadius:5}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_17.png")} />
            </View>
            <View style={[PALETTE.f1,{padding:10, borderWidth:2, borderColor:COLORS.grey}]}>
              <View style={[PALETTE.row]}>
                <View style={[]}>
                  <Image style={{width:30, height:30}} source = {require("../res/images/icons/search-guest-house_host-by-indivisual-popup/booking-management-previous_48.png")} />
                </View>
                <View style={[PALETTE.textbold, {marginLeft:10}]}>
                  <Text style={[PALETTE.textbold, PALETTE.txtprofilename, {fontSize:10, color:COLORS.black}]}>Company name</Text>
                  <View style={[PALETTE.row,{alignItems:"center"}]}>
                  <Rating
                    ratingCount={5}
                    startingValue={4}
                    defaultRating={5}
                    showRating={false}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 0}}
                    imageSize={10}
                    readonly
                  />
                  <Text style={{fontSize:10, marginLeft:5}}>[Rating]</Text>
                  </View>
                </View>
              </View>
              <View><Text style={[PALETTE.textbold, {fontSize:12, marginTop:5}]}>Abell Hotel Kuching</Text></View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />

              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.icontext, {fontSize:9,color:COLORS.darkgrey, marginRight:10}]}>&#xf3c5;</Text>
                <Text style={[PALETTE.text,{fontSize:9, color:COLORS.darkgrey} ]}>Keas 69 Str.15234, Chalandri Athens, Greece</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Booking ID : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>25751263</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-in : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-out : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row,{justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                <View style={{ marginRight:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_35.png")} />
                </View>
                <View style={{ justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.maincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_37.png")} />
                </View>
                <View style={{ marginLeft:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_39.png")} />
                </View>
              </View>
              

            </View>
          </View>
          <View style={[PALETTE.row,{marginBottom:5}]}>
            <View style={[PALETTE.f1]}>
              <Image style={{width:"100%", height:undefined, aspectRatio:0.9, borderRadius:5}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_17.png")} />
            </View>
            <View style={[PALETTE.f1,{padding:10, borderWidth:2, borderColor:COLORS.grey}]}>
              <View style={[PALETTE.row]}>
                <View style={[]}>
                  <Image style={{width:30, height:30}} source = {require("../res/images/icons/search-guest-house_host-by-indivisual-popup/booking-management-previous_48.png")} />
                </View>
                <View style={[PALETTE.textbold, {marginLeft:10}]}>
                  <Text style={[PALETTE.textbold, PALETTE.txtprofilename, {fontSize:10, color:COLORS.black}]}>Company name</Text>
                  <View style={[PALETTE.row,{alignItems:"center"}]}>
                  <Rating
                    ratingCount={5}
                    startingValue={4}
                    defaultRating={5}
                    showRating={false}
                    onFinishRating={this.ratingCompleted}
                    style={{ paddingVertical: 0}}
                    imageSize={10}
                    readonly
                  />
                  <Text style={{fontSize:10, marginLeft:5}}>[Rating]</Text>
                  </View>
                </View>
              </View>
              <View><Text style={[PALETTE.textbold, {fontSize:12, marginTop:5}]}>Abell Hotel Kuching</Text></View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />

              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.icontext, {fontSize:9,color:COLORS.darkgrey, marginRight:10}]}>&#xf3c5;</Text>
                <Text style={[PALETTE.text,{fontSize:9, color:COLORS.darkgrey} ]}>Keas 69 Str.15234, Chalandri Athens, Greece</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Booking ID : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>25751263</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-in : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.textbold, {fontSize:10, marginTop:5}]}>Check-out : </Text>
                <Text style={[PALETTE.text, {fontSize:10, marginTop:5}]}>28-March-2019</Text>
              </View>

              <View style={[PALETTE.homepage.hr,{marginTop:5, marginBottom:5, marginLeft:0, marginRight:0}]} />
              <View style={[PALETTE.row,{justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                <View style={{ marginRight:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_35.png")} />
                </View>
                <View style={{ justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.maincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_37.png")} />
                </View>
                <View style={{ marginLeft:15, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:20, width:20, height:20}} >
                  <Image style={{width:15, height:15}} source={require("../res/images/icons/booking-management-previous/booking-management-previous_39.png")} />
                </View>
              </View>
              

            </View>
          </View>
        
          <View style={[PALETTE.homepage.hr,{marginTop:15, marginBottom:15, marginLeft:0, marginRight:0}]} />
        </ScrollView>
        )
        }
        
      </View>
    );
  }
}
