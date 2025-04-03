import { useState } from 'react';
import { StyleSheet, View, Button , FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals,setCourseGoals] = useState([]);
  const [modalIsVisible,setModalIsVisible] = useState(false);
  
  function addGoalHandler(enteredGoalText){
        setCourseGoals((currentCourseGoals) => 
          [...currentCourseGoals, 
            {text: enteredGoalText, id: Math.random().toString()},
          ]);
          endAddGoalHandler();
      }


  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }  
  
  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }
  

  
  
  return (
    <>
    <StatusBar style='light' />
    
    <View style={styles.appContainer}>
      
      <Button title='Add New Goal' 
      style={{ color: '#a065ec' }}
      onPress={startAddGoalHandler}
      />


      <GoalInput onAddGoal={addGoalHandler}
      visible={modalIsVisible}
      onCancel={endAddGoalHandler}
      />

      <View style={styles.goalsContainer}>
      <FlatList
      alwaysBounceVertical={false}
      data={courseGoals}
      renderItem={(itemData) => {
        return (
            <GoalItem text={itemData.item.text}
             id={itemData.item.id}
            onDeleteItem={deleteGoalHandler} />
        )
      }}
      />
     
      </View> 
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#'
  },
  goalsView:{
    flex: 6
  },goalsContainer:{
    flex: 5,
  }
});
