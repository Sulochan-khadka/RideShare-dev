import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.js';
import VehicleTypeRow from '../VehicleTypeRow/index.js';

import typesData from '../../assets/data/types.js';

const VehicleTypes = ({typeState, onSubmit}) => {
  const [selectedType, setSelectedType] = typeState;

  return (
    <View>
      {typesData.map((type) => (
        <VehicleTypeRow
          type={type}
          key={type.id}
          isSelected={type.type === selectedType}
          onPress={() => setSelectedType(type.type)}
        />
      ))}

      <Pressable
        onPress={onSubmit}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Ride</Text>
      </Pressable>
    </View>
  );
};

export default VehicleTypes;
