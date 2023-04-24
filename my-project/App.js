import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {Header} from './components/Header';
import {Lista} from './components/Lista';

const data = [
  { key: 1, name: 'James King', cell: '(81) 12345-6789', url: 'https://cdn.goodgallery.com/aff0103d-b383-4d77-a4d3-549a4ba909b4/t/2560/2b7bx842/business-headshot-photographer-professional-headshots-8.jpg' },
  { key: 2, name: 'Julie Taylor', cell: '(81) 00000-0000', url: 'https://therightlightphotography.com/wp-content/uploads/2018/03/TRL_6818.jpg' },
  { key: 3, name: 'Eugene Lee', cell: '(81) 11111-1111', url: 'https://i.pinimg.com/originals/40/b9/e8/40b9e8c19331a2e358aaa60410fa2c30.jpg' },
  { key: 4, name: 'John Williams', cell: '(81) 22222-2222', url: 'https://i.pinimg.com/originals/e2/40/74/e240745f1087b13729a267c91ca62760.png' }
]

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Agenda Telefônica" />
      <Lista data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
});
