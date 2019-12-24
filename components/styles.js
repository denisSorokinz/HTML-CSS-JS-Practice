import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  daysContainer: {
    flex: 1
  },
  daysList: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  dayContainer: {
    flex: 0.2,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    backgroundColor: '#2b2b2b'
  },
  dayText: {
    color: '#fff',
    marginLeft: 5,
    marginVertical: 1
  }
});