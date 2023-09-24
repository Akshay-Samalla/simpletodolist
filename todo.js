const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');
const removeCompletedButton = document.querySelector('#removecompleted');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskInput = document.querySelector('#task');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.addEventListener('change', () => {
      if (taskCheckbox.checked) {
        taskItem.classList.add('completed');
      } else {
        taskItem.classList.remove('completed');
      }
    });
    const taskLabel = document.createElement('label');
    taskLabel.textContent = taskText;
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});

removeCompletedButton.addEventListener('click', () => {
  const completedTasks = taskList.querySelectorAll('.completed');
  completedTasks.forEach((task) => {
    task.remove();
  });
});