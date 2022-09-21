import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper'


export default function DetailScreen() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.tinyLogo}
				source={{
					uri: 'https://i.imgur.com/Yu3B0dN.png',
				}}
			/>
			<View style={styles.title}>
				<Button icon="login-variant" textColor="#14aca3"></Button>
				<Button textColor="white" >
					<Text style={styles.titleText}>Login in to your account</Text>
				</Button>
			</View>
			<View style={styles.formContainter}>
				<TextInput label='username' mode='outlined' activeOutlineColor='#3a3b42' style={styles.input}></TextInput>
				<TextInput label='password' mode='outlined' activeOutlineColor='#3a3b42' style={styles.inputTwo}></TextInput>
				<Button style={styles.loginBtn} textColor='#3a3b42'>Login</Button>
			</View>
			<Button buttonColor='#41424a' textColor='white' style={styles.altLink}>
				New to us? <Text style={styles.blueAltLink}>Signup</Text>
			</Button>
		</View >
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#3a3b42",
		padding: 20,
		height: 1000
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
		paddingTop: 10,
		borderRadius: 5,
	},
	inputTwo: {
		backgroundColor: 'rgb(255, 255, 241)',
		marginLeft: 40,
		marginRight: 40,
		marginBottom: 0,
		marginTop: 20,
		paddingTop: 10,
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
		alignSelf: 'center',
		padding: 30,
	},
	titleText: {
		fontSize: 20
	},
	tinyLogo: {
		alignSelf: 'center',
		width: 320,
		height: 57
	}
})