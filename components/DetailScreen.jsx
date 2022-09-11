import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper'


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
			<View style={styles.title}>
				<Button icon="login-variant" textColor="#14aca3"></Button>
				<Button textColor="white" style={{ marginLeft: 0 }}>
					Login in to your account
				</Button>
			</View>
			<View style={styles.formContainter}>
				<TextInput label='username' style={styles.input}></TextInput>
				<TextInput label='password' style={styles.inputTwo}></TextInput>
				<Button style={styles.loginBtn} textColor='#3a3b42'>Login</Button>
			</View>
			<Button buttonColor='#41424a' textColor='white' style={styles.altLink}>
				New to us? <Text style={styles.blueAltLink}>Sign Up</Text>
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
	formContainter: {
		backgroundColor: '#1f2024',
		borderRadius: 20,
	},
	input: {
		backgroundColor: 'rgb(255, 255, 241)',
		marginLeft: 40,
		marginRight: 40,
		marginBottom: 0,
		marginTop: 40,
		borderRadius: 5,
	},
	inputTwo: {
		backgroundColor: 'rgb(255, 255, 241)',
		marginLeft: 40,
		marginRight: 40,
		marginBottom: 0,
		marginTop: 20,
		borderRadius: 5
	},
	loginBtn: {
		backgroundColor: '#92a8d4',
		margin: 35,
		borderRadius: 500,
		width: 100,
		alignSelf: 'center',
		padding: 10
	},
	altLink: {
		borderRadius: 500,
		marginTop: 15
	},
	blueAltLink: {
		color: '#92a8d4'
	},
	title: {
		flexDirection: 'row',
		alignSelf: 'center'
	},
	tinyLogo: {
		alignSelf: 'center',
		width: 320,
		height: 57,
		//padding: 40
	}
})