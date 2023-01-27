import { defineStore } from 'pinia'
import {projectData,decentProjectsData,smallProjectsData,contactData,factsData} from '@/data/data'
import {state} from "vue-tsc/out/shared";

export const useStore = defineStore('data', {
  state: () => ({
    data : projectData,
    decentProjectsData:decentProjectsData,
    smallProjectsData:smallProjectsData,
    contactData:contactData,
    factsData:factsData

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
    }
  },
  actions: {
    fetchData(){
      console.log(this.data)
    }
  },
})