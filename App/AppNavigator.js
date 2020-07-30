import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HelloWorld from '../App/Screens/HelloWorld';

import Hello2 from '../App/Screens/Hello2';

const RootStack = createSwitchNavigator({
  HelloWorld: {screen: HelloWorld},
  Hello2: {screen: Hello2},
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
