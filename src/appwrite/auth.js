import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client)
    }

    // Create User / Sign Up
    async createUser({ email, name, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // direct login after creation done
                return this.logIn({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error
        }
    }

    // Log In
    async logIn({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);

        } catch (error) {
            throw error
        }
    }

    // Current User / Logged In User
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }
        return null; // if there is any error in trycatch
    }

    // Log Out
    async logOut() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService