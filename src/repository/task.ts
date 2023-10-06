import HttpFactory from '../axios';
import { NewTaskDTO, TaskDTO } from '../models/task.dto';

class TaskModule extends HttpFactory {
  constructor() {
    super();
  }

  async tasks(): Promise<TaskDTO[]> {
    return this.axios.get('/task');
  }

  async newTask(params: NewTaskDTO): Promise<any> {
    return this.axios.post('/task', params);
  }

  async markCompleted(params: any): Promise<any> {
    return this.axios.put('/task', params);
  }

  async deleteTodo(params: any): Promise<any> {
    return this.axios.delete(`/task/${params.id}`);
  }
}

export default TaskModule;
