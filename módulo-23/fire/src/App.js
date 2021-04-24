import React,{useState} from 'react';
import firebase from './firebaseConnection';
import './style.css';



function App() {

    const [titulo,setTitulo] = useState('');
    const [autor,setAutor] = useState('');
    const [posts,setPosts] = useState([]);

    async function handleAdd(){
      await firebase.firestore().collection('posts')
      // .doc('12346')
      // .set({
      //   autor: autor,
      //   titulo: titulo,
      // })
      // .then(()=>{
      //   console.log('Dados cadastrados com sucesso');
      // })
      // .catch((error)=>{
      //   console.log('gerou algum error: '+error);
      // })

      .add({
        autor: autor,
        titulo: titulo,
      })
       .then(()=>{
        console.log('Dados cadastrados com sucesso');
        setTitulo('');
        setAutor('');
      })
      .catch((error)=>{
        console.log('gerou algum error: '+error);
      })

    }

    async function buscarPost(){
      // await firebase.firestore().collection('posts')
      // .doc('123')
      // .get()
      // .then((snapshot)=>{
      //   setTitulo(snapshot.data().titulo);
      //   setAutor(snapshot.data().autor);
      // })
      // .catch((error)=>{
      //   console.log('Aconteceu algum erro: '+error);
      // })

      await firebase.firestore().collection('posts')
      .get()
      .then((snapshot)=>{
        let list = [];

        snapshot.forEach(
          (doc) => {
            list.push({
              id: doc.id,
              titulo: doc.data().titulo,
              autor: doc.data().autor,
            });
          }
        );

        setPosts(list);
        //list = [];

      })
      .catch((error)=>{console.log('Aconteceu algum erro: '+error);})

    }

  return (
    <div className="App">
      <h1>ReactJs + FireBase :)</h1><br/>


      <div className="container">
        <label>Titulo: </label>
        <textarea type="text" value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>

        <label>Autor: </label>
        <textarea type="text" value={autor} onChange={(e)=>setAutor(e.target.value)}/>

        <button onClick={handleAdd}>Cadastrar</button>

        <button onClick={buscarPost}>Buscar Post</button><br/>

        <ul>
          {posts.map((post)=>{
            return(
              <li key={post.id}>
                <span>Titulo: {post.titulo}</span><br/>
                <span>Autor: {post.autor}</span><br/><br/>
              </li>
              
            );
          })}
        </ul>

      </div>
      

    </div>
  );
}

export default App;
