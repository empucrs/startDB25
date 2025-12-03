import { useEffect, useState } from "react";
import type { Task } from "./model/Task";
import { localApi } from "./service/localApi";

export default function TodoListApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      const resposta = await localApi.get<Task[]>("/todos");
      setTasks(resposta.data);
      setError("");
    } catch (error) {
      setError("Erro ao buscar tarefas. - " + String(error));
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="informe a tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>

      {loading && <p>Carregando tarefas...</p>}

      <ul>
        {tasks.length === 0 ? (
          <p>Nenhuma tarefa encontrada.</p>
        ) : (
          tasks.map((task) => (
            <li key={task.id}>
              <input type="checkbox" checked={task.completed} readOnly />
              {task.title}
            </li>
          ))
        )}
      </ul>
      <footer>
        Total de tarefas registradas: {tasks.length}
        {tasks.filter((task) => task.completed).length} Tarefas concluídas
        {tasks.filter((task) => !task.completed).length} Tarefas em andamento
      </footer>
    </div>
  );
}
