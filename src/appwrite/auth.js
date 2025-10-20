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
    async createUser({ email, name, password, phone }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name, phone);
            if (userAccount) {
                // direct login after creation done
                return this.logIn({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("User creation error::", error);
            alert("Email, or Phone already exists");
        }
    }

    // Log In
    async logIn({ email, password }) {
        try {

            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("Login error::", error)
            alert("Invalid password or email")
        }
    }

    // Current User / Logged In User
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Error current user::", error);
        }
        return null;
    }

    // Update User
    async updateUserProfile({ name, email, password, phone, prefs }) {
        try {
            const updates = []
            if (name) { updates.push(this.account.updateName(name)) }
            if (prefs) { updates.push(this.account.updatePrefs(prefs)) }

            if (updates.length > 0) {
                await Promise.all(updates);
            }

            if (email && password) { await this.account.updateEmail(email, password) }
            if (phone && password) { await this.account.updatePhone(phone, password) }

            return await this.getCurrentUser(); //return updated user data

        } catch (error) {
            console.log("Update failed::", error);
            alert('Failed to update profile')
        }
    }

    // Log Out
    async logOut() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Logout error::", error);
            alert("Invalid password or email")
        }
    }
}

const authService = new AuthService();

export default authService