import React,{useState,useEffect,useMemo,useCallback} from 'react';



function App() {

  const [tarefas,setTarefas] = useState(['Pagar a conta de luz','Estudar React Hooks']);

 // const [nome,setNome] = useState('Victor');

  const [input,setInput] = useState('');


  const handleAdd = useCallback(()=>{
    setTarefas([...tarefas,input]);
    setInput('');
  },[input,tarefas]);

  //quando sofre alguma alteração
  useEffect(()=>{
    localStorage.setItem('tarefas',JSON.stringify(tarefas));
  },[tarefas]);  


  const totalTarefas = useMemo(()=>tarefas.length,[tarefas]);

  return (
    <div>
        <ul>
          {tarefas.map(tarefa=>(
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
        <strong>Você possui {totalTarefas} tarefas</strong><br/>
        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
          
        <button type="button" onClick={handleAdd}>Adicionar</button>

    </div>
  );
}

export default App;
