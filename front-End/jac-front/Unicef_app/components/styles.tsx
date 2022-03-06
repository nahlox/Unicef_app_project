import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { Constants } from 'expo-constants';
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native';

//colors

export const Colors ={
    primary:'white' ,
    secondary:'black',
    brand : '#0099e5',
    darklight :'#9CA3AF',
    




};

const { primary, secondary, brand, darklight}= Colors;

export const StyledContainer = styled.view`
   flex : 1;
   padding: 25px;
   background-color : 'white';

`;

 

export const InnerContainer = styled.view `
    flex : 1
    width: 100%;
    align-items: 'center';

`;

export const PageLogo = styled.image`
    width:250px;
    height:200px;

`;
    

export const PageTitle = styled.text`
    font-size : 30px;
    text-align: center;
    font-weight: bold ;
    color: 'black';
    padding:10px;


`;

export const SubTitle = styled.text`
   font-size:18px;
   margin-bottom:20px;
   letter-spacing:1px;
   font-weight:bold;
   color:${secondary};


`;
export const StyledFormArea = styled.view`
    width = 90%

`;
export const StyledTextInput = styled.input`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: Spx;
    font-size: 16px;
    height: 6epx;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: 'black';


`;
 export const StyledInputLabel = styled.text`
 
    color: $(tertiary};
    font-size: 13px;
    text-align: left;
`
export const LeftIcon = styled.view `
 left: 15px;
 top: 38px;
 position: absolute;
 z-index: 1;
`;
export const RightIcon = styled.TouchableOpacity`
 right: 15px;
 top: 38px;
 position: absolute;
 z-index: 1;
`;
export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${primary};
    justify-content: center;
    align-content : center;
    border-radius: Spx;
    margin-vertical: 5px;
    height: 60px;
`

export const ButtonText = styled.text`
    color: $(primary};
    font-size: 16px

`;

export const MsgBox = styled.text `
   text-align : center;
   fontsize: 13px;

`;
export const Line = styled.view`
   height: 1px;
   width: 100%;
   background-color: ${darklight};
   margin-vertical:10px;

`;









