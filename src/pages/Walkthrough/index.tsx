import React, { useRef, useState } from 'react';
import { View, FlatList, Animated } from 'react-native';
import { slides } from '../../utils/slides';

import Paginator from '../../components/Paginator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { styles } from './styles';
import { RoutesName } from '../../utils/routesName';
import OnboardingItem from '../../components/OnboardingItem';
import { IStackRoutes } from '../../routes/stack.routes';

type WalkthroughScreenNavigationProp = NativeStackNavigationProp<
  IStackRoutes,
  'Walkthrough'
>;

type Props = {
  navigation: WalkthroughScreenNavigationProp;
};

const Walkthrough = ({ navigation }: Props): JSX.Element => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef: any = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const handleStart = async () => {
    await AsyncStorage.setItem('@moovyou:isFirstTime', 'yes');

    navigation.navigate(RoutesName.HOME);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerItems}>
        <FlatList
          bounces={false}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          data={slides}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <OnboardingItem image={item.image} description={item.description} />
          )}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: false },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          ref={slidesRef}
        />
      </View>

      <Paginator
        data={slides}
        scrollX={scrollX}
        onPress={currentIndex !== 2 ? scrollTo : handleStart}
        label={currentIndex !== 2 ? 'Next' : 'Get Started >'}
      />
    </View>
  );
};

export default Walkthrough;
