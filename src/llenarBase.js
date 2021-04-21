const sequelize = require('./models/db');
const Post = require('./models/users/Post');
const User = require('./models/users/User');
const Direcciones = require('./models/users/Direcciones');
const Band = require('./models/users/Band');
require('./models/relation');

// Usuarios
const users = [
    { name: "Anton Guevara", email: "azr@azr.es", age: 18, role: 0 },
    { name: "Pepe", email: "pepe@gmail.com", age: 38, role: 1 },
    { name: "Lucia", email: "lucia@hotmail.com", age: 88, role: 0 },
];

// Direcciones
const direcciones = [
    { direccion: "Calle de la vida 2", residente_id: 1 },
    { direccion: "Debajo del puente s/n", residente_id: 2 },
    { direccion: "Isla de Tabarca, 5", residente_id: 3 },
];

// Entradas
const posts = [
    { title: "Foo", body: "Bar 1", autorId: 1 },
    { title: "Foo", body: "Bar 2", autorId: 1 }, 
    { title: "Title", body: "Bar 3", autorId: 1 },
    { title: "Yo que se", body: "Bar 4", autorId: 1 }, 
    { title: "Me da igual", body: "Bar 5", autorId: 2 }, 
    { title: "Todo", body: "Bar 6", autorId: 2 }, 
    { title: "Foo", body: "Bar 7", autorId: 3 }
];


/*sequelize.sync({ force: true }).then(() => {
    // Conexión establecida
    console.log("Conexión establecida...");
}).then(() => {
    // Rellenar usuarios
    

   return users.forEach(user => User.create(user));
    
}).then((user) => {
    // Rellenar direcciones
    return direcciones.forEach(direccion => Direcciones.create(direccion));
    //console.log("hola2");
}).then((direccion) => {
    // Rellenar posts
    posts.forEach(post => Post.create(post));
    //console.log("hola3");
}).catch(error => console.error(error));*/
/*const con = async  (req, res)=>{
    try {
        //force:true   elimina toda las tabla y vuelve a guardar
        const conexion =  await sequalize.sync({force:false});
        //const conexion =  await sequalize.authenticate();
        console.log("conectado correctamente consola");

    //res.send('Hello World!');
    a = "conexion correcta"; 
    }catch (e){
        console.log("Error "+ e);
        a = "conexion no correcta"; 
    }
    return a;

};*/


const llenar = async  (req, res) => {
    await sequelize.sync({ force: true });
    try {
        for await(let user of users){
            User.create(user);
            console.log(user);
        };
        for await(let direccion of direcciones){
            Direcciones.create(direccion);
            console.log(direccion);
        };           
        for await(let post of posts){
                Post.create(post);
                console.log(post);
            };

       let band = await Band.create({
           name:"Neztor MVL",
           type:"Rap",
           users:[{name:"Giovanni", age:24, email:"giovanni1@gmail.com"},
                 {name:"Jessica", age:26, email:"jessica@gmail.com"}
                ]
       },{
           include: User
       });

        let user1 = await User.create({name:"David", age:30,email:"david@gmail.com"});
        let user2 = await User.create({name:"Avigail", age:28,email:"avigail@gmail.com"});
        let band1 = await Band.create({
            name:"Mc aese",
           type:"Hip Hop",
        });
        band1.addUsers([user1,user2]);
        let user3 = await User.create({name:"Jair", age:20,email:"jair@gmail.com"});
        user3.setBands([band1,band]);
        
    } catch (error) {
        console.log(error);
    }
 
  };

  llenar();



