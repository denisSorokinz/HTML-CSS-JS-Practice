import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  daysContainer: {
    flex: 1
  },
  daysList: {
    flexGrow: 1
  },
  dayContainer: {
    flex: 0.2,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    backgroundColor: '#2b2b2b'
  },
  text: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 17.5
  },
  subjectContainer: {
    backgroundColor: '#2b2b2b',
    marginBottom: 25,
    justifyContent: 'space-between',
    minHeight: 55
  },
  subjectText: {
    fontSize: 35,
  },
  hometaskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 5
  }
});