import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);



export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    alignItems: 'center',
    backgroundColor: 'red',
    
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: '#ffcc00',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  welcomeView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: screenHeight,
  },
  section: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 160
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 80
  }
  
});