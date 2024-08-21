

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '@constants';
import {  SearchMovies, SearchResults, Watch } from '@screens';

const watchStack = createNativeStackNavigator();
const WatchStack = () => {
  return (
  
   
        <watchStack.Navigator screenOptions={{headerShown: false}}>
          <watchStack.Screen  component={Watch}
        name={SCREENS.WATCH} />
         <watchStack.Screen  component={SearchMovies}
        name={SCREENS.SEARCHMOVIES} />
          <watchStack.Screen  component={SearchResults}
        name={SCREENS.SEARCHRESULTS} />
        </watchStack.Navigator>
    
  );
};
export {WatchStack}
