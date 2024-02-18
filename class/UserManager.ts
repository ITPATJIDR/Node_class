import { User } from "../types/userType"

class UserManager {
	private id: number
	private username: string 
	private password: string

	constructor(id: number, username: string, password: string) {
		this.id = id
		this.username = username
		this.password = password
	}

	public getUserId () : User | null {
		return null	
	}

	public updateUser(id: number, username: string, password: string): boolean{
		return true
	}

	public deleteUser(id: number) : boolean {
		return true
	}

}