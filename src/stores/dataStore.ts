import { defineStore } from "pinia";
import {
  decentProjectsData,
  contactData,
  factsData,
  skillsData,
} from "@/data/data";
import { state } from "vue-tsc/out/shared";

export const useStore = defineStore("data", {
  state: () => ({
    decentProjectsData: decentProjectsData,
    contactData: contactData,
    factsData: factsData,
    mode: "",
    skills: skillsData,
  }),
  getters: {
    getData(state) {
      //Object entries converts the object to an array then slice takes the first 3 elements
      //then reduce converts the array back to an object
      return Object.entries(state.decentProjectsData)
        .slice(0, 3)
        .reduce((obj: any, [key, value]: any) => {
          obj[key] = value;
          return obj;
        }, {});
    },
    getdecentProjectsData(state) {
      return state.decentProjectsData;
    },
    getContactData(state) {
      return state.contactData;
    },
    getFactsData(state) {
      return state.factsData.list;
    },
    getMode(state) {
      return state.mode;
    },
    getSkillData(state) {
      return state.skills;
    },
  },
  actions: {
    setMode() {
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          this.mode = "light";
          document.documentElement.classList.remove("dark");
        } else {
          this.mode = "dark";
          document.documentElement.classList.add("dark");
        }
        // if NOT set via local storage previously
      } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          this.mode = "dark";
          document.documentElement.classList.add("dark");
        } else {
          this.mode = "light";
          document.documentElement.classList.remove("dark");
        }
      }
    },
    toggleMode() {
      // if set via local storage previously
      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          this.mode = "dark";
          localStorage.setItem("color-theme", "dark");
          document.documentElement.classList.add("dark");
        } else {
          this.mode = "light";
          localStorage.setItem("color-theme", "light");
          document.documentElement.classList.remove("dark");
        }

        // if NOT set via local storage previously
      } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          this.mode = "light";
          localStorage.setItem("color-theme", "light");
          document.documentElement.classList.remove("dark");
        } else {
          this.mode = "dark";
          localStorage.setItem("color-theme", "dark");
          document.documentElement.classList.add("dark");
        }
      }
    },
  },
});
