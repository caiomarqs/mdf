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

    constructor(
        name: string,
        email: string,
        password: string | null = null,
        id: string | null = null
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    getUserWithoutId(): any {
        const { name, email, password } = this
        return { name, email, password }
    }

    getUserWithoutPassword(): any {
        const { id, name, email } = this
        return { id, name, email }
    }

}

export { User, IUser };