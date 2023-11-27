import { defineStore } from "pinia";
import {
  projectsData,
  contactData,
  factsData,
  skillsData, quotesData,
} from "@/data/data";
import { state } from "vue-tsc/out/shared";

export const useStore = defineStore("data", {
  state: () => ({
    projectsData: projectsData,
    contactData: contactData,
    factsData: factsData,
    mode: "",
    skills: skillsData,
    logoColor:'',
    quotesData:quotesData
  }),
  getters: {
    getData(state) {
      //Object entries converts the object to an array then slice takes the first 3 elements
      //then reduce converts the array back to an object
      return Object.entries(state.projectsData)
        .slice(0, 3)
        .reduce((obj: any, [key, value]: any) => {
          obj[key] = value;
          return obj;
        }, {});
    },
    getProjectsData(state) {
      return state.projectsData;
    },
    getContactData(state) {
      return state.contactData;
    },
    getFactsData(state) {
      return state.factsData;
    },
    getQuotesData(state) {
      let randomDecimal = Math.random();
      let randomInt = Math.floor(randomDecimal * state.quotesData.length);
      return state.quotesData[randomInt];
    },
    getMode(state) {
      return state.mode;
    },
    getSkillData(state) {
      return state.skills;
    },
    getLogoColor(state) {
      return state.logoColor;
    }
  },
  actions: {
    setMode() {
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          this.mode = "light";
          this.logoColor = 'black'
          document.documentElement.classList.remove("dark");
        } else {
          this.mode = "dark";
          this.logoColor = 'white'
          document.documentElement.classList.add("dark");
        }
        // if NOT set via local storage previously
      } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          this.mode = "dark";
          this.logoColor = 'white'
          document.documentElement.classList.add("dark");
        } else {
          this.mode = "light";
          this.logoColor = 'black'
          document.documentElement.classList.remove("dark");
        }
      }
    },
    toggleMode() {
      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          this.mode = "dark";
          this.logoColor = 'white'
          localStorage.setItem("color-theme", "dark");
          document.documentElement.classList.add("dark");
        } else {
          this.mode = "light";
            this.logoColor = 'black'
          localStorage.setItem("color-theme", "light");
          document.documentElement.classList.remove("dark");
        }

        // if NOT set via local storage previously
      } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          this.mode = "light";
            this.logoColor = 'black'
          localStorage.setItem("color-theme", "light");
          document.documentElement.classList.remove("dark");
        } else {
          this.mode = "dark";
            this.logoColor = 'white'
          localStorage.setItem("color-theme", "dark");
          document.documentElement.classList.add("dark");
        }
      }
    },
  },
});
