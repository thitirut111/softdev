import { View, Text, StyleSheet, Dimensions, TextInput, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
// import leave.jpg from ./Image/leaves   

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Sign_up = () => {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [confirm_password, onChangeConfirmPassword] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  // console.log(Dimensions.get('window').width, Dimensions.get('window').height)
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={{color:'black', fontSize:70, fontWeight:"bold"}}>Sign up</Text>
          <View style={styles.logoContainer}>
            <Image style={{width:50, height:50, top:-110, left:-58}} source = {require('C:/Users/justb/SoftdevProject/image/leave-removebg-preview.png')} />
          </View>
        <Text style={{color:'black', fontSize:14, left:0, alignSelf:'left', width:300}}>Email</Text>
        <SafeAreaView>
          <TextInput
          style={{...styles.input, height: 40, width: 300, backgroundColor:'white'}}
          value={text}
          onChangeText={onChangeText}
          placeholder='sample@email.com'
         />
        </SafeAreaView>
        <Text style={{color:'black', fontSize:14, left:0, alignSelf:'left', width:300}}>Password</Text>
        <SafeAreaView>
          <TextInput
          style={{...styles.input, height: 40, width: 300,  backgroundColor:'white'}}
          value={password}
          onChangeText={onChangePassword}
          placeholder='example'
          secureTextEntry={true}
         />
        </SafeAreaView>
        <Text style={{color:'black', fontSize:14, left:0, alignSelf:'left', width:300}}>Confirm Password</Text>
        <SafeAreaView>
          <TextInput
          style={{...styles.input, height: 40, width: 300,  backgroundColor:'white'}}
          value={confirm_password}
          onChangeText={onChangeConfirmPassword}
          placeholder='example'
          secureTextEntry={true}
         />
        </SafeAreaView>
          <AppButton title={"   Sign up   "}/>
      </View>
      <Text style={{color:'black', alignSelf:'center',width: 300, height:20, top:125, left:50}}>Don't have an account?</Text>
        <Text style={{color:'white', alignContent:'center', width: 300, height:20, top:105, left:200, textDecorationLine: 'underline', textDecorationColor:'white'}}>Login</Text>
      {/* <View style={styles.logoContainer}>
        <Image style={{width:50, height:50, top:0}} source = {require('C:/Users/justb/SoftdevProject/image/leave-removebg-preview.png')} />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    height: 600,
    width: 600,
    borderRadius: 300,
    backgroundColor: "#FFE6DF",
    top:80,
    alignItems: 'center',
    paddingTop:100
    // justifyContent: "center",
    
  },
  container: {
    backgroundColor: "#FF9176",
    alignItems: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color:"black"
  },
  appButtonContainer: {
    elevation: 0,
    backgroundColor: "#E76F51",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  logoContainer: {
    paddingTop: 10,
  },
  tinyLogo: {
    width: 10,
    height: 10,
  },
  logo: {
    width: 10,
    height: 10,
  },
}
)


export default Sign_up

