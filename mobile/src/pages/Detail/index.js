import React from'react';
import {View,TouchableOpacity,Image,Text,Linking} from 'react-native';
import styles from './styles';
import{Feather} from '@expo/vector-icons';
import logoImg from '../../assets/logo.png'
import {useNavigation,useRoute} from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer'; 
export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();
    const incident =route.params.incident;
    const message =`Olá ${incident.name} , estou  entrando em contato pois gostaria de ajudar no caso ${incident} co o valor de R$ ${incident.value}`;
    function navigateBack(){
        navigation.goBack();
    }
    function sendMail(){
        MailComposer.composeAsync({
            subject:'Heroi do caso: cadelinha atropelada',
            recipients:[incident.email],
            body:message, 
        })
    }
    function sendWhatsapp(){
      Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }
    return(
        <View style={styles.container}>          
            <View  style={styles.header}>
                <Image source={logoImg}/>
               <TouchableOpacity onPress={navigateBack}>
                   <Feather name="arrow-left" size={28} color='#E02041'/>
               </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG:</Text>
                    <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>
                    
                    <Text style={[styles.incidentProperty,{marginTop:0}]}>CASO:</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>
                    
                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>R${incident.value}</Text>
        </View>
        <View style={styles.contactBox}>
                      <Text style={styles.heroTitle}>Salve o dia</Text>
                      <Text style={styles.heroTitle}>Seja o heroi desse caso</Text>

                      <Text style={styles.herdescription}>Entre em contato</Text>
                      <View style={styles.actions}>
                          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                              <Text style={styles.actionText}>Whatsapp</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.action} onPress={sendMail}>
                              <Text style={styles.actionText}>Email</Text>
                          </TouchableOpacity>

                      </View>
                    </View> 
        </View>
    );
}