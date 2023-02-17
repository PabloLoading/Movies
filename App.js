import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { Provider } from "react-redux";
import store from "./src/store";
import { AuthProvider } from "./src/context/Auth";
import useAuth from "./src/context/Auth";
import { SafeAreaView } from "react-native";

const Screen = () => {
  const { currentUser } = useAuth();
  return currentUser ? <HomeScreen /> : <LoginScreen />;
};

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <Screen />
        </SafeAreaView>
      </Provider>
    </AuthProvider>
  );
}
