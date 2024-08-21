import {SCREENS} from '@constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {More, MediaLib, Watch, Dashboard} from '@screens';
import {useStyles} from './styles';
import {DashboardIcon, MediaIcon, MoreIcon, WatchIcon} from '@assets';
import { WatchStack } from '../Stacks';

const Tab = createBottomTabNavigator();

export const MoviesTabNav = () => {
  const {styles, colors} = useStyles();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyles,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: colors.primaryBackground,
      }}>
      <Tab.Screen
        name={SCREENS.DASHBOARDTAB}
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <DashboardIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.WATCHTAB}
        component={WatchStack}
        options={{
          tabBarLabel: 'Watch',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <WatchIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.MEDIALIBRARYTAB}
        component={MediaLib}
        options={{
          tabBarLabel: 'Media Library',
          tabBarIcon: ({color, size}) => (
            <MediaIcon width={size} height={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.MORETAB}
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color, size}) => (
            <MoreIcon width={size} height={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
