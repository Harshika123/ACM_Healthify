import React ,{useState}  from 'react';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import {Dimensions,Text, View, Image, StyleSheet,ImageBackground ,TextInput,Button} from 'react-native';
import styles from './styles';

export default function  SignUp3 () {
    const [password,setPassword]=useState('xyz123');
    const [retype_password, setRePassword] = useState(null)

    return (
    <View style={styles.container}>
        <View style={styles.CircleShapeView}>
               <Text style={styles.title}>Healthify</Text>
               <View style={styles.middleCircle}>
                      <View style={styles.icon}>
                      <Icon  name="arrow-left" size={20}  color="white" type="entypo" />
                      </View>
                </View> 
               <View style={styles.titles}>
                    <View style={styles.style1}><Text style={styles.title1}>New Account</Text></View>
                    <View style={styles.style2}><Text style={styles.title2}>Few Steps Away From A Healthy Life</Text></View>
               </View>
               <View style={styles.box}>
                    
                    <TextInput style={styles.inputname}
                                placeholder='Enter Password'
                                placeholderTextColor='#676BC3'
                                onChangeText={(val)=>setPassword(val)}
                      />

                    <TextInput style={styles.inputname}
                                placeholder='Retype Password'
                                placeholderTextColor='#676BC3'
                                onChangeText={(val)=>setRePassword(val)}
                      />
                      
                
                      <View style={styles.smallrects}>
                            <View style={styles.smallrect1}></View>
                            <View style={styles.smallrect1} ></View>
                            <View style={styles.smallrect3}></View>
                      </View>
                </View>
                <View style={styles.tickcircle}>
                        <Icon
                            name='check'
                            size={27}
                            color='#19B200'
                            style={{height:25,width:25}}/>
                </View>

            
          <View 
              style={styles.button}>
                <Text style={styles.buttonText}>Sign Up </Text>
                
  
            </View>
          </View>
       
       
  </View>
  
);
};

