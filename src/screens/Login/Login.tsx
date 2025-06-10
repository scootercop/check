import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RootStackParamList, RootStackProps } from '../../navigation/NavigatorTypes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface LoginState {
    username: string;
    password: string;
}

interface LoginProps extends NativeStackScreenProps<RootStackParamList, 'Login'> { }

class Login extends React.Component<LoginProps, LoginState> {

    state: LoginState = {
        username: '',
        password: '',
    };

    handleChange = (name: keyof LoginState, value: string) => {
        this.setState({ [name]: value } as Pick<LoginState, keyof LoginState>);
    };

    handleSubmit = () => {
        const { navigation } = this.props;
        console.log('Logging in with:', this.state);
        navigation.navigate('MainApp');
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <View style={{ borderWidth: 1, borderColor: "#aaaaaa", borderRadius: 30, padding: 2, marginBottom: 20, width: 250, maxWidth: '80%' }}>
                    <TextInput value={this.state.username} onChangeText={(text) => this.handleChange('username', text)} textContentType='username' placeholder='Username' textAlign='center' style={{ borderRadius: 25, fontWeight: 700 }} />
                </View>
                <View style={{ borderWidth: 1, borderColor: "#aaaaaa", borderRadius: 30, padding: 2, marginBottom: 20, width: 250, maxWidth: '80%' }}>
                    <TextInput value={this.state.password} onChangeText={(text) => this.handleChange('password', text)} textContentType='password' placeholder='Password' textAlign='center' style={{ borderRadius: 25, fontWeight: 700 }} />
                </View>
                <View>
                    <TouchableOpacity
                        style={{ borderWidth: 1, borderColor: "#777777", paddingHorizontal: 30, paddingVertical: 10, borderRadius: 20, maxWidth: '40%' }}
                        onPress={(e) => { this.handleSubmit() }}  >
                        <Text style={{ fontWeight: 700 }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default function (props: NativeStackScreenProps<RootStackParamList, 'Login'>) {
    return <Login {...props} />;
}