interface IUser {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
}

class User {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;

    constructor(name: string, email: string, password: string | null = null, id = '0') {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

}

export { User, IUser };