import { Image, StyleSheet, Platform,Text,View,FlatList,SafeAreaView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useId, useState } from 'react';
import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';



export default function HomeScreen() {
  const [todos, setTodos] = useState([]); 
  const [userId, setUserId] = useState(null);
  const router = useRouter();



  useEffect(() => {
    
      fetchData();
      

  },[userId]);
  
  async function fetchData(userId) {
    const response = await fetch("http://localhost:8080/usuario/1");
    const data = await response.json();
    setTodos(data);
  }

  return (
    <View style={styles.container}> 
      <SafeAreaView> 
        <FlatList 
          data={todos}
          keyExtractor={(todo) => todo.idusuario} 
          renderItem={({ item }) => <Text>{item.nombre}</Text>} 
          ListHeaderComponent={() => <Text style={styles.title}>Tareas</Text>}
          contentContainerStyle={styles.contentContainerStyle} 
          /> 
          </SafeAreaView> 
<StatusBar style="auto" /> 
</View> 
    /*<ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>*/

  );
}

const styles = StyleSheet.create({ 
  container: { 
  flex: 1, 
  backgroundColor: "#E9E9EF", 
  
  },
  contentContainerStyle: { 
  padding: 15, 
  
  },
  title: {
  fontWeight: "800", 
  fontsize: 28, 
  marginBottom: 15, 
  },
});
/*const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});*/
