import react, { useState, useEffect } from "react";
import { View,Text,TextInput,TouchableOpacity,KeyboardAvoidingView, Platform, } from "react-native";
import firebase from "../../config/firebase"
import style from "./Styles"
import {MaterialcommunityIcons} from  "@expo/vector-icons"




export default function Login(){
    const [email,setEmail] = useState("");
    const [senha,setSenha ] = useState("");
    const [errorlogin,setErrorlogin] = useState("");


    const loginFirebase = ()=>{

    }
    useEffect (()=>{

    },[]);
    
    return(
<KeyboardAvoidingView
behavior={Platform.OS === "ios" ? "padding" : "height"}
style={style.container}
>
    <Text style={styles.title}>Task</Text>
    <TextInput
    Style={style.input}
    placeholder = "ENTER YOUR EMAIL"
    type="text"
    onChangeText={(Text)=> setEmail(Text) }
    value ={email}
    />
    <TextInput
    Style={style.input}
    secureTextEntry={true}
    placeholder = "ENTER A PASSWORD"
    type="text"
    onChangeText={(Text)=> setSenha(Text) }
    value ={senha}
    />
         {errorLogin === true
    ?
    
    <View style={styles.contentAlert}>
        <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
        />
        <Text style={styles.warningAlert}>E-mail ou senha invalidos</Text>
    </View>
    :
    <View />
}
{email === "" || senha === ""
    ?
    <TouchableOpacity disabled={true} style={styles.buttonLogin}>
        <Text style={styles.textButtonLogin}>Login</Text>
    </TouchableOpacity>
    :
    <TouchableOpacity style={styles.buttonLogin} onPress={loginFirebase}>
        <Text style={styles.textButtonLogin}>Login</Text>
    </TouchableOpacity>
}
<TouchableOpacity style={styles.buttonLogin} onPress={loginGoogle}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGaEbmPq1vaFxOWuVOfhCoLSGspGZvC53pMQ&usqp=CAU' }} style={{ width: 30, height: 30, borderRadius: 50, }} />
                <View>
                    <Text style={styles.textLogin}>Login com Google</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.registration}>
                Não está registrado?
                <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("NewUser")}>
                    Inscreva-se agora
                </Text>
            </Text>
            <Text style={styles.registration}>
                Esqueceu sua senha?
                <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("RedefinirSenha")}>
                    Redefinir
                </Text>
            </Text>
        </KeyboardAvoidingView>
    );
}
