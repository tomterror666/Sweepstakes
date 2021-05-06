import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getCurrentTime } from '../utils/get-current-time';
import { getCurrentDate, getCurrentWeekday } from '../utils/get-current-date';

interface IProps {
  showSeconds?: boolean;
}

export function DigitalClock({showSeconds = false}: IProps) {
  const [currentTime, setCurrentTime] = useState(getCurrentTime(':', showSeconds));
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const [currentDayName, setCurrentDayName] = useState(getCurrentWeekday())

  useEffect(() => {
    const intervallId = setInterval(() => {
      setCurrentTime(getCurrentTime(':', showSeconds));
      setCurrentDate(getCurrentDate());
      setCurrentDayName(getCurrentWeekday());
    }, 1000);

    return function cleanup() {
      clearInterval(intervallId);
    };
  }, []);

  return (
    <View style={styles.textLine}>
      <Text style={styles.dayName}>{currentDayName},</Text>
      <Text style={styles.timeLine}>{currentDate} - {currentTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textLine: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  dayName: {
    paddingRight: 5,
    paddingTop: 4,
    color: '#666',
    textAlign: 'right',
    flex: 1,
  },
  timeLine: {
    paddingRight: 20,
    paddingTop: 4,
    color: '#666',
    textAlign: 'right',
  }
});