import {MoviesTabNav} from './Tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenWrapper} from '@components';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '@constants';
import { MovieDetails, SearchMovies, TicketBooking, TicketSelection, WatchTrailer } from '@screens';
import { View } from 'react-native';

const mainStack = createNativeStackNavigator();
const AppRoutes = () => {
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
        <mainStack.Navigator screenOptions={{headerShown: false}}>
          <mainStack.Screen component={MoviesTabNav} name={SCREENS.APPTAB} />
          <mainStack.Screen  component={MovieDetails}
        name={SCREENS.MOVIEDETAILS} />
  
  <mainStack.Screen  component={WatchTrailer}
        name={SCREENS.WATCHTRAILER}
        />
        <mainStack.Screen  component={TicketSelection}
        name={SCREENS.TICKETSELECTION}
        />
        <mainStack.Screen  component={TicketBooking}
        name={SCREENS.TICKETBOOKING}
        />
        </mainStack.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default AppRoutes;
