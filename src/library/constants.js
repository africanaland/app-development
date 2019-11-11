import { Dimensions } from 'react-native';
import R from 'res/R';
const { COLORS } = R;

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

const CARD_TYPE_DATA = [
  {
    type: 'duyurular',
    text: 'Duyurular',
    bgColor: COLORS.pinkBarbie,
    textColor: COLORS.white,
  },
  {
    type: 'analytic',
    text: 'Analytic',
    bgColor: COLORS.blueCornflower,
    textColor: COLORS.white,
  },
  {
    type: 'request',
    text: 'Request',
    bgColor: COLORS.blueLight,
    textColor: COLORS.white,
  },
  {
    type: 'alert',
    text: 'Alert',
    bgColor: COLORS.white,
    textColor: COLORS.black,
  },
];

const CALENDAR_DATA = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'W', 'T', 'F', 'S'],
  today: 'Today',
};

export { CARD_TYPE_DATA, CALENDAR_DATA, DEVICE_WIDTH, DEVICE_HEIGHT };
