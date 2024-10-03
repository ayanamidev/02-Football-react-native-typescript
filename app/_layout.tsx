
import { Stack } from 'expo-router';

const RootLayout=()=>(
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
);
export default RootLayout;

  

