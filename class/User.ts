class User {
	private id: number
	private username: string 
	private password: string

	constructor(id: number, username: string, password: string) {
		this.id = id
		this.username = username
		this.password = password
	}

	public getId(): number {
		return 0
	}

	public getUsername(): string {
		return ""
	}

	public getPassword(): string {
		return ""
	}

	public setId(id: number): void {
		return 
	}

	public setUsername(username: string): void {
		return 
	}

	public setPassword(password: string): void {
		return 
	}
}

export default User