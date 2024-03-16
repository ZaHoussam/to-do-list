<template lang="pug">
.list.ms-auto.me-auto.text-capitalize
    table.content-table
      thead
          tr
              th title
              th From
              th To
              th Enter On
              th case 
              th.text-center delete
      tbody
          tr(v-for="(obj,index) in data" :key="obj.id")
            td(v-text="obj.title")
            td(v-text="obj.from")
            td(v-text="obj.to")
            td(v-text="obj.createAt")
            td
              button.text-capitalize.c-button.c-button--gooey.uncomplete(v-if="obj.isCompleted" @click="changeCase(obj)")
                | {{ obj.isCompleted? `uncomplete`: `complete` }}
                .c-button__blobs
                  each val in [1, 2, 3]
                    div
                svg(xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: block; height: 0; width: 0;")
                  defs
                    filter(id="goo")
                      feGaussianBlur(in="SourceGraphic" stdDeviation="10" result="blur")
                      feColorMatrix(in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo")
                      feBlend(in="SourceGraphic" in2="goo")
              button.text-capitalize.c-button.c-button--gooey.complete(v-else @click="changeCase(obj)")
                | {{ obj.isCompleted? `uncomplete`: `complete` }}
                .c-button__blobs
                  each val in [1, 2, 3]
                    div
                svg(xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: block; height: 0; width: 0;")
                  defs
                    filter(id="goo")
                      feGaussianBlur(in="SourceGraphic" stdDeviation="10" result="blur")
                      feColorMatrix(in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo")
                      feBlend(in="SourceGraphic" in2="goo")
            td
              button.text-capitalize.delete(@click="itemDelete(obj.id)")
                  svg(viewBox="0 0 448 512" class="svgIcon")
                    path(d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z")
</template>
<script setup>
import { ref } from "vue";
const data = ref();
data.value = JSON.parse(localStorage.getItem("todolistData"));
const itemDelete = (id) => {
  data.value.splice(id, 1);
  localStorage.setItem("todolistData", JSON.stringify(data.value));
};
const changeCase = (obj) => {
  obj.isCompleted = !obj.isCompleted;
  localStorage.setItem("todolistData", JSON.stringify(data.value));
};
</script>
<style scoped lang="scss">
$green: #009879;
$purple: #5e4dcd;
$white: #f6f6f6;
$orange: #e67e22;
.list {
  width: 800px;
  height: 550px;
  overflow-y: auto;
  .content-table {
    border-collapse: collapse;
    font-size: 0.9em;
    width: 100%;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-bottom: 2px solid $green;
    thead {
      tr {
        background-color: $green;
        color: $white;
        text-align: left;
        font-weight: bold;
      }
    }
    th,
    td {
      padding: 12px 15px;
    }
    tbody {
      tr {
        border-bottom: 1px solid #dddddd;
        &:nth-of-type(even) {
          background-color: #f3f3f3;
        }
        &.active-row {
          font-weight: bold;
          color: $green;
        }
        .delete {
          margin: {
            left: auto;
            right: auto;
          }
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: rgb(20, 20, 20);
          border: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
          cursor: pointer;
          transition-duration: 0.3s;
          overflow: hidden;
          position: relative;
          .svgIcon {
            width: 12px;
            transition-duration: 0.3s;
            path {
              fill: white;
            }
          }
          &:hover {
            width: 140px;
            border-radius: 50px;
            transition-duration: 0.3s;
            background-color: rgb(255, 69, 69);
            align-items: center;
          }
          &:hover .svgIcon {
            width: 50px;
            transition-duration: 0.3s;
            transform: translateY(60%);
          }
          &::before {
            position: absolute;
            top: -20px;
            content: "Delete";
            color: white;
            transition-duration: 0.3s;
            font-size: 2px;
          }
          &:hover::before {
            font-size: 13px;
            opacity: 1;
            transform: translateY(30px);
            transition-duration: 0.3s;
          }
        }
        .c-button {
          color: #000;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          padding: 10px;
          cursor: pointer;
          display: inline-block;
          vertical-align: middle;
          position: relative;
          z-index: 1;
        }
        .c-button--gooey {
          text-transform: uppercase;
          letter-spacing: 2px;
          border-style: solid;
          border-width: 2px;
          border-radius: 0;
          position: relative;
          transition: all 700ms ease;
          .c-button__blobs {
            height: 100%;
            filter: url(#goo);
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            bottom: -3px;
            right: -1px;
            z-index: -1;
            div {
              background-color: $green;
              width: 34%;
              height: 100%;
              border-radius: 100%;
              position: absolute;
              transform: scale(1.4) translateY(125%) translateZ(0);
              transition: all 700ms ease;
              &:nth-child(1) {
                left: -5%;
              }
              &:nth-child(2) {
                left: 30%;
                transition-delay: 60ms;
              }
              &:nth-child(3) {
                left: 66%;
                transition-delay: 25ms;
              }
            }
          }
          &.complete {
            color: $green;
            border-color: $green;
            .c-button__blobs div {
              background-color: $green;
            }
          }
          &.complete:hover,
          &.uncomplete {
            color: $white;
          }
          &.uncomplete {
            border-color: $orange;
            .c-button__blobs div {
              background-color: $orange;
            }
          }
          &.uncomplete:hover {
            color: $orange;
          }
          &.complete:hover .c-button__blobs div,
          &.uncomplete .c-button__blobs div {
            transform: scale(1.4) translateY(0) translateZ(0);
          }
          &.uncomplete:hover .c-button__blobs div {
            transform: scale(1.4) translateY(125%) translateZ(0);
          }
        }
      }
    }
  }
}
</style>
