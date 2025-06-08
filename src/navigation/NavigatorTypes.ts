import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Login: undefined;
    MainApp: undefined;
}

export type MainAppTabParamList = {
    Check: undefined;
    Checker: undefined;
    Settings: undefined;
};

export type RootStackProps = StackNavigationProp<RootStackParamList, 'Login'>;

export type MainAppTabProps = StackNavigationProp<MainAppTabParamList, 'Check'>;