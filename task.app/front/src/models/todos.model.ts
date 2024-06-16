export enum TodoStatus {
    waiting = 'waiting',
    done = 'done',
  }
  
  export interface TodoModel {
    id: string
    title: string
    status: TodoStatus
    created_at: Date
    updated_at: Date
  }