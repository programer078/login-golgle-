import { Component } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

interface GoogleUser {
  authentication: {
    accessToken: string;
    idToken: string;
  };
  serverAuthCode?: string;
  displayName?: string;
  email: string;
  familyName: string;
  givenName: string;
  id: string;
  imageUrl?: string;
}

interface Authentication {
  accessToken: string;
  idToken: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: { name?: string; email?: string; imageUrl?: string } | null = null;

  constructor(private platform: Platform, private router: Router) {
    this.initializeGoogleAuth();
  }

  async initializeGoogleAuth() {
    try {
      if (this.platform.is('capacitor')) {
        await GoogleAuth.initialize();
      } else {
        await GoogleAuth.initialize({
          clientId: '615963470221-itbd2hnss8uoj243gmpu9mrokk2b19ps.apps.googleusercontent.com',
          scopes: ['profile', 'email'],
          grantOfflineAccess: true,
        });
      }
      console.log('Google Auth initialized successfully');
      this.tryRestoreSession();
    } catch (error) {
      console.error('Error initializing Google Auth:', error);
    }
  }

  async tryRestoreSession() {
    try {
      const result = await GoogleAuth.refresh();
      if (result) {
        this.handleAuthResult(result);
      }
    } catch (error) {
      console.log('No valid session found');
    }
  }

  async signIn(autoSignIn: boolean = false) {
    try {
      console.log('Attempting to sign in...');
      let result: GoogleUser | Authentication;
      if (autoSignIn) {
        result = await GoogleAuth.refresh();
      } else {
        result = await GoogleAuth.signIn();
      }
      console.log('Sign in result:', result);
      this.handleAuthResult(result);
    } catch (error: any) {
      console.error('Error signing in:', error);
      // Error handling remains the same
    }
  }
    
  async refresh() {
    try {
      const result = await GoogleAuth.refresh();
      console.log('Refresh result:', result);
      this.handleAuthResult(result);
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  }

  async signOut() {
    try {
      await GoogleAuth.signOut();
      this.user = null;
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  private handleAuthResult(result: GoogleUser | Authentication) {
    if ('email' in result) {
      // It's a GoogleUser
      this.user = {
        name: result.displayName || `${result.givenName} ${result.familyName}`,
        email: result.email,
        imageUrl: result.imageUrl
      };
    } else {
      // It's an Authentication
      this.user = {
        // Handle Authentication case
      };
    }
    console.log('Updated user:', this.user);
  }
  
}