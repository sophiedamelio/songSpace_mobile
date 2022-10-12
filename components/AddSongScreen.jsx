import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, TextInput, Avatar } from 'react-native-paper';



export default function AddSongScreen() {
	return (
		<>
			<View style={styles.container}>
				{/*<Avatar.Image size={100} source={require('../assets/songspace_logo.png')} />*/}
				<TextInput label="Title" mode='outlined' activeOutlineColor='#3a3b42' style={styles.input} />
				{/*value={state.title},  onChangeText={text => setText(text)*/}
				<TextInput label="Capo" mode='outlined' activeOutlineColor='#3a3b42' style={styles.inputTwo} />
				<TextInput label="Text" mode='outlined' activeOutlineColor='#3a3b42' style={styles.inputTwo} multiline={true} numberOfLines={15} />
				<TextInput label="Notes" mode='outlined' activeOutlineColor='#3a3b42' style={styles.inputTwo} />
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
	}
})