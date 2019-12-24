import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from '../screens/MainScreen';
import Changing from '../screens/ChangeDayScreen';

const AppNavigator = createStackNavigator({
      Main: {
        screen: MainScreen
      },
      DayChanging: {
        screen: Changing
      }
    },
    {
      initialRouteName: "Main",
      headerMode: 'screen'
    }
  );

const Root = createAppContainer(AppNavigator);

export default Root;