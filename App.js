
import * as React from 'react';
import { Button,View, Text,Image,StyleSheet,TextInput,useState, ShadowPropTypesIOS} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { blockStatement } from '@babel/types';

/*
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
*/
/*
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
*/

const values ={
    answer1:'',
    answers:''

}

function checkanswer(alma){

  if (values.answer1==alma) {
      return 'q9'
  }
  else 
      return 'elbasztad'


}



function checkanswer1(alma){

  if (values.answer2==alma) {
      return 'winscreen'
  }
  else 
      return 'elbasztad'


}
const screens=['q0','q1','q2','q3','q4']
function Question1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'darkgrey' }}>
      <Text style={styles.text}>Question: What is the name of the final course of all 'Mario Kart' video games?</Text>
      <View   style={styles.button}>
      <Button color='#10ebca'
        title="Rainbow Road"
        onPress={() => navigation.replace('q1')}
      /> 
      </View>
     <View  style={styles.button}>
     <Button color='#10ebca' 
        title="Moo Moo Farm"
        onPress={() => navigation.replace('elbasztad')}
      /> 
     </View>
      <View style={styles.button}>
      <Button color='#10ebca'  
        title="Shy Guy Beach"
        onPress={() => navigation.replace('elbasztad')}
      /> 
      </View>
     
    </View>
  );
}

function Question2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'darkgrey' }}>
      <Text  style={styles.text}>What was the first full length film that was completely designed with a  computer?</Text>
      <View  style={styles.button}>
      <Button color='#10ebca' 
        title="Toy Story."
        onPress={() => navigation.replace('q2')}
      /> 
      </View>
     <View style={styles.button}>
     <Button color='#10ebca'  
        title="The Incredibles"
        onPress={() => navigation.replace('elbasztad')}
      /> 
     </View>
     <View style={styles.button}>
     <Button color='#10ebca'  
        title="The Hunchback of Notre Dame "
        onPress={() => navigation.replace('elbasztad')}
      /> 
     </View>
     
    </View>
  );
}



function Question3({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'darkgrey' }}>
      <Text style={styles.text}> Solid Snake is the hero of the famous video game franchise</Text>
      <View   style={styles.button}>
      <Button color='#10ebca'
        title="Death Stranding"
        onPress={() => navigation.replace('elbasztad')}
      /> 
      </View>
      <View   style={styles.button}>
      <Button color='#10ebca'  
        title="Metal gear solid"
        onPress={() => navigation.replace('q4')}
      /> 
      </View>
     <View style={styles.button}>
     <Button color='#10ebca'
        title="Resident evil"
        onPress={() => navigation.replace('elbasztad')}
      /> 
     </View>
      
    </View>
  );
}


function Question4({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'darkgrey' }}>
      <Text style={styles.text}>Nintendo began as a company that sold which products</Text>
      <View style={styles.button}>
      <Button color='#10ebca'  
        title="Playing Cards"
        onPress={() => navigation.replace('q5')}
      /> 
      </View>
     <View  style={styles.button}>
     <Button  color='#10ebca' 
        title="Game cartridges"
        onPress={() => navigation.replace('elbasztad')}
      /> 
     </View>
      <View style={styles.button} >
      <Button color='#10ebca'
        title="Board Games"
        onPress={() => navigation.replace('elbasztad')}
      /> 
      </View>
      
    </View>
  );
}

function Question5({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'darkgrey' }}>
      <Text style={styles.text}>what game is this ?</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./source/jaggedalliance.png')}/>

      </View>
      <View  style={styles.button}>
      <Button color='#10ebca' 
        title="Heroes Of Dire "
        onPress={() => navigation.replace('elbasztad')}
      /> 
      </View>
      <View  style={styles.button}>
      <Button color='#10ebca'
        title="jagged alliance 2"
        onPress={() => navigation.replace('q5')}
      /> 
       </View>
     <View   style={styles.button}>
     <Button color='#10ebca'
        title="X-Com: UFO Defense"
        onPress={() => navigation.replace('elbasztad')}
      /> 
     </View>
     
    </View>
  );
}

function Question6({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'darkgrey' }}>
      <Text style={styles.text}>What is Pearl's signature colour in 'Splatoon 2'?</Text>

      <View style={styles.button}>
      <Button color='#10ebca'  
        title="Yellow."
        onPress={() => navigation.replace('elbasztad')}
      /> 
      </View>
     <View  style={styles.button}>
      <Button  color='#10ebca'
        title="Red"
        onPress={() => navigation.replace('elabsztad')}
      /> 
        </View>
      <View style={styles.button}>
      <Button color='#10ebca'  
        title="Pink"
        onPress={() => navigation.replace('q6')}
      /> 
      </View>
      
    </View>
  );
}
function Question7({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'darkgrey' }}>
      <Text  style={styles.text}>Which was the first Nintendo console for optical discs</Text>
      <View  style={styles.button}>
      <Button color='#10ebca' 
        title="Wii"
        onPress={() => navigation.replace('elbasztad')}
      /> 
      </View>
      <View  style={styles.button}>
      <Button color='#10ebca'  
        title="The GameCube."
        onPress={() => navigation.replace('q7')}
      /> 
      </View>
      <View  style={styles.button}>
      <Button color='#10ebca'  
        title="Nintendo Entertainment System"
        onPress={() => navigation.replace('elbasztad')}
      /> 
      </View>
      
    </View>
  );
}
function Question8({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'darkgrey' }}>
      <Text  style={styles.text}>Whichvideo game company is published the second installment of 'Far Cry' series?</Text>

      <View  style={styles.button}>
      <Button color='#10ebca'  
        title="Crytek."
        onPress={() => navigation.replace('elbasztad')}
      /> 
      </View>
      <View  style={styles.button}>
      <Button color='#10ebca'  
        title="Obsidian"
        onPress={() => navigation.replace('elbasztad')}
      /> 
      </View>
      <View  style={styles.button}> 
      <Button color='#10ebca' 
        title="Ubisoft"
        onPress={() => navigation.replace('q8')}
      /> 
      </View>
    </View>
  );
}

function Question9({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'darkgrey' }}>
      <Text  style={styles.text}>what is the name of this videogame character </Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./source/tombraider.png')}/>
        </View>

      <TextInput style={styles.input}
        placeholder="write the answer here "
        onChangeText={(val) => values.answer1 = val}
      />
      <View style={styles.button}>
      <Button color='#10ebca'  
        title="submit ."
        onPress={() => navigation.replace( checkanswer('Lara Croft'))}
      /> 
      </View>
      
    </View>
  );
}


function Question10({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'darkgrey' }}>
      <Text style={styles.text}>What year was the Super Nintendo Entertainment System (SNES) released?</Text>

      <TextInput  style={styles.input}
        placeholder="write the answer here "
        onChangeText={(val2) => values.answer2 =val2 }
      />

      <View style={styles.button}>
      <Button color='#10ebca'   
        title="submit"
        onPress={() => navigation.replace( checkanswer1('1991'))}
      /> 
      </View>
    </View>
  );
}





function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'darkgrey'}}>
  
      <Text style={styles.text}>Epic gamer quiz</Text>
      <View style={styles.button}>
      <Button color='#10ebca'  
        title="Start the game "
        onPress={() => navigation.replace("q0")}
      />
     </View>
    </View>
    
  );
}


function winscreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>GGWP you gave a right answer to all questions </Text>
      <View  style={styles.button}>
      <Button  color='#10ebca'
        title="GGWP pró gémer kvíz meister "
        onPress={() => navigation.replace('Home')}
      />
      </View>
    </View>
  );
}


function losescreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Maybe next time </Text>
      <View>
        <Image source={require('./giphy.gif')}  />
      </View>
     <View  style={styles.button}>
      <Button color='#10ebca'
        title="Try again"
        onPress={() => navigation.replace('Home')}
      />
    </View>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="q0" component={Question1} />
        <Stack.Screen name="q1" component={Question2} />
        <Stack.Screen name="q2" component={Question3} />
        <Stack.Screen name="q3" component={Question4} />
        <Stack.Screen name="q4" component={Question5} />
        <Stack.Screen name="q5" component={Question6} />
        <Stack.Screen name="q6" component={Question7} />
        <Stack.Screen name="q7" component={Question8} />
        <Stack.Screen name="q8" component={Question9} />
        <Stack.Screen name="q9" component={Question10} />
        <Stack.Screen name="winscreen" component={winscreen} />
        <Stack.Screen name="elbasztad" component={losescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles=StyleSheet.create({

    text:{
      fontSize: 20,
      color:'#423e3e',
      paddingBottom: 70,
      fontWeight: 'bold',
      
    },
    button:{
    marginTop:20,
    paddingTop:20,
    paddingBottom:20,
    width: 200
    
    },
    input:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
     borderColor: 'green'
    }

})


export default App;