import database from '../config/database';
class User{

    private name: string;
    private email: string;
    private idade: number;

    constructor(name:string, email:string, idade:number) {
        this.name = name;
        this.email = email;
        this.idade = idade;
    }

    public falar(frase:string) {
        console.log(frase);    
    }

    public static save(user:User) {
        database.users.push({email:user.email, name:user.name, idade:user.idade});
    }

}

export default User;