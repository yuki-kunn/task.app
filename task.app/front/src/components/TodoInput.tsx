import { Dispatch, MouseEventHandler, SetStateAction } from 'react'

type Props = {
  todo: string
  setTodo: Dispatch<SetStateAction<string>>
  todoId: string
  onClick: MouseEventHandler<HTMLButtonElement>
}




const TodoInput = ({ todo, setTodo, todoId, onClick }: Props) => {
    return (
      <div className="inputArea">
        {/* <label htmlFor='todo' className='outline'>
        </label> */}
        <input
          type='text'
          name='todo'
          id='todo'
          placeholder='todoを入力'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type='submit'
          className='button'
          onClick={onClick}
        >
          {todoId === '' ? '追加' : '更新'}
        </button>
      </div>
    )
  }
  
  export default TodoInput