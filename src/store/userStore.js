import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '../api/axios';

const useUserStore = create(
  persist(
    (set, get) => ({
      // State
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      setLoading: (loading) => set({ isLoading: loading }),
      
      setError: (error) => set({ error }),
      
      clearError: () => set({ error: null }),

      // Sign In
      signIn: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const response = await api.post('/auth/signin', { email, password });
          const { user, token } = response.data;
          
          // Store token in localStorage
          localStorage.setItem('authToken', token);
          
          set({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          
          return { success: true, user };
        } catch (error) {
          const errorMessage = error.response?.data?.message || 'Sign in failed';
          set({
            isLoading: false,
            error: errorMessage,
            isAuthenticated: false,
            user: null,
          });
          return { success: false, error: errorMessage };
        }
      },

      // Sign Up
      signUp: async (userData) => {
        set({ isLoading: true, error: null });
        try {
          const response = await api.post('/auth/signup', userData);
          const { user, token } = response.data;
          
          // Store token in localStorage
          localStorage.setItem('authToken', token);
          
          set({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
          
          return { success: true, user };
        } catch (error) {
          const errorMessage = error.response?.data?.message || 'Sign up failed';
          set({
            isLoading: false,
            error: errorMessage,
            isAuthenticated: false,
            user: null,
          });
          return { success: false, error: errorMessage };
        }
      },

      // Reset Password
      resetPassword: async (email) => {
        set({ isLoading: true, error: null });
        try {
          await api.post('/auth/reset-password', { email });
          set({ isLoading: false, error: null });
          return { success: true, message: 'Password reset email sent' };
        } catch (error) {
          const errorMessage = error.response?.data?.message || 'Password reset failed';
          set({
            isLoading: false,
            error: errorMessage,
          });
          return { success: false, error: errorMessage };
        }
      },

      // Sign Out
      signOut: () => {
        localStorage.removeItem('authToken');
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        });
      },

      // Initialize user from token
      initializeUser: async () => {
        const token = localStorage.getItem('authToken');
        if (!token) return;

        set({ isLoading: true });
        try {
          const response = await api.get('/auth/me');
          const user = response.data;
          
          set({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          // Token is invalid, remove it
          localStorage.removeItem('authToken');
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        }
      },
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useUserStore;