import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, Avatar } from 'react-native-paper';



export default function AddSongScreen() {
	return (
		<>
			<View style={styles.container}>
				{/*<Avatar.Image size={100} source={require('../assets/songspace_logo.png')} />*/}
				<Button icon="arrow-right-thin-circle-outline" mode="outlined" buttonColor="#60626e" textColor="white" onPress={() => console.log('Pressed')}>
					Submit
				</Button>
			</View>
		</>
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