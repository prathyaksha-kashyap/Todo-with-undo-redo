import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDAF94",
  },
  input: {
    backgroundColor: 'white',
    color:'black',
    width: 200,
  },
  renderItem: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#E2E0E5',
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal:10,
    borderBottomColor:'white',
    borderBottomWidth:3,
    height:40
  },
  remove: {
    },
  renderText: {
      paddingLeft: 5,
      fontSize : 16,
      fontStyle:'italic',
      fontWeight:'bold'
    },
  removeButton: {
      paddingRight: 5, 
      color: 'red', 
      fontWeight: 'bold',
      marginRight:10
    },
  headingText: {
      alignSelf: 'center', 
      marginTop: 10,
      fontSize:32,
      fontWeight:'bold'
    },
  addButton: {
    width: 100,
    backgroundColor: '#266150',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  undoButton: {
    borderRadius:20,  
    width: 100,
    padding:5,
    backgroundColor: '#266150',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  redoButton: {
    borderRadius:20,   
    width: 100,
    backgroundColor: '#266150',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  addText: {
      color: "white",
      fontWeight:"bold",
      fontSize:18
  },
  addContainer :{
  flexDirection: 'row',
  alignSelf:'center',
  marginTop:30,
  marginBottom:10
},
undoText: {
    color:'white',
    fontSize:16,
    fontWeight:'bold'
},
redoText: {
    color:'white',
    fontSize:16,
    fontWeight:'bold'
},
flatListView :{
    marginTop:10
}
});
