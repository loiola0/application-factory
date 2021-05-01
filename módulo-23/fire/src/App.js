import React,{useState} from 'react';
import firebase from './firebaseConnection';
import './style.css';



function App() {

    //const [idPost,setIdPost] = useState('');
    //const [titulo,setTitulo] = useState('');
    //const [autor,setAutor] = useState('');
    //const [posts,setPosts] = useState([]);
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [nome,setNome] = useState('');
    const [cargo,setCargo] = useState('');
    const [user,setUser] = useState({});
    //const [userLogged,setUserLogged] = useState({});



    // useEffect(()=>{

    //     async function loadPosts(){
    //       await firebase.firestore().collection('posts')
    //       .onSnapshot((doc)=>{

    //         let meusPosts = [];

    //           doc.forEach((item)=>{
    //             meusPosts.push({
    //                 id: item.id,
    //                 titulo: item.data().titulo,
    //                 autor: item.data().autor,
    //             });
    //           })

    //           setPosts(meusPosts);
    //       })
    //     }

    //     loadPosts();

    // },[]);

    // useEffect(()=>{

    //     async function checkLogin(){
    //       await firebase.auth().onAuthStateChanged((user)=>{
    //         if(user){
    //           //se tem usuário logado entra aqui.
    //           setUser(true);

    //           setUserLogged({
    //             uid: user.uid,
    //             email: user.email,

    //           })

    //         }else{
    //           //não possui nenhum user logado.
    //           setUser(false);
    //           setUserLogged({});
    //         }
    //       })
    //     }
        

    //     checkLogin();

    // },[])


    // async function handleAdd(){
    //   await firebase.firestore().collection('posts')
    //   // .doc('12346')
    //   // .set({
    //   //   autor: autor,
    //   //   titulo: titulo,
    //   // })
    //   // .then(()=>{
    //   //   console.log('Dados cadastrados com sucesso');
    //   // })
    //   // .catch((error)=>{
    //   //   console.log('gerou algum error: '+error);
    //   // })

    //   .add({
    //     autor: autor,
    //     titulo: titulo,
    //   })
    //    .then(()=>{
    //     console.log('Dados cadastrados com sucesso');
    //     setTitulo('');
    //     setAutor('');
    //   })
    //   .catch((error)=>{
    //     console.log('gerou algum error: '+error);
    //   })

    // }

    // async function buscarPost(){
    //   // await firebase.firestore().collection('posts')
    //   // .doc('123')
    //   // .get()
    //   // .then((snapshot)=>{
    //   //   setTitulo(snapshot.data().titulo);
    //   //   setAutor(snapshot.data().autor);
    //   // })
    //   // .catch((error)=>{
    //   //   console.log('Aconteceu algum erro: '+error);
    //   // })

    //   await firebase.firestore().collection('posts')
    //   .get()
    //   .then((snapshot)=>{
    //     let list = [];

    //     snapshot.forEach(
    //       (doc) => {
    //         list.push({
    //           id: doc.id,
    //           titulo: doc.data().titulo,
    //           autor: doc.data().autor,
    //         });
    //       }
    //     );

    //     setPosts(list);
    //     //list = [];

    //   })
    //   .catch((error)=>{console.log('Aconteceu algum erro: '+error);})

    // }

    //  async function editarPost(){
    //     await firebase.firestore().collection('posts')
    //     .doc(idPost)
    //     .update({
    //         titulo: titulo,
    //         autor: autor,
    //     })
    //     .then(()=>{
    //       alert('Dados atualizados com sucesso!');
    //       setAutor('');
    //       setTitulo('');
    //       setIdPost('');
    //     })
    //     .catch((error)=>alert('Erro ao atualizar: '+error))
    // }

    

    async function novoUsuario(){
      await firebase.auth().createUserWithEmailAndPassword(email,senha)
      .then(async (value)=>{
          await firebase.firestore().collection('users')
          .doc(value.user.uid)
          .set({
            nome: nome,
            cargo: cargo,
            status: true,
          })
          .then(()=>{
            setCargo('');
            setEmail('');
            setNome('');
            setSenha('');
            alert('Usuário cadastrado com sucesso!');
          })
      })
      .catch((error)=>{
          alert('Aconteceu um erro: '+error);
      })
    }

    async function logout(){
      await firebase.auth().signOut()
      .then(()=>{
        setUser({});
        setEmail('');
        setSenha('');
        
      })
      .catch((error) => {

      })
    }

    async function login(){
      await firebase.auth().signInWithEmailAndPassword(email,senha)
      .then(async (value)=>{

          await firebase.firestore().collection('users')
          .doc(value.user.uid)
          .get()
          .then((snapshot)=>{
            setUser({
              nome: snapshot.data().nome,
              cargo: snapshot.data().cargo,
              email: value.user.email
            });
          })
          .catch((error)=>{alert('Erro ao buscar dados do usuário: '+error)})

      })
      .catch((error)=>{
        alert('Erro ao fazer login: '+error);
      })
    }

  return (
    <div className="App">
      <h1>ReactJs + FireBase :)</h1><br/>

      <div className="container">

          <label>Nome</label>
          <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/><br/>
          <label>Cargo</label>
          <input type="text" value={cargo} onChange={(e)=>setCargo(e.target.value)}/><br/>

          <label>Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
          <label>Senha</label>
          <input type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/><br/>
          
          <button onClick={login}>Fazer Login</button>
          <button onClick={novoUsuario}>Cadastrar</button>
          <button onClick={logout}>Sair da conta</button>
      </div>

      <hr/><br/>

      {Object.keys(user).length > 0 && (
        <div>
          <strong>Olá </strong>{user.nome}<br/>
          <strong>Cargo: </strong>{user.cargo}<br/>
          <strong>Email: </strong>{user.email}<br/>
          <strong>Status: </strong>{user.status ? 'ATIVO' : 'DESATIVADO'}
        </div>
      )}
      

    </div>
  );
}

export default App;
