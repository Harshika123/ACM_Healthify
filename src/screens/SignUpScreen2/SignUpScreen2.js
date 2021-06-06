import React ,{useState}  from 'react';
import Icon  from 'react-native-vector-icons/FontAwesome5';
import {Dimensions,Text, View, Image, StyleSheet,ImageBackground ,TextInput,Button} from 'react-native';
import styles from './styles';

export default function  SignUp2  () {
    const [email,setEmail]=useState('xyz@gmail.com');
    const [phoneno, setPhoneNumber] = useState(null)

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
                                placeholder='Enter Your Email ID'
                                placeholderTextColor='#676BC3'
                                onChangeText={(val)=>setEmail(val)}
                      />

                    <TextInput style={styles.inputname}
                                placeholder='Enter Your Phone Number'
                                placeholderTextColor='#676BC3'
                                onChangeText={(val)=>setPhoneNumber(val)}
                      />
                      
                
                      <View style={styles.smallrects}>
                            <View style={styles.smallrect1}></View>
                            <View style={styles.smallrect2} ></View>
                            <View style={styles.smallrect3}></View>
                      </View>
                </View>
                <View style={styles.verify}><Text style={styles.buttonText}>Verify</Text></View>

            <View style={styles.prev_next}>
                <View
                    style={styles.button}>
              
              <Icon
                name='arrow-left'
                size={25}
                color='#ffffff'
                style={{height:25,width:25}}/>
                <Text style={styles.buttonText}>   Prev </Text>

          </View>
        <View
            style={styles.button}>
              <Text style={styles.buttonText}>Next   </Text>
              <Icon
                name='arrow-right'
                size={25}
                color='#ffffff'
                style={{height:25,width:25}}/>

          </View>
          </View>
        </View>
       
  </View>
  
);
};


