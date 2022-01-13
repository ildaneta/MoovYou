import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RoutesName } from '../utils/routesName';
import Home from '../pages/Home';

import MovieIconSVG from '../images/movie-icon.svg';
import MovieIconDisabledSVG from '../images/movie-icon-disabled.svg';
import HeartIconSVG from '../images/heart-icon.svg';
import HeartIconDisabledSVG from '../images/heart-icon-disabled.svg';
import SearchIconSVG from '../images/search-icon.svg';
import SearchIconDisabledSVG from '../images/search-icon-disabled.svg';

import Text from '../components/Text';
import theme from '../theme';
import Watchlist from '../pages/Watchlist';
import Search from '../pages/Search';

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#242424',
          borderTopColor: '#fff',
          borderTopWidth: 1,
          height: 60,
        },
      }}>
      <Screen
        name={RoutesName.HOME}
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.containerTabBar}>
              {focused ? <MovieIconSVG /> : <MovieIconDisabledSVG />}

              <View style={styles.divider} />

              <Text
                label="Home"
                fontFamily={focused ? theme.fonts.Medium : theme.fonts.Light}
                fontSize={theme.fontsSize.XS12}
                color={
                  focused
                    ? theme.colors.neutral_middle_white
                    : theme.colors.neutral_gray
                }
              />
            </View>
          ),
        }}
      />
      <Screen
        name={RoutesName.WATCHLIST}
        component={Watchlist}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.containerTabBar}>
              {focused ? <HeartIconSVG /> : <HeartIconDisabledSVG />}

              <View style={styles.divider} />

              <Text
                label="Watchlist"
                fontFamily={focused ? theme.fonts.Medium : theme.fonts.Light}
                fontSize={theme.fontsSize.XS12}
                color={
                  focused
                    ? theme.colors.neutral_middle_white
                    : theme.colors.neutral_gray
                }
              />
            </View>
          ),
        }}
      />
      <Screen
        name={RoutesName.SEARCH}
        component={Search}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.containerTabBar}>
              {focused ? <SearchIconSVG /> : <SearchIconDisabledSVG />}

              <View style={styles.divider} />

              <Text
                label="Search"
                fontFamily={focused ? theme.fonts.Medium : theme.fonts.Light}
                fontSize={theme.fontsSize.XS12}
                color={
                  focused
                    ? theme.colors.neutral_middle_white
                    : theme.colors.neutral_gray
                }
              />
            </View>
          ),
        }}
      />
    </Navigator>
  );
};

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerTabBar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    flexDirection: 'column',
  },

  divider: {
    marginBottom: 4,
  },
});

export default TabRoutes;