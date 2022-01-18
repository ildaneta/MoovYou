import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AlignTypes } from '../utils/enum';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RoutesName } from '../utils/routesName';

import MovieIconSVG from '../images/movie-icon.svg';
import MovieIconDisabledSVG from '../images/movie-icon-disabled.svg';
import HeartIconSVG from '../images/heart-icon.svg';
import HeartIconDisabledSVG from '../images/heart-icon-disabled.svg';
import SearchIconSVG from '../images/search-icon.svg';
import SearchIconDisabledSVG from '../images/search-icon-disabled.svg';

import Home from '../pages/Home';
import Text from '../components/Text';
import theme from '../theme';
import Watchlist from '../pages/Watchlist';
import Search from '../pages/Search';

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: { ...styles.tabBar },
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
                textAlign={AlignTypes.center}
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
                textAlign={AlignTypes.center}
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
                textAlign={AlignTypes.center}
              />
            </View>
          ),
        }}
      />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  containerTabBar: {
    alignItems: AlignTypes.center,
    justifyContent: AlignTypes.center,
    marginTop: theme.dimensions.Thin2,
    flexDirection: AlignTypes.column,
    width: theme.dimensions.Big60,
  },

  divider: {
    marginBottom: theme.dimensions.Quarck4,
  },

  tabBar: {
    backgroundColor: theme.colors.neutral_black,
    borderTopColor: theme.colors.neutral_white,
    borderTopWidth: theme.dimensions.Thin1,
    height: theme.dimensions.Big60,
  },
});

export default TabRoutes;
