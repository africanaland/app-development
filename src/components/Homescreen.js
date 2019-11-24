import React, {Component} from 'react';

import {Text, View, Picker,CheckBox, TextInput, Alert, TouchableHighlight, StyleSheet, Image, TouchableOpacity, Platform} from 'react-native';
import Modal from "react-native-modal";
import { createAppContainer, DrawerItems } from 'react-navigation';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import InputSpinner from "react-native-input-spinner";
import { Rating, AirbnbRating } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import IconInput from './common/IconInput';
import Button from './common/Button';
import MapView, {Marker} from 'react-native-maps';
import R from 'res/R';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const { PALETTE, COLORS } = R;
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
  }
  state = {
    isSearchModalVisible: false,
    isCompanyModalVisible: false,
    isIndividualModalVisible: false,
    isCompanyBookModalVisible: false,
    isCompanyBookStep2ModalVisible: false,
    isCompanyBookStep3ModalVisible: false,
    date: new Date(),
    mode: 'date',
    isCheckIn: false,
    isCheckOut: false,
    checked_guest_house: false,
    checked_airport_reception: false,
    checked_personal_driver: false,
    checked_house_maid: false,
  };
  setisSearchModalVisible(visible) {
    this.setState({isSearchModalVisible: visible});
  }
  setisCompanyModalVisible(visible) {
    this.setState({isCompanyModalVisible: visible});
  }
  setisIndividualModalVisible(visible) {
    this.setState({isIndividualModalVisible: visible});
  }  
  setisCompanyBookModalVisible(visible) {
    this.setState({isCompanyBookModalVisible: visible});
    this.setState({isCompanyModalVisible: !visible});
  }
  setisCompanyBookStep2ModalVisible(visible) {
    this.setState({isCompanyBookStep2ModalVisible: visible});
    this.setState({isCompanyBookModalVisible: !visible});
  }
  setisCompanyBookStep3ModalVisible(visible) {
    this.setState({isCompanyBookStep3ModalVisible: visible});
    this.setState({isCompanyBookStep2ModalVisible: !visible});
  }
  setDateCheck = (event, date) => {    
    if(this.state.isCheckIn)
      this.setState({
        isCheckIn: false,
        val_checkin: date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()
      })
    else
      this.setState({
        isCheckOut: false,
        val_checkout: date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()
      })
  }

  datepicker = (mode) => {
    if(mode=="in"){
      this.setState({
        isCheckIn: true
      });
    }else{
      this.setState({
        isCheckOut: true
      });
    }
  }
  
  render() {
    
    return (
      <View style = {[PALETTE.login.container]}>
        { (this.state.isCheckIn || this.state.isCheckOut) && <DateTimePicker value={this.state.date}
            mode="date"
            display="default"
            onChange={this.setDateCheck} />
        }

        <Modal isVisible={this.state.isCompanyModalVisible}
          onBackdropPress={() => this.setState({ isCompanyModalVisible: false })}
        >
          
          <View style={[PALETTE.homepage.searchmodal]}>
            <View style={[PALETTE.row,{height:80, marginBottom:10, marginTop:10, alignItems:"center"}]}>
              <View style={[PALETTE.aligncentermiddle,{borderWidth:1, borderColor:COLORS.grey, margin:10, padding:4}]}>
                <Image source = {require("../res/images/icons/search-guest-house_host-by-company-popup/booking-management-previous_20.png")} />
              </View>
              <View style={[PALETTE.textbold, PALETTE.alignleftmiddle, PALETTE.profile]}>
                <Text style={[PALETTE.textbold, PALETTE.txtprofilename, {color:COLORS.black}]}>Company name</Text>
                <View style={[PALETTE.row,{alignItems:"center"}]}>
                <Rating
                  ratingCount={5}
                  startingValue={4}
                  defaultRating={5}
                  showRating={false}
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 10}}
                  imageSize={15}
                  readonly
                />
                <Text style={[]}>[Reviews]</Text>
                </View>
              </View>
            </View>
            <View style={[PALETTE.row]}>
              <View style={[PALETTE.f1,PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, margin:10}]}>
                <Text style={[PALETTE.text, {color: COLORS.darkgrey, paddingLeft:10}]}>Standard</Text>
              </View>
            </View>
            
            <View style={[PALETTE.row]}>
              <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:2, margin:10}]}>
                <Text style={[PALETTE.text, {color: COLORS.darkgrey, paddingLeft:10}]}>Per Night</Text>
              </View>
              <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:1, margin:10}]}>
                <Text style={[PALETTE.textbold, {color: COLORS.maincolor, paddingLeft:10}]}>$70.00</Text>
              </View>
            </View>
            
            <View style={[PALETTE.row]}>
              <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:2, margin:10}]}>
                <Text style={[PALETTE.text, {color: COLORS.darkgrey, paddingLeft:10}]}>Total Price</Text>
              </View>
              <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:1, margin:10}]}>
                <Text style={[PALETTE.textbold, {color: COLORS.maincolor, paddingLeft:10}]}>$100.00</Text>
              </View>
            </View>

            <View style={[PALETTE.row]}>
              <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:1, margin:10}]}>
                <Button
                  text = "Favorites"
                  onPress = {() => {this.props.navigation.navigate('HomeScreen');}}
                  bgcolor = {COLORS.gery}
                  btnstyle = {[PALETTE.textbold]}
                  color = {COLORS.darkgrey}
                  height = {40}
                  width = "100%"
                />
              </View>
              <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:1, margin:10}]}>
                <Button
                  text = "Book"
                  
                  onPress = {() => {this.setisCompanyBookModalVisible(true);}}
                  bgcolor = {COLORS.maincolor}
                  btnstyle = {[PALETTE.textbold]}
                  color = "white"
                  height = {40}
                  width = "100%"
                />
              </View>
            </View>
          </View>
        </Modal>

        <Modal isVisible={this.state.isIndividualModalVisible}
          onBackdropPress={() => this.setState({ isIndividualModalVisible: false })}
        >
          
          <View style={[PALETTE.homepage.searchmodal]}>
            <View style={[PALETTE.row,{height:80, marginBottom:10, marginTop:10, alignItems:"center"}]}>
              <View style={[PALETTE.aligncentermiddle,{borderWidth:1, borderColor:COLORS.grey, margin:10, padding:4}]}>
                <Image source = {require("../res/images/icons/search-guest-house_host-by-indivisual-popup/booking-management-previous_48.png")} />
              </View>
              <View style={[PALETTE.textbold, PALETTE.alignleftmiddle, PALETTE.profile]}>
                <Text style={[PALETTE.textbold, PALETTE.txtprofilename, {color:COLORS.black}]}>Company name</Text>
                <View style={[PALETTE.row,{alignItems:"center"}]}>
                <Rating
                  ratingCount={5}
                  startingValue={4}
                  defaultRating={5}
                  showRating={false}
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 10}}
                  imageSize={15}
                  readonly
                />
                <Text style={[]}>[Reviews]</Text>
                </View>
              </View>
            </View>
            <View style={[PALETTE.row]}>
              <View style={[PALETTE.f1,PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, margin:10}]}>
                <Text style={[PALETTE.text, {color: COLORS.darkgrey, paddingLeft:10}]}>House name</Text>
              </View>
            </View>
            
            <View style={[PALETTE.row]}>
              <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:2, margin:10}]}>
                <Text style={[PALETTE.text, {color: COLORS.darkgrey, paddingLeft:10}]}>Per Night</Text>
              </View>
              <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:1, margin:10}]}>
                <Text style={[PALETTE.textbold, {color: COLORS.maincolor, paddingLeft:10}]}>$70.00</Text>
              </View>
            </View>
            
            <View style={[PALETTE.row]}>
              <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:2, margin:10}]}>
                <Text style={[PALETTE.text, {color: COLORS.darkgrey, paddingLeft:10}]}>Total Price</Text>
              </View>
              <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:1, margin:10}]}>
                <Text style={[PALETTE.textbold, {color: COLORS.maincolor, paddingLeft:10}]}>$100.00</Text>
              </View>
            </View>

            <View style={[PALETTE.row]}>
              <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:1, margin:10}]}>
                <Button
                  text = "Favorites"
                  onPress = {() => {this.props.navigation.navigate('HomeScreen');}}
                  bgcolor = {COLORS.gery}
                  btnstyle = {[PALETTE.textbold]}
                  color = {COLORS.darkgrey}
                  height = {40}
                  width = "100%"
                />
              </View>
              <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:1, margin:10}]}>
                <Button
                  text = "Book"
                  onPress = {() => {this.props.navigation.navigate('HomeScreen');}}
                  bgcolor = {COLORS.maincolor}
                  btnstyle = {[PALETTE.textbold]}
                  color = "white"
                  height = {40}
                  width = "100%"
                />
              </View>
            </View>
          </View>
        </Modal>

        <Modal isVisible={this.state.isSearchModalVisible}
          onBackdropPress={() => this.setState({ isSearchModalVisible: false })}
        >
          <View style={[PALETTE.homepage.searchmodal]}>
            <View style={[PALETTE.row]}>
              <View style={[PALETTE.f1,{height:40,backgroundColor:COLORS.grey, margin:10}]}>
                <Picker
                  style={[PALETTE.text,{flex:1}]}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                  }>
                  <Picker.Item label="Country" value="country" />
                  <Picker.Item label="Saudi Arabia" value="saudi_araba" />
                  <Picker.Item label="India" value="india" />
                </Picker>
              </View>
              <View style={[PALETTE.f1,{height:40,backgroundColor:COLORS.grey, margin:10}]}>
                <Picker
                  selectedValue={this.state.language}
                  style={{flex:1}}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                  }>
                  <Picker.Item label="City" value="city" />
                </Picker>
              </View>
            </View>

            <View style={[PALETTE.row]}>
              <View style={[PALETTE.f1,{backgroundColor:COLORS.grey, margin:10}]}>
              <TouchableOpacity onPress = {() => this.datepicker('in')}>
                  <IconInput 
                    icon = "&#xf073;"
                    text = "Check In"
                    value = {this.state.val_checkin}
                    touchable = {true}
                    iconstyle = {{color:COLORS.darkgrey}}                  
                    style = {{marginTop:0, marginBottom:0}}                  
                  /> 
                </TouchableOpacity>
            </View>
            <View style={[PALETTE.f1,{backgroundColor:COLORS.grey, margin:10}]}>
                <TouchableOpacity onPress = {() => this.datepicker('out')}>
                  <IconInput 
                    icon = "&#xf073;"
                    text = "Check Out"
                    value = {this.state.val_checkout}
                    touchable = {true}
                    iconstyle = {{color:COLORS.darkgrey}}                  
                    style = {{marginTop:0, marginBottom:0}}                  
                  /> 
                </TouchableOpacity>
              </View>
            </View>
            <View style={[PALETTE.row]}>
              <View style={[PALETTE.f1, PALETTE.primaryCenter, PALETTE.secondaryCenter,{backgroundColor:COLORS.grey, margin:10}]}>
                <Text style={[PALETTE.text]}>Adults</Text>
              </View>
              <View style={[PALETTE.f1, PALETTE.primaryCenter, PALETTE.secondaryCenter,{backgroundColor:COLORS.grey, margin:10}]}>
                <InputSpinner
                  min={1}
                  step={1}
                  value={1}
                  height={40}
                  onChange={(num) => {
                      console.log(num);
                  }}
                />
              </View>
            </View>
            <View style={[PALETTE.row]}>
              <View style={[PALETTE.f1, PALETTE.primaryCenter, PALETTE.secondaryCenter,{backgroundColor:COLORS.grey, margin:10}]}>
                <Text style={[PALETTE.text]}>Children</Text>
              </View>
              <View style={[PALETTE.f1, PALETTE.primaryCenter, PALETTE.secondaryCenter,{backgroundColor:COLORS.grey, margin:10}]}>
                <InputSpinner
                  min={1}
                  step={1}
                  value={1}
                  height={40}
                  onChange={(num) => {
                      console.log(num);
                  }}
                />
              </View>
            </View>
            <View style={[PALETTE.row]}>
              <View style={[PALETTE.f1, PALETTE.primaryCenter, PALETTE.secondaryCenter,{backgroundColor:COLORS.grey, margin:10}]}>
                <Text style={[PALETTE.text]}>Rooms</Text>
              </View>
              <View style={[PALETTE.f1, PALETTE.primaryCenter, PALETTE.secondaryCenter,{backgroundColor:COLORS.grey, margin:10}]}>
                <InputSpinner
                  min={1}
                  step={1}
                  value={1}
                  height={40}
                  onChange={(num) => {
                      console.log(num);
                  }}
                />
              </View>
            </View>
            <View style={[PALETTE.row]}>
              <View style={[PALETTE.f1,{height:40,backgroundColor:COLORS.grey, margin:10}]}>
                <Picker
                  style={[PALETTE.text,{flex:1}]}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({language: itemValue})
                  }>
                  <Picker.Item label="Host" value="Host" />
                  <Picker.Item label="Host" value="Host" />
                  <Picker.Item label="Host" value="Host" />
                </Picker>
              </View>
            </View>
            <View style={[PALETTE.row]}>
              <View style={[PALETTE.f1]}>
                <Rating
                  ratingCount={5}
                  startingValue={0}
                  showRating={false}
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 10 }}
                />
              </View>
            </View>
            <View style={[PALETTE.row]}>
              <View style={[PALETTE.f1,{margin:10}]}>
                <Button
                  text = "Search"
                  onPress = {() => {this.props.navigation.navigate('Booking');}}
                  bgcolor = {COLORS.maincolor}
                  height = {40}
                  width = "100%"
                />
              </View>
            </View>
          </View>
        </Modal>
      
        <Modal isVisible={this.state.isCompanyBookModalVisible}
          onBackdropPress={() => this.setState({ isCompanyBookModalVisible: false })}
        >
          <View style={[PALETTE.homepage.searchmodal, {padding:10}]}>
            <View style={[PALETTE.row]}>
              <View style={[]}>
                <Button
                  onPress={()=>{this.setState({ isCompanyBookModalVisible: false }); this.setState({ isCompanyModalVisible: true }); }}
                  text = "&#xf060;"
                  height = {25}
                  width = {25}
                  btnstyle = {[PALETTE.icontext,{fontSize:25}]}
                /> 
              </View>
              <View style={{flex:1}}>
                <View style={[PALETTE.row, {justifyContent:"center"}]}>
                  
                    <View style={{width:30, height:30, borderRadius:15, borderWidth:10, borderColor:"white", backgroundColor:COLORS.maincolor}}></View>
                    <View style={{width:30, height:30, borderRadius:15, borderWidth:10, borderColor:"white", backgroundColor:COLORS.darkgrey}}></View>
                    <View style={{width:30, height:30, borderRadius:15, borderWidth:10, borderColor:"white", backgroundColor:COLORS.darkgrey}}></View>
                  
                </View>
              </View>
            </View>
            <ScrollView>
              <View style={[PALETTE.row]}>
                <View style={[PALETTE.f1,PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey,marginTop:10}]}>
                  <Text style={[PALETTE.text, {color: COLORS.darkgrey, paddingLeft:10}]}>House name</Text>
                </View>
              </View>
              <View style={[PALETTE.row,{alignItems:"center"}]}>
                <Rating
                  ratingCount={5}
                  startingValue={4}
                  defaultRating={5}
                  showRating={false}
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 10}}
                  imageSize={15}
                  readonly
                />
                <Text style={[PALETTE.text, {color:COLORS.darkgrey, paddingLeft:10}]}>[Reviews]</Text>
              </View>
              <View style={[PALETTE.homepage.hr]} />
              <View style={[PALETTE.row]}>
                <Text style={[PALETTE.icontext, {color:COLORS.darkgrey, marginRight:10}]}>&#xf3c5;</Text>
                <Text style={[PALETTE.text,{color:COLORS.darkgrey} ]}>Keas 69 Str.15234, Chalandri Athens, Greece</Text>
              </View>
              <View style={[PALETTE.homepage.hr]} />
              <Text style={[PALETTE.textbold,{color:COLORS.darkgrey, paddingBottom:20} ]}>Gallery</Text>
              <View style={[PALETTE.row,{justifyContent:"space-between", marginTop:10}]}>
                <Image style={{width:50, height:50}} source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_03.png")} />
                <Image style={{width:50, height:50}} source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_03.png")} />
                <Image style={{width:50, height:50}} source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_03.png")} />
                <Image style={{width:50, height:50}} source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_03.png")} />
                <Image style={{width:50, height:50}} source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_03.png")} />
                <Image style={{width:50, height:50}} source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_03.png")} />                  
              </View>
              <View style={[PALETTE.row,{justifyContent:"space-between", marginTop:10}]}>
                <Image style={{width:50, height:50}} source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_03.png")} />
                <Image style={{width:50, height:50}} source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_03.png")} />
                <Image style={{width:50, height:50}} source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_03.png")} />
                <Image style={{width:50, height:50}} source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_03.png")} />
                <Image style={{width:50, height:50}} source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_03.png")} />
                <Image style={{width:50, height:50}} source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_03.png")} />                  
              </View>
              <Text style={[PALETTE.textbold,{color:COLORS.darkgrey, paddingTop:20, paddingBottom:20} ]}>Overview</Text>
              <View style={[PALETTE.row,{justifyContent:"space-between", marginTop:10}]}>
                <View style={{flex:1, justifyContent:"center", paddingLeft:10, height:30, backgroundColor:COLORS.maincolor}}>
                  <Text style={[PALETTE.text,{color:COLORS.white}]}>Bedroom</Text>
                </View>
                <View style={{justifyContent:"center", alignItems:"center", height:30, width:30, marginLeft:3, backgroundColor:COLORS.grey}}><Text style={[PALETTE.text,{color:COLORS.darkgrey}]}>3</Text></View>
                <View style={{width:10}}></View>
                <View style={{flex:1, justifyContent:"center", paddingLeft:10, height:30,backgroundColor:COLORS.maincolor}}>
                  <Text style={[PALETTE.text,{color:COLORS.white}]}>Reception</Text>
                </View>
                <View style={{justifyContent:"center", alignItems:"center", height:30, width:30, marginLeft:3, backgroundColor:COLORS.grey}}><Text style={[PALETTE.text,{color:COLORS.darkgrey}]}>1</Text></View>
              </View>
              <View style={[PALETTE.row,{justifyContent:"space-between", marginTop:10}]}>
                <View style={{flex:1, justifyContent:"center", paddingLeft:10, height:30, backgroundColor:COLORS.maincolor}}>
                  <Text style={[PALETTE.text,{color:COLORS.white}]}>Kitchen</Text>
                </View>
                <View style={{justifyContent:"center", alignItems:"center", height:30, width:30, marginLeft:3, backgroundColor:COLORS.grey}}><Text style={[PALETTE.text,{color:COLORS.darkgrey}]}>3</Text></View>
                <View style={{width:10}}></View>
                <View style={{flex:1, justifyContent:"center", paddingLeft:10, height:30,backgroundColor:COLORS.maincolor}}>
                  <Text style={[PALETTE.text,{color:COLORS.white}]}>Bathrooms</Text>
                </View>
                <View style={{justifyContent:"center", alignItems:"center", height:30, width:30, marginLeft:3, backgroundColor:COLORS.grey}}><Text style={[PALETTE.text,{color:COLORS.darkgrey}]}>1</Text></View>
              </View>
              <View style={[PALETTE.row,{justifyContent:"space-between", marginTop:10}]}>
                <View style={{flex:1, justifyContent:"center", paddingLeft:10, height:30, backgroundColor:COLORS.maincolor}}>
                  <Text style={[PALETTE.text,{color:COLORS.white}]}>Parking</Text></View>
                <View style={{justifyContent:"center", alignItems:"center", height:30, width:30, marginLeft:3, backgroundColor:COLORS.grey}}><Text style={[PALETTE.text,{color:COLORS.darkgrey}]}>3</Text></View>
                <View style={{width:10}}></View>
                <View style={{flex:1, justifyContent:"center", paddingLeft:10, height:30,backgroundColor:COLORS.white}}></View>
                <View style={{justifyContent:"center", alignItems:"center", height:30, width:30, marginLeft:3, backgroundColor:COLORS.white}}></View>
              </View>
              
              
              <Text style={[PALETTE.textbold,{color:COLORS.darkgrey, paddingTop:20, paddingBottom:20} ]}>Amenities</Text>
              <View style={[PALETTE.row,{justifyContent:"space-between"}]}>
                
                <View style={[{justifyContent:"center",  paddingLeft:10, paddingRight:10, alignItems:"center", alignContents:"center", height:30, backgroundColor:COLORS.grey}]}>
                  <View style={[PALETTE.row]}>
                  <Image style={{height:15, width:undefined, aspectRatio:69/45}}  source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_25.png")} />
                  <Text style={[PALETTE.text,{color:COLORS.darkgrey, paddingLeft:10}]}>
                    Air Conditioning
                  </Text>
                  </View>
                </View>
                <View style={[{justifyContent:"center", paddingLeft:10, paddingRight:10, alignItems:"center", alignContents:"center", height:30, backgroundColor:COLORS.grey}]}>
                  <View style={[PALETTE.row]}>
                  <Image style={{height:15, width:undefined, aspectRatio:1}}  source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_28.png")} />
                  <Text style={[PALETTE.text,{color:COLORS.darkgrey, paddingLeft:10}]}>
                    Dryer
                  </Text>
                  </View>
                </View>
                <View style={[{justifyContent:"center",  paddingLeft:10, paddingRight:10, alignItems:"center", alignContents:"center", height:30, backgroundColor:COLORS.grey}]}>
                  <View style={[PALETTE.row]}>
                  <Image style={{height:15, width:undefined, aspectRatio:1}}  source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_22.png")} />
                  <Text style={[PALETTE.text,{color:COLORS.darkgrey, paddingLeft:10}]}>
                    TV
                  </Text>
                  </View>
                </View>                  
              </View>
              
              <Text style={[PALETTE.textbold,{color:COLORS.darkgrey, paddingTop:20, paddingBottom:20} ]}>Internal policy</Text>
              <View style={[PALETTE.row]}>
                <View style={[PALETTE.row,{flex:1}]}>
                  <Image style={{height:15, width:undefined, aspectRatio:48/54}}  source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_33.png")} />
                  <Text style={[PALETTE.text,{color:COLORS.darkgrey, paddingLeft:10}]}>
                    Check-in
                  </Text>
                </View>
                <View style={[PALETTE.row,{flex:2}]}>
                  <Text style={[PALETTE.text,{color:COLORS.darkgrey, paddingLeft:10}]}>
                    12:00pm - 2:00pm hours
                  </Text>
                </View>
              </View>

              <View style={[PALETTE.homepage.hr]} />

              <View style={[PALETTE.row]}>
                <View style={[PALETTE.row,{flex:1}]}>
                  <Image style={{height:15, width:undefined, aspectRatio:48/54}}  source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_33.png")} />
                  <Text style={[PALETTE.text,{color:COLORS.darkgrey, paddingLeft:10}]}>
                    Check-out
                  </Text>
                </View>
                <View style={[PALETTE.row,{flex:2}]}>
                  <Text style={[PALETTE.text,{color:COLORS.darkgrey, paddingLeft:10}]}>
                    Until 2:00pm hours
                  </Text>
                </View>
              </View>

              <View style={[PALETTE.homepage.hr]} />

              <View style={[PALETTE.row]}>
                <View style={[PALETTE.row,{flex:1}]}>
                  <Image style={{height:15, width:undefined, aspectRatio:48/54}}  source={require("../res/images/icons/search-guest-house_popup-booking-step-1-company/booking-updates-company_36.png")} />
                  <Text style={[PALETTE.text,{color:COLORS.darkgrey, paddingLeft:10}]}>
                    Cancelation
                  </Text>
                </View>
                <View style={[PALETTE.row,{flex:2}]}>
                  <Text style={[PALETTE.text,{color:COLORS.darkgrey, paddingLeft:10}]}>
                    Cancelation is for free except cancel eithin 72hours from check in time
                  </Text>
                </View>
              </View>

              <View style={[PALETTE.row, {marginTop:20}]}>
                <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:3}]}>
                  <Text style={[PALETTE.text, {color: COLORS.darkgrey, paddingLeft:10}]}>Per Night</Text>
                </View>
                <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:1}]}>
                  <Text style={[PALETTE.textbold, {color: COLORS.maincolor, paddingLeft:10}]}>$70.00</Text>
                </View>
              </View>

              <View style={[PALETTE.row, {marginTop:20}]}>
                <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:3}]}>
                  <Text style={[PALETTE.text, {color: COLORS.darkgrey, paddingLeft:10}]}>Total Price</Text>
                </View>
                <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:1}]}>
                  <Text style={[PALETTE.textbold, {color: COLORS.maincolor, paddingLeft:10}]}>$270.00</Text>
                </View>
              </View>

              <View style={[PALETTE.row, {marginTop:20}]}>
                <View
                  style = {[PALETTE.f1, PALETTE.center]}>
                  <Button
                    text = "Booking Summary"
                    bgcolor = {COLORS.white}
                    color = {COLORS.black}
                    height = {40}
                    width = '99%'
                    style = {[PALETTE.homepage.shadow]}
                  />
                </View>
              </View>
            

              <View style={[PALETTE.row, {marginTop:20}]}>
                <View
                  style = {[PALETTE.f1, PALETTE.center]}>
                  <Button
                    text = "Continue"
                    onPress={()=>{this.setState({ isCompanyBookStep2ModalVisible: true }); this.setState({ isCompanyBookModalVisible: false }); }}                 
                    bgcolor = {COLORS.maincolor}
                    color = {COLORS.white}
                    height = {40}
                    width = '99%'
                    style = {[PALETTE.homepage.shadow]}
                  />
                </View>
              </View>

            </ScrollView>

          </View>
        </Modal>
      
        <Modal isVisible={this.state.isCompanyBookStep2ModalVisible}
          // onBackdropPress={() => this.setState({ isCompanyBookModalVisible: false })}
        >
          <View style={[PALETTE.homepage.searchmodal, {padding:10}]}>
            <View style={[PALETTE.row]}>
              <View style={[]}>
                <Button
                  onPress={()=>{this.setState({ isCompanyBookStep2ModalVisible: false }); this.setState({ isCompanyBookModalVisible: true }); }}
                  text = "&#xf060;"
                  height = {25}
                  width = {25}
                  btnstyle = {[PALETTE.icontext,{fontSize:25}]}
                /> 
              </View>
              <View style={{flex:1}}>
                <View style={[PALETTE.row, {justifyContent:"center"}]}>
                  
                    <View style={{width:30, height:30, borderRadius:15, borderWidth:10, borderColor:"white", backgroundColor:COLORS.darkgrey}}></View>
                    <View style={{width:30, height:30, borderRadius:15, borderWidth:10, borderColor:"white", backgroundColor:COLORS.maincolor}}></View>
                    <View style={{width:30, height:30, borderRadius:15, borderWidth:10, borderColor:"white", backgroundColor:COLORS.darkgrey}}></View>
                  
                </View>
              </View>
            </View>
            <ScrollView>
              <View style={[PALETTE.row]}>
                <View style={{borderWidth:2, borderColor:COLORS.grey, flex:1, margin:10, padding:10}}>
                  <CheckBox
                    value={this.state.checked_guest_house}
                    onValueChange={() => this.setState({ checked_guest_house: !this.state.checked_guest_house })}
                  /> 
                  <View style={{marginTop:-30, flex:1, justifyContent:"center", alignItems:"center", alignContent:"center"}} >
                    <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:30, width:60, height:60}} >
                      <Image style={{width:25, height:25}} source={require("../res/images/icons/search-guest-house_popup-booking-step-2/search-guest-house_popup-booking-step-2_11.png")} />
                    </View>
                    <View style={{flex:1, justifyContent:"center"}} >
                      <Text style={[PALETTE.text, {color:COLORS.darkgrey, marginTop:10}]}>Guest House</Text>
                    </View>

                    <View style={[PALETTE.row, {marginTop:10, justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                      <View>
                      <View style={[PALETTE.row,{padding:2, backgroundColor:COLORS.grey}]}>
                        <View style={{width:15, justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                          <Text>2</Text>
                        </View>
                        <View style={{width:15}}>
                          <View style={{margin:1, backgroundColor:COLORS.mgrey, width:12, height:10,justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                            <Image style={{width:6, height:6}} source={require("../res/images/icons/search-guest-house_popup-booking-step-2/search-guest-house_popup-booking-step-2_23.png")} />
                          </View>
                          <View style={{margin:1, backgroundColor:COLORS.mgrey, width:12, height:10,justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                            <Image style={{width:6, height:6}} source={require("../res/images/icons/search-guest-house_popup-booking-step-2/search-guest-house_popup-booking-step-2_22.png")} />
                          </View>
                        </View>
                      </View>
                      </View>
                      <View style={{justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                        <Text style={[PALETTE.text, { color:COLORS.darkgrey,fontSize:10}]}>Hour/daily</Text>
                      </View>                      
                    </View>
                    <View style={{flex:1, justifyContent:"center"}} >
                      <Text style={[PALETTE.text, {color:COLORS.maincolor, marginTop:10}]}>$100.00</Text>
                    </View>
                  </View>
                </View>
                <View style={{borderWidth:2, borderColor:COLORS.grey, flex:1, margin:10, padding:10}}>
                  <CheckBox
                    value={this.state.checked_airport_reception}
                    onValueChange={() => this.setState({ checked_airport_reception: !this.state.checked_airport_reception })}
                  /> 
                  <View style={{marginTop:-30, flex:1, justifyContent:"center", alignItems:"center", alignContent:"center"}} >
                    <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:30, width:60, height:60}} >
                      <Image style={{width:25, height:25}} source={require("../res/images/icons/search-guest-house_popup-booking-step-2/search-guest-house_popup-booking-step-2_14.png")} />
                    </View>
                    <View style={{flex:1, justifyContent:"center"}} >
                      <Text style={[PALETTE.text, {color:COLORS.darkgrey, marginTop:10}]}>Airport Reception</Text>
                    </View>

                    <View style={[PALETTE.row, {marginTop:10, justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                      <View>
                      <View style={[PALETTE.row,{padding:2, backgroundColor:COLORS.grey}]}>
                        <View style={{width:15, justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                          <Text>2</Text>
                        </View>
                        <View style={{width:15}}>
                          <View style={{margin:1, backgroundColor:COLORS.mgrey, width:12, height:10,justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                            <Image style={{width:6, height:6}} source={require("../res/images/icons/search-guest-house_popup-booking-step-2/search-guest-house_popup-booking-step-2_23.png")} />
                          </View>
                          <View style={{margin:1, backgroundColor:COLORS.mgrey, width:12, height:10,justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                            <Image style={{width:6, height:6}} source={require("../res/images/icons/search-guest-house_popup-booking-step-2/search-guest-house_popup-booking-step-2_22.png")} />
                          </View>
                        </View>
                      </View>
                      </View>
                      <View style={{justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                        <Text style={[PALETTE.text, { color:COLORS.darkgrey,fontSize:10}]}>Hour/daily</Text>
                      </View>                      
                    </View>
                    <View style={{flex:1, justifyContent:"center"}} >
                      <Text style={[PALETTE.text, {color:COLORS.maincolor, marginTop:10}]}>$50.00</Text>
                    </View>
                  </View>
                </View>
                
              </View>
              


              <View style={[PALETTE.row]}>
                <View style={{borderWidth:2, borderColor:COLORS.grey, flex:1, margin:10, padding:10}}>
                  <CheckBox
                    value={this.state.checked_personal_driver}
                    onValueChange={() => this.setState({ checked_personal_driver: !this.state.checked_personal_driver })}
                  /> 
                  <View style={{marginTop:-30, flex:1, justifyContent:"center", alignItems:"center", alignContent:"center"}} >
                    <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:30, width:60, height:60}} >
                      <Image style={{width:25, height:25}} source={require("../res/images/icons/search-guest-house_popup-booking-step-2/search-guest-house_popup-booking-step-2_25.png")} />
                    </View>
                    <View style={{flex:1, justifyContent:"center"}} >
                      <Text style={[PALETTE.text, {color:COLORS.darkgrey, marginTop:10}]}>Personal Driver</Text>
                    </View>

                    <View style={[PALETTE.row, {marginTop:10, justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                      <View>
                      <View style={[PALETTE.row,{padding:2, backgroundColor:COLORS.grey}]}>
                        <View style={{width:15, justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                          <Text>2</Text>
                        </View>
                        <View style={{width:15}}>
                          <View style={{margin:1, backgroundColor:COLORS.mgrey, width:12, height:10,justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                            <Image style={{width:6, height:6}} source={require("../res/images/icons/search-guest-house_popup-booking-step-2/search-guest-house_popup-booking-step-2_23.png")} />
                          </View>
                          <View style={{margin:1, backgroundColor:COLORS.mgrey, width:12, height:10,justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                            <Image style={{width:6, height:6}} source={require("../res/images/icons/search-guest-house_popup-booking-step-2/search-guest-house_popup-booking-step-2_22.png")} />
                          </View>
                        </View>
                      </View>
                      </View>
                      <View style={{justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                        <Text style={[PALETTE.text, { color:COLORS.darkgrey,fontSize:10}]}>Hour/daily</Text>
                      </View>                      
                    </View>
                    <View style={{flex:1, justifyContent:"center"}} >
                      <Text style={[PALETTE.text, {color:COLORS.maincolor, marginTop:10}]}>$80.00</Text>
                    </View>
                  </View>
                </View>
                <View style={{borderWidth:2, borderColor:COLORS.grey, flex:1, margin:10, padding:10}}>
                  <CheckBox
                    value={this.state.checked_house_maid}
                    onValueChange={() => this.setState({ checked_house_maid: !this.state.checked_house_maid })}
                  /> 
                  <View style={{marginTop:-30, flex:1, justifyContent:"center", alignItems:"center", alignContent:"center"}} >
                    <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:30, width:60, height:60}} >
                      <Image style={{width:25, height:25}} source={require("../res/images/icons/search-guest-house_popup-booking-step-2/search-guest-house_popup-booking-step-2_28.png")} />
                    </View>
                    <View style={{flex:1, justifyContent:"center"}} >
                      <Text style={[PALETTE.text, {color:COLORS.darkgrey, marginTop:10}]}>House Maid</Text>
                    </View>

                    <View style={[PALETTE.row, {marginTop:10, justifyContent:"center", alignItems:"center", alignContent:"center"}]}>
                      <View>
                      <View style={[PALETTE.row,{padding:2, backgroundColor:COLORS.grey}]}>
                        <View style={{width:15, justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                          <Text>2</Text>
                        </View>
                        <View style={{width:15}}>
                          <View style={{margin:1, backgroundColor:COLORS.mgrey, width:12, height:10,justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                            <Image style={{width:6, height:6}} source={require("../res/images/icons/search-guest-house_popup-booking-step-2/search-guest-house_popup-booking-step-2_23.png")} />
                          </View>
                          <View style={{margin:1, backgroundColor:COLORS.mgrey, width:12, height:10,justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                            <Image style={{width:6, height:6}} source={require("../res/images/icons/search-guest-house_popup-booking-step-2/search-guest-house_popup-booking-step-2_22.png")} />
                          </View>
                        </View>
                      </View>
                      </View>
                      <View style={{justifyContent:"center", alignItems:"center", alignContent:"center"}}>
                        <Text style={[PALETTE.text, { color:COLORS.darkgrey,fontSize:10}]}>Hour/daily</Text>
                      </View>                      
                    </View>
                    <View style={{flex:1, justifyContent:"center"}} >
                      <Text style={[PALETTE.text, {color:COLORS.maincolor, marginTop:10}]}>$90.00</Text>
                    </View>
                  </View>
                </View>
                
              </View>



              <View style={[PALETTE.homepage.hr]} />

              <View style={[PALETTE.row, {justifyContent:"center"}]} >
                <Text style={[PALETTE.text, {color:COLORS.darkgrey, fontSize:20, marginTop:10}]}>Total : </Text>
                <Text style={[PALETTE.text, {color:COLORS.maincolor, fontSize:20, marginTop:10}]}>320.00$</Text>
              </View>

              <View style={[PALETTE.row, {marginTop:20}]}>
                <View
                  style = {[PALETTE.f1, PALETTE.center]}>
                  <Button
                    text = "Booking Summary"
                    bgcolor = {COLORS.white}
                    color = {COLORS.black}
                    height = {40}
                    width = '99%'
                    style = {[PALETTE.homepage.shadow]}
                  />
                </View>
              </View>
            

              <View style={[PALETTE.row, {marginTop:20}]}>
                <View
                  style = {[PALETTE.f1, PALETTE.center]}>
                  <Button
                    text = "Continue"
                    onPress={()=>{this.setState({ isCompanyBookStep2ModalVisible: false }); this.setState({ isCompanyBookStep3ModalVisible: true }); }}                 
                    bgcolor = {COLORS.maincolor}
                    color = {COLORS.white}
                    height = {40}
                    width = '99%'
                    style = {[PALETTE.homepage.shadow]}
                  />
                </View>
              </View>

            </ScrollView>

          </View>
        </Modal>
      
        <Modal isVisible={this.state.isCompanyBookStep3ModalVisible}
          // onBackdropPress={() => this.setState({ isCompanyBookStep3ModalVisible: false })}
        >
          <View style={[PALETTE.homepage.searchmodal, {padding:10}]}>
            <View style={[PALETTE.row]}>
              <View style={[]}>
                <Button
                  onPress={()=>{this.setState({ isCompanyBookStep3ModalVisible: false }); this.setState({ isCompanyBookStep2ModalVisible: true }); }}
                  text = "&#xf060;"
                  height = {25}
                  width = {25}
                  btnstyle = {[PALETTE.icontext,{fontSize:25}]}
                /> 
              </View>
              <View style={{flex:1}}>
                <View style={[PALETTE.row, {justifyContent:"center"}]}>
                  
                    <View style={{width:30, height:30, borderRadius:15, borderWidth:10, borderColor:"white", backgroundColor:COLORS.darkgrey}}></View>
                    <View style={{width:30, height:30, borderRadius:15, borderWidth:10, borderColor:"white", backgroundColor:COLORS.darkgrey}}></View>
                    <View style={{width:30, height:30, borderRadius:15, borderWidth:10, borderColor:"white", backgroundColor:COLORS.maincolor}}></View>
                  
                </View>
              </View>
            </View>
            <ScrollView>
              <View style={[PALETTE.row, {marginTop:20}]}>
                <View style={[PALETTE.alignleftmiddle,{marginRight:10,height:40,backgroundColor:COLORS.grey, flex:1}]}>
                  <Text style={[PALETTE.text, {color: COLORS.darkgrey, paddingLeft:10}]}>Coupon Code</Text>
                </View>

                <View style={[PALETTE.alignleftmiddle,{marginRight:10,height:40,backgroundColor:COLORS.grey, flex:1}]}>
                  <TextInput style={[PALETTE.textbold, {color: COLORS.maincolor, paddingLeft:10}]}></TextInput>
                </View>
                
                <View style={[PALETTE.alignleftmiddle,{height:40,flex:1}]}>
                  <CheckBox
                    value={true} 
                  /> 
                </View>
              </View>


              <View style={[PALETTE.row, {marginTop:20}]}>
                <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:3}]}>
                  <Text style={[PALETTE.text, {color: COLORS.darkgrey, paddingLeft:10}]}>Discount</Text>
                </View>
                <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:1}]}>
                  <Text style={[PALETTE.textbold, {color: COLORS.maincolor, paddingLeft:10}]}>-150.00$</Text>
                </View>
              </View>
              <View style={[PALETTE.row, {marginTop:20}]}>
                <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:3}]}>
                  <Text style={[PALETTE.text, {color: COLORS.darkgrey, paddingLeft:10}]}>Total Price</Text>
                </View>
                <View style={[PALETTE.alignleftmiddle,{height:40,backgroundColor:COLORS.grey, flex:1}]}>
                  <Text style={[PALETTE.textbold, {color: COLORS.maincolor, paddingLeft:10}]}>1200.00$</Text>
                </View>
              </View>
              <View style={[PALETTE.row,{marginTop:10}]}>
                <View style={{borderWidth:2, borderColor:COLORS.grey, flex:1, margin:5, padding:10}}>
                  <View style={{marginTop:10, flex:1, justifyContent:"center", alignItems:"center", alignContent:"center"}} >
                    <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:30, width:60, height:60}} >
                      <Image style={{width:25, height:25}} source={require("../res/images/icons/search-guest-house_popup-booking-step-3/search-guest-house_popup-booking-step-3_10.png")} />
                    </View>
                    <View style={{flex:1, justifyContent:"center"}} >
                      <Text style={[PALETTE.textbold, {color:COLORS.darkgrey, marginTop:10}]}>On Arrival</Text>
                    </View>
                  </View>
                </View>
                <View style={{borderWidth:2, borderColor:COLORS.grey, flex:1, margin:5, padding:10}}>
                  <View style={{marginTop:10, flex:1, justifyContent:"center", alignItems:"center", alignContent:"center"}} >
                    <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:30, width:60, height:60}} >
                      <Image style={{width:25, height:25}} source={require("../res/images/icons/search-guest-house_popup-booking-step-3/search-guest-house_popup-booking-step-3_12.png")} />
                    </View>
                    <View style={{flex:1, justifyContent:"center"}} >
                      <Text style={[PALETTE.textbold, {color:COLORS.darkgrey, marginTop:10}]}>Credit Card</Text>
                    </View>
                  </View>
                </View>
                <View style={{borderWidth:2, borderColor:COLORS.grey, flex:1, margin:5, padding:10}}>
                  <View style={{marginTop:10, flex:1, justifyContent:"center", alignItems:"center", alignContent:"center"}} >
                    <View style={{flex:1, justifyContent:"center", alignItems:"center", alignContent:"center", backgroundColor:COLORS.lightmaincolor, borderRadius:30, width:60, height:60}} >
                      <Image style={{width:25, height:25}} source={require("../res/images/icons/search-guest-house_popup-booking-step-3/search-guest-house_popup-booking-step-3_07.png")} />
                    </View>
                    <View style={{flex:1, justifyContent:"center"}} >
                      <Text style={[PALETTE.textbold, {color:COLORS.darkgrey, marginTop:10}]}>Paypal</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={[PALETTE.row, {marginTop:20}]}>
                <View
                  style = {[PALETTE.f1, PALETTE.center]}>
                  <Button
                    text = "Finish"
                    onPress={()=>{this.setState({ isCompanyBookStep3ModalVisible: false }); }}                 
                    bgcolor = {COLORS.maincolor}
                    color = {COLORS.white}
                    height = {40}
                    width = '99%'
                    style = {[PALETTE.homepage.shadow]}
                  />
                </View>
              </View>

            </ScrollView>

          </View>
        </Modal>
      
        <MapView
          style={styles.map}
          showsMyLocationButton

          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >      
          <Marker  
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}  
            title={"Company"}  
            description={""}  
            pinColor={COLORS.maincolor}
            
            onPress = {() => {this.setisCompanyModalVisible(true);}}
          >  
            <Image source={require('../res/images/icons/the-map/the-map_07.png')} style={{height: 36, width:26 }} />
          </Marker>
          
          <Marker  
            coordinate={{ latitude: 37.77725, longitude: -122.4324 }}  
            title={"Individual"}  
            description={""}  
            pinColor={COLORS.maincolor}
            onPress = {() => {this.setisIndividualModalVisible(true);}}
          >  
            
              <Image source={require('../res/images/icons/the-map/the-map_07.png')} style={{height: 36, width:26 }} />
            
          </Marker>
        </MapView>

        <View
          style={[
            PALETTE.row,
            PALETTE.primaryBetween,
            PALETTE.secondaryCenter,
            PALETTE.menubar,
          ]}>
          
          <Button
            onPress={()=>{this.props.navigation.toggleDrawer()}}
            text = "&#xf0c9;"
            height = {30}
            width = {30}
            btnstyle = {[PALETTE.icontext,{fontSize:30}]}
          />         

          <View>
            <View style={PALETTE.row}>
              <Button
                text = "&#xf0e0;"
                height = {30}
                width = {30}
                btnstyle = {[PALETTE.icontext,{fontSize:20}]}
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

        <View style={[PALETTE.login.bottomcontent]}>
          <View style={[PALETTE.bottom]}>
            <View style={[PALETTE.row]}>
              <View
                style = {[PALETTE.f1, PALETTE.center]}>
                <Button
                  text = "Search"
                  onPress = {() => {this.setisSearchModalVisible(true);}}
                  bgcolor = {COLORS.white}
                  color = {COLORS.black}
                  height = {40}
                  width = '100%'
                  style = {[PALETTE.homepage.bottom]}
                />
              </View>
            </View>
          </View>
          
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});