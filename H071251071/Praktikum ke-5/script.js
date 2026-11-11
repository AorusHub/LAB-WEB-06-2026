const STORAGE_KEY = 'praktikum5.tasks';

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const searchInput = document.getElementById('search-input');
const taskList = document.getElementById('task-list');
const taskCount = document.getElementById('task-count');
const clearCompletedBtn = document.getElementById('clear-completed');
const filterButtons = document.querySelectorAll('.filter-btn');

let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
  { id: 1, text: 'Belajar HTML dasar', completed: false },
  { id: 2, text: 'Membuat tampilan web', completed: true },
  { id: 3, text: 'Latihan JavaScript DOM', completed: false }
];

let activeFilter = 'all';
let searchText = '';

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function getFilteredTasks() {
  const query = searchText.toLowerCase();

  return tasks.filter((task) => {
    const matchesSearch = task.text.toLowerCase().includes(query);
    const matchesFilter =
      activeFilter === 'all' ||
      (activeFilter === 'active' && !task.completed) ||
      (activeFilter === 'completed' && task.completed);

    return matchesSearch && matchesFilter;
  });
}

function updateCounter() {
  const completedCount = tasks.filter((task) => task.completed).length;
  const total = tasks.length;

  taskCount.textContent = `${total} tugas • ${completedCount} selesai`;
}

function renderTasks() {
  const filteredTasks = getFilteredTasks();

  if (filteredTasks.length === 0) {
    taskList.innerHTML = `
      <li class="text-center py-8 text-slate-500 border border-dashed border-slate-300 rounded-xl">
        Tidak ada tugas yang sesuai.
      </li>
    `;
    updateCounter();
    return;
  }

  taskList.innerHTML = filteredTasks
    .map(
      (task) => `
        <li class="flex items-center justify-between gap-3 border border-slate-200 rounded-xl p-3 bg-slate-50">
          <label class="flex items-center gap-3 cursor-pointer flex-1 min-w-0">
            <input
              type="checkbox"
              class="task-toggle h-5 w-5 accent-blue-600"
              data-id="${task.id}"
              ${task.completed ? 'checked' : ''}
            />
            <span class="truncate ${task.completed ? 'line-through text-slate-400' : 'text-slate-700'}">
              ${task.text}
            </span>
          </label>

          <button
            type="button"
            class="delete-btn text-red-500 hover:text-red-700 font-medium"
            data-id="${task.id}"
          >
            Hapus
          </button>
        </li>
      `
    )
    .join('');

  updateCounter();
}

function addTask(event) {
  event.preventDefault();

  const text = taskInput.value.trim();

  if (!text) {
    taskInput.focus();
    return;
  }

  tasks.unshift({
    id: Date.now(),
    text,
    completed: false
  });

  taskInput.value = '';
  taskInput.focus();
  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === Number(id)) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  saveTasks();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== Number(id));
  saveTasks();
  renderTasks();
}

function clearCompleted() {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  renderTasks();
}

function setFilter(filterName) {
  activeFilter = filterName;

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === filterName;
    button.classList.toggle('active', isActive);
    button.classList.toggle('bg-indigo-600', isActive);
    button.classList.toggle('text-white', isActive);
    button.classList.toggle('bg-slate-200', !isActive);
    button.classList.toggle('text-slate-700', !isActive);
  });

  renderTasks();
}

function handleSearch(event) {
  searchText = event.target.value;
  renderTasks();
}

taskForm.addEventListener('submit', addTask);
searchInput.addEventListener('input', handleSearch);
clearCompletedBtn.addEventListener('click', clearCompleted);

filterButtons.forEach((button) => {
  button.addEventListener('click', () => setFilter(button.dataset.filter));
});

taskList.addEventListener('change', (event) => {
  if (event.target.classList.contains('task-toggle')) {
    toggleTask(event.target.dataset.id);
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-btn')) {
    deleteTask(event.target.dataset.id);
  }
});

renderTasks();
