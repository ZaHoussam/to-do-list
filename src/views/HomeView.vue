<template lang="pug">
.home.ms-auto.me-auto
  form.form.text-capitalize(@submit.prevent="takeData")
      p.text-center.title.d-flex.justify-content-center.position-relative.align-items-center Write Your To do list
      label
          input.input(required v-model="todo_data.title" placeholder="" type="text")
          span Enter Your work you have to do it 
      .flex.d-flex.justify-content-center
        label
            span.date From
            input.input(required v-model="todo_data.from" placeholder="" type="date")
        label
            span.date To
            input.input(required v-model="todo_data.to" placeholder="" type="date" :min="todo_data.from")
      label.check-complete.d-flex.align-items-center.justify-content-center
        input(ref="check" type="checkbox" @change="todo_data.isCompleted = true")
        svg(viewBox="0 0 64 64" height="1em" width="1em")
            path.path(d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938")
        span.d-block.ms-1 completed
      button.submit Enter
</template>

<script setup>
import { ref } from "vue";
const data = ref([]);
const todo_data = ref({
  id: data.value.length,
  title: "",
  from: "",
  to: "",
  isCompleted: false,
  createAt: "",
});
const check = ref(null);
// Methods
const takeData = () => {
  todo_data.value.createAt = new Date().toLocaleDateString();
  if (localStorage.getItem("todolistData")) {
    data.value = JSON.parse(localStorage.getItem("todolistData"));
  }
  data.value.push(todo_data.value);
  localStorage.setItem("todolistData", JSON.stringify(data.value));
  todo_data.value = {
    id: data.value.length,
    title: "",
    from: "",
    to: "",
    isCompleted: false,
    createAt: "",
  };
};
</script>
<style lang="scss" scoped>
$full: 100%;
.home {
  width: 800px;
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    widows: $full;
    background-color: #f6f6f6;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    .title {
      font-size: 28px;
      color: royalblue;
      font-weight: 600;
      letter-spacing: -1px;
      position: relative;
      padding-left: 30px;
      &::before,
      &::after {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        border-radius: 50%;
        left: 25%;
        background-color: royalblue;
      }
      &::before {
        width: 18px;
        height: 18px;
        background-color: royalblue;
      }
      &::after {
        width: 18px;
        height: 18px;
        animation: pulse 1s linear infinite;
      }
    }
    .message,
    .signin {
      color: rgba(88, 87, 87, 0.822);
      font-size: 14px;
    }
    .signin {
      text-align: center;
    }
    .signin a {
      color: royalblue;
    }
    .signin a:hover {
      text-decoration: underline royalblue;
    }
    .flex {
      width: $full;
      gap: 6px;
    }
    label {
      position: relative;
      width: $full;
      .input {
        width: $full;
        padding: 10px 10px 20px 10px;
        outline: 0;
        border: 1px solid rgba(105, 105, 105, 0.397);
        border-radius: 10px;
        & + span:not(.date) {
          position: absolute;
          left: 10px;
          top: 15px;
          color: grey;
          font-size: 0.9em;
          cursor: text;
          transition: 0.3s ease;
        }
        &:placeholder-shown + span:not(.date) {
          top: 15px;
          font-size: 0.9em;
        }
        &:focus + span:not(.date),
        &:valid + span:not(.date) {
          top: 30px;
          font-size: 0.7em;
          font-weight: 600;
        }
        &:valid + span:not(.date) {
          color: green;
        }
      }
    }
    .submit {
      border: none;
      outline: none;
      background-color: #5e4dcd;
      padding: 10px;
      border-radius: 10px;
      color: #f6f6f6;
      font-size: 20px;
      transform: 0.3s ease;
      &:hover {
        background-color: rgb(56, 90, 194);
      }
    }
    .check-complete {
      cursor: pointer;
      input {
        display: none;
      }
      svg {
        overflow: visible;
      }
      .path {
        fill: none;
        stroke: #5e4dcd;
        stroke-width: 6;
        stroke-linecap: round;
        stroke-linejoin: round;
        transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
        stroke-dasharray: 241 9999999;
        stroke-dashoffset: 0;
      }
      input:checked ~ svg .path {
        stroke-dasharray: 70.5096664428711 9999999;
        stroke-dashoffset: -262.2723388671875;
      }
    }
  }
  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }
    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
}
</style>
