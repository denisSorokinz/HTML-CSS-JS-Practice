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
    marginBottom: 25,
    borderBottomWidth: 1,
    backgroundColor: '#2b2b2b'
  },
  text: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 20
  },
  subjectContainer: {
    backgroundColor: '#2b2b2b',
    marginBottom: 25,
    justifyContent: 'space-between'
  },
  subjectText: {
    fontSize: 35,
  },
  hometaskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 5
  },
  textInputContainer: {
    flex: 1
  }
});