import { StatusBar } from 'expo-status-bar';
import React  from 'react-native';
import { useState } from 'react';
import {Text,Image,View} from 'react-native';
import{ StyledContainer, 
    InnerContainer,
    PageLogo,
    PageTitle,
    Colors,
    StyledFormArea,
    SubTitle,
    LeftIcon,
    StyledButton,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    ButtonText,
    Line,
    MsgBox
} from './../components/styles';

//formik
import {Formik} from 'formik';

//icons
import {Octicons,Ionicons} from '@expo/vector-icons';


//colors
const {brand,darklight,primary,secondary} = Colors;


const Login = () => {
    const [hidePassword,setHidePassword] = useState(true);


    return(
           <StyledContainer>
               <StatusBar style = "dark" />
               <InnerContainer>
                    <PageLogo  source = {require('./../assets/UNICEF_Logo.png')}/>
                    <PageTitle>UNICEF</PageTitle>
                    <SubTitle>Account Login</SubTitle>

                    <Formik initialValues={{email: '', password: "",}}
                    onSubmit={(values)=>{
                        console.log(values);
                    }}
                        
                    >
                       {({handleChange, handleBlur,handleSubmit,values})=>
                        (<StyledFormArea>
                            <MyTextInput 
                            label='Adresse email'
                            icon = 'mail'
                            placeholder= 'rawad.nahle@Unicef.com'
                            placeholderTextColor ={darklight}
                            onChangeText={handleChange('adresse mail')}
                            onBlur={handleBlur('adresse mail')}
                            value={values.email}
                            keyboardType="email-adress"
                             />

                            <MyTextInput 
                            label='Mot de passe'
                            icon = 'lock'
                            placeholder= '* * * * * * * * * *'
                            placeholderTextColor ={darklight}
                            onChangeText={handleChange('Mot de pass')}
                            onBlur={handleBlur('Mot de pass')}
                            value={values.password}
                            secureTextEntry= {hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                             />
                            <MsgBox>...</MsgBox>
                            <StyledButton onPress ={handleSubmit}>
                                <ButtonText>
                                    Login
                                </ButtonText>
                            </StyledButton>
                            <Line/>
                        </StyledFormArea>)}
                    

                    
                    </Formik>
               </InnerContainer>


           </StyledContainer>


    );



};
const MyTextInput = ({label,icon, isPassword, hidePassword, setHidePassword,...props}) =>{
     return(
         <View>
             <LeftIcon>
               <Octicons name={icon} size = {30} color = {brand}>
             </LeftIcon>
             <StyledInputLabel>{label}</StyledInputLabel>
             <StyledTextInput{...props}/>
             {isPassword && (
                 <RightIcon onPress={() => setHidePassword(!hidePassword)}> 
                     <Iconicons name ={hidePassword ? 'md-eye-off': 'md-eye'}size ={30} color = {darklight} />
                 </RightIcon>
             )}





     </View>
    );
     
};


export default Login;

   