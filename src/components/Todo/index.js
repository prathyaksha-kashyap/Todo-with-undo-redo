//external imports
import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreators} from 'redux-undo';

//internal imports
import styles from './style';
import {addTodo, removeAuction} from '@reducers/ReduxActions';

const Todo = () => {
  const {toDoList} = useSelector(state => state);

  const [text, setText] = useState();
  const dispatch = useDispatch();
  const remove = item => {
    dispatch(removeAuction(item.id));
  };

  const add = () => {
    if (text != '') {
      let todoObj = {
        id: uuidv4(),
        val: text,
      };
      dispatch(addTodo(todoObj));
      setText('');
    } else {
      alert('add something first!');
    }
  };

  const undo = () => {
    dispatch(ActionCreators.undo());
  };
  const redo = () => {
    dispatch(ActionCreators.redo());
  };

  const renderToDo = ({item, index}) => {
    return (
      <View style={styles.renderItem}>
        <Text style={styles.renderText}>{`${index + 1}. ${item.val}`}</Text>
        <TouchableOpacity
          style={styles.remove}
          onPress={() => {
            remove(item);
          }}>
          <Text style={styles.removeButton}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headingText}>Todo List</Text>
      <View style={styles.flatListView}>
        <FlatList
          data={toDoList.present}
          renderItem={renderToDo}
          keyExtractor={(item, index) => `${index * 33}_${index}`}
        />
      </View>
      <View style={styles.addContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setText(text);
          }}
          value={text}
          placeholder=" Add Todo List"
        />
        <TouchableOpacity style={styles.addButton} onPress={add}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 40}}>
        <TouchableOpacity style={styles.undoButton} onPress={undo}>
          <Text style={styles.undoText}>undo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.redoButton} onPress={redo}>
          <Text style={styles.redoText}>Redo</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Todo;
