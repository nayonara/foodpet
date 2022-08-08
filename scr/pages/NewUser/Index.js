import react from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaskedTextInput } from "react-native-mask-text";
import firebase from "../../config/firebase";


export default function NewUser({ navigation }) {
    const database = firebase.firestore()
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    function register () {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(database => {
                const uid = database.user.uid;
                const users = firebase.firestore().collection('users');
                users.doc(uid).set({
                    name: nome, telefone: telefone, porta: porta, email: email
                });
                navigation.navigate("Task", { idUser: users.uid })
            })
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.title}>Criar uma nova conta</Text>
            <TextInput style={styles.input} placeholder="Insira seu nome" type="text" onChangeText={(text) => setNome(text)} value={nome} />
            <TextInput style={styles.input} placeholder="Insira seu email" type="text" onChangeText={(text) => setEmail(text)} value={email} />
            <MaskedTextInput style={styles.input} keyboardType="phone-pad" mask="(99) 99999-9999" placeholder="Insira seu número de telefone" type="text" onChangeText={(text) => setTelefone(text)} value={telefone} />
            <TextInput style={styles.input} secureTextEntry={true} placeholder="Insira uma senha" type="text" onChangeText={(text) => setSenha(text)} value={senha} />

            {errorRegister === true
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
                <TouchableOpacity disabled={true} style={styles.buttonRegister}>
                    <Text style={styles.textButtonRegister}>Registrar</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.buttonRegister} onPress={register}>
                    <Text style={styles.textButtonRegister}>Registrar</Text>
                </TouchableOpacity>
            }
            <Text style={styles.login}>
                Já está registrado?
                <Text style={styles.linkLogin} onPress={() => navigation.navigate("Login")}>
                    Login
                </Text>
            </Text>
        </KeyboardAvoidingView>
    )
}



