import { StatusBar } from 'expo-status-bar';
import BlogListPage from './src/pages/BlogListPage';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import BlogDetailPage from './src/pages/BlogDetailPage';



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     
        <Stack.Screen  options={{
            headerShown: false, 
            cardStyle: { backgroundColor: '#ffffff' },
          }}  name='BlogListPage' component={BlogListPage} />
        <Stack.Screen  options={{
            headerShown: false, 
            cardStyle: { backgroundColor: '#ffffff' }, 
          }} name='BlogDetailPage' component={BlogDetailPage} />   
           
    </Stack.Navigator>
    </NavigationContainer>
  );
}


