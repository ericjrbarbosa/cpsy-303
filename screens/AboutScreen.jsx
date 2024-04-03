import MainLayout from '../layouts/MainLayout';
import { Text, Button } from 'react-native';

function AboutScreen({ navigation }) {
  return (
    <MainLayout>
      <Text>MyTodoListApp</Text>
      <Text>Eric Barbosa Jr.</Text>
      <Text>{new Date().toLocaleDateString()}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </MainLayout>
  );
}

export default AboutScreen;
