import { defineStore } from 'pinia'
import {projectData,decentProjectsData,smallProjectsData,contactData,factsData} from '@/data/data'
import {state} from "vue-tsc/out/shared";

export const useStore = defineStore('data', {
  state: () => ({
    data : projectData,
    decentProjectsData:decentProjectsData,
    smallProjectsData:smallProjectsData,
    contactData:contactData,
    factsData:factsData,
    mode : ''

  }),
  getters: {
    getData(state) {
     return  state.data
    },
    getdecentProjectsData(state){
      return state.decentProjectsData
    },
    getsmallProjectsData(state){
      return state.smallProjectsData
    },
    getContactData(state){
      return state.contactData
    },
    getFactsData(state){
      return state.factsData.list
    },
    getMode(state){
      return state.mode
    }
  },
  actions: {
    setMode(){
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          this.mode = 'light'
          document.documentElement.classList.remove('dark')
        } else {
          this.mode = 'dark'
          document.documentElement.classList.add('dark')
        }
        // if NOT set via local storage previously
      } else {
        if ( window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.mode = 'dark'
          document.documentElement.classList.add('dark')
        } else {
          this.mode = 'light'
          document.documentElement.classList.remove('dark')
        }
      }

    },
    toggleMode(){
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          this.mode = 'dark'
          localStorage.setItem('color-theme', 'dark');
          document.documentElement.classList.add('dark')
        } else {
          this.mode = 'light'
          localStorage.setItem('color-theme', 'light');
          document.documentElement.classList.remove('dark')
        }

        // if NOT set via local storage previously
      } else {
        if ( window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.mode = 'light'
          localStorage.setItem('color-theme', 'light');
          document.documentElement.classList.remove('dark')
        } else {
          this.mode = 'dark'
          localStorage.setItem('color-theme', 'dark');
          document.documentElement.classList.add('dark')
        }
      }
    }
  },
})