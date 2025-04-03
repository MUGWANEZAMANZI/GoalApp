import {Text, StyleSheet, View, Pressable} from 'react-native';

function GoalItem(props){

    return(
        
            <View style={styles.goalItem}>
                <Pressable 
                android_ripple={{ color: 'white' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
                >
                    <Text style={styles.goalText}>{props.text}</Text>
                 </Pressable>
            </View>
           
       
    )
}

export default GoalItem;



const styles = StyleSheet.create({
  goalText:{
    color: 'white',
    padding: 8,
  },
  goalItem:{
    margin: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 8,
  },
  pressedItem:{
    opacity: 0.5,
  }
})