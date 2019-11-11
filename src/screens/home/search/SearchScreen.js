import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { SearchHeader } from 'appComponents/home';
import { StudentItem, SeparatorBar } from 'appComponents/common';
import R from 'res/R';

// load resources: COLORS && PALETTE && IMAGE
const { COLORS, PALETTE, IMAGES } = R;

const STUDENT_DATA = [
  { name: 'Tyler Conllin', no: '245', img: IMAGES.AVATAR_GIRL },
  { name: 'Toe Heftiba', no: '198', img: IMAGES.AVATAR_BOY },
];

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      studentData: STUDENT_DATA,
    };
  }

  searchFilter = text => {
    const newData = STUDENT_DATA.filter(item => {
      const itemData = item.name ? item.name.toUpperCase() : '';
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      studentData: newData,
      searchText: text,
    });
  };

  _renderItem = ({ item, index }) => {
    return (
      <StudentItem
        title={item.name}
        no={item.no}
        img={item.img}
        isTouchable={true} // check if student item is checkable or not
        onPress={() =>
          this.props.navigation.navigate('ProfileScreen', {
            profileName: item.name,
            profileLesson: item.no,
          })
        }
      />
    );
  };

  render() {
    const searchText = this.state.searchText;
    const studentData = this.state.studentData;
    const { navigation } = this.props;
    return (
      <View
        style={[
          PALETTE.body,
          {
            backgroundColor: COLORS.white,
          },
        ]}>
        {/** Header Section */}
        <SearchHeader
          value={searchText}
          onChangeText={text => this.searchFilter(text)}
          onPressBack={() => {
            navigation.goBack();
          }}
          onPressClose={() => {
            this.searchFilter('');
          }}
        />

        {/** Search Section */}
        <View
          style={[
            PALETTE.f1,
            {
              backgroundColor: COLORS.greyPale,
            },
          ]}>
          {/** Main Section */}
          <FlatList
            data={studentData}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => '' + index}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <SeparatorBar
                width={'100%'}
                height={1}
                backgroundColor={COLORS.greyPaleTwo}
                marginLeft={32}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

export default SearchScreen;
