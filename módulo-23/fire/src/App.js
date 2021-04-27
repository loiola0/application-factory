import React,{useState,useEffect} from 'react';
import firebase from './firebaseConnection';
import './style.css';



function App() {

    const [idPost,setIdPost] = useState('');
    const [titulo,setTitulo] = useState('');
    const [autor,setAutor] = useState('');
    const [posts,setPosts] = useState([]);
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [user,setUser] = useState(false);
    const [userLogged,setUserLogged] = useState({});



    useEffect(()=>{

        async function loadPosts(){
          await firebase.firestore().collection('posts')
          .onSnapshot((doc)=>{

            let meusPosts = [];

              doc.forEach((item)=>{
                meusPosts.push({
                    id: item.id,
                    titulo: item.data().titulo,
                    autor: item.data().autor,
                });
              })

              setPosts(meusPosts);
          })
        }

        loadPosts();

    },[]);

    useEffect(()=>{

        async function checkLogin(){
          await firebase.auth().onAuthStateChanged((user)=>{
            if(user){
              //se tem usuário logado entra aqui.
              setUser(true);

              setUserLogged({
                uid: user.uid,
                email: user.email,

              })

            }else{
              //não possui nenhum user logado.
              setUser(false);
              setUserLogged({});
            }
          })
        }
        

        checkLogin();

    },[])


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

     async function editarPost(){
        await firebase.firestore().collection('posts')
        .doc(idPost)
        .update({
            titulo: titulo,
            autor: autor,
        })
        .then(()=>{
          alert('Dados atualizados com sucesso!');
          setAutor('');
          setTitulo('');
          setIdPost('');
        })
        .catch((error)=>alert('Erro ao atualizar: '+error))
    }

    async function excluirPost(id){
      await firebase.firestore().collection('posts')
      .doc(id)
      .delete()
      .then(()=> alert('Post excluído com sucesso!'))
      .catch((error)=> alert('Não foi possível apagar o post: '+error))
    }

    async function novoUsuario(){
      await firebase.auth().createUserWithEmailAndPassword(email,senha)
      .then(()=>{
        alert('Cadastrado com sucesso!');
      })
      .catch((error)=>{
          alert('Aconteceu um erro: '+error);
      })
    }

    async function logout(){
      await firebase.auth().signOut()
      .then(()=>{

      })
      .catch((error) => {

      })
    }

  return (
    <div className="App">
      <h1>ReactJs + FireBase :)</h1><br/>


      {user && (
        <div>
            <strong>Seja bem vindo! (Você está logado!)</strong><br/>
            <span>{userLogged.uid} - {userLogged.email}</span>
            <br/><br/>
        </div>
      )}

      <div className="container">

          <label>Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
          <label>Senha</label>
          <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/><br/>
          <button onClick={novoUsuario}>Cadastrar</button>
          <button onClick={logout}>Sair da conta</button>
      </div>

      <hr/>
      <div className="container">
        <h2>Banco de dados: </h2>
        <label>ID: </label>
        <input type="text" value={idPost} onChange={(e) => setIdPost(e.target.value)}/>

        <label>Titulo: </label>
        <textarea type="text" value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>

        <label>Autor: </label>
        <textarea type="text" value={autor} onChange={(e)=>setAutor(e.target.value)}/>

        <button onClick={handleAdd}>Cadastrar</button>

        <button onClick={buscarPost}>Buscar Post</button>

        <button onClick={editarPost}>Editar Post</button><br/>

        <ul>
          {posts.map((post)=>{
            return(
              <li key={post.id}>
                <span>Id: {post.id}</span><br/>
                <span>Titulo: {post.titulo}</span><br/>
                <span>Autor: {post.autor}</span><br/>
                <button onClick={() => excluirPost(post.id)}>Excluir post</button><br/><br/>
              </li>
              
            );
          })}
        </ul>

      </div>
      

    </div>
  );
}

export default App;
