import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper'


export default function DetailScreen() {
	return (
		<View style={styles.container}>
			{/*<Text>Login</Text>*/}
			<Image
				style={styles.tinyLogo}
				source={{
					uri: 'https://i.imgur.com/Yu3B0dN.png',
				}}
			/>
			{/*<Button icon="login-variant" mode="outlined" buttonColor="#60626e" textColor="white" onPress={() => console.log('Pressed')}>*/}
			<Button
				//icon={({ size, color }) => (
				//<Image
				//source={require('../assets/songspace_logo.png')}
				style={{ tintColor: '#14aca3' }}
				icon="login-variant" mode="outlined" buttonColor="#60626e" textColor="#14aca3"
			//</View>/>
			//)}
			>

				Login
			</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		//flex: 1,
		//justifyContent: "space-between",
		backgroundColor: "#3a3b42",
		padding: 20,
		height: 1000
		//margin: 10,
	},
	tinyLogo: {
		alignSelf: 'center',
		width: 320,
		height: 57,
		//padding: 40
	}
})