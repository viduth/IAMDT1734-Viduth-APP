import * as React from 'react';
import { StatusBar,View,TextInput, Text, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  state= {
    inputValue:'',
    todos:[]
    
  };

  clearAll(){
    this.setState({
      todos:[]
  })
  }

  changeText= value=> {
    this.setState({
      inputValue: value
    });
  };

  addItem = () => {
if (this.state.inputValue !== ''){
  this.setState(prevState => {
    const newToDo = {
      title: this.state.inputValue,
      createdAt: Date.now(),
    };

    var todos = this.state.todos.concat(newToDo);

    this.setState({
      todos: todos,
    });
  });

 }

  };


  render() {
    const todos = this.state.todos.reverse().map((todo, key) =>
    <View style={{ flexDirection:'row', marginTop: 20 }}>
    <Image
          style= {styles.img}
          source={{uri: 'https://cdn.pixabay.com/photo/2016/05/27/16/57/gold-1420198_1280.png'}}
        />
    <TouchableOpacity style={{
      width: 20,
      height: 20,
      borderRadius: 15,
      borderWidth: 3,
      borderColor:'white',
      margin: 15
    }}>
  
  </TouchableOpacity>
  <Text style={styles.New}> {todo.title}</Text>
  </View>
    );

  return (
      <LinearGradient colors={['#9B59B6', '#1ABC9C']} style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />

     <View>
        <TextInput
  style={styles.input}
  onSubmitEditing={this.addItem}
  onChangeText={this.changeText}
  placeholder="Enter text here.. "
  value={this.state.inputValue}
  placeholderTextColor={'#fff'}
  multiline={true}      
  autoCapitalize="sentences"
  underlineColorAndroid="transparent"
  selectionColor={'white'}
  maxLength={30}
  returnKeyType="done"
  autoCorrect={false}
  blurOnSubmit={true}
  />
  </View>
  <View>
  {todos}
  </View>
  <Button
  title="delete all"
  onPress={(e) => this.clearAll()}
  />
</LinearGradient>

    );
  }
}

const styles ={
input:{
  marginTop: 30,
  paddingTop: 10,
  paddingRight: 15,
  paddingLeft: 15,
  fontSize: 34,
  color: 'white',
  fontWeight:'500'
    },
    
img:{
  width: 50, 
  height: 50
},

  New:{
    paddingLeft: 5, 
    marginTop: 10, 
    fontSize:28, 
    color:'gold',
    fontWeight:'bold',
    
  
},
}