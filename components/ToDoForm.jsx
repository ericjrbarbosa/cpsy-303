import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';

// import tasksRaw from '../data/tasks.json';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3333/tasks', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        setTasks(data['tasks']);
      } catch (error) {
        // setTasks(tasksRaw['tasks']);
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  const handleAddTask = () => {
    try {
      addTask(taskText);
      setTaskText('');
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleRandomTask = () => {
    if (tasks.length < 1) return;

    const index = Math.floor(Math.random() * tasks.length);
    const randomTask = tasks[index];

    setTaskText(randomTask);
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={text => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <Button title="Random Task" onPress={handleRandomTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
