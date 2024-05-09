<template>
  <div id="app">
    <!-- Render ParentComponent -->
    <ParentComponent />

    <!-- Render DynamicForm and pass props -->
    <DynamicForm
      :title="formConfig.title"
      :fields="formConfig.fields"
      :buttons="formConfig.buttons"
    />

    <!-- Render UserList -->
    <UserList />
  </div>
</template>

<script>
// Import the components
import ParentComponent from './components/ParentComponent.vue';
import DynamicForm from './components/DynamicForm.vue';
import UserList from './components/UserList.vue';

export default {
  name: 'App',
  components: {
    ParentComponent,
    DynamicForm,
    UserList,
  },
  data() {
    return {
      formConfig: {
        "title": "Create Password",
        "fields": [
          {
            "type": "text",
            "label": "New Password",
            "id": "newPassword",
            "model": "newPassword",
            "required": true,
          },
          {
            "type": "text",
            "label": "Re-enter New Password",
            "id": "confirmPassword",
            "model": "confirmPassword",
            "required": true,
          },
          {
            "type": "text",
            "label": "Current Password",
            "id": "currentPassword",
            "model": "currentPassword",
            "required": true,
          },
        ],
        "buttons": [
          {
            "text": "Cancel",
            "type": "button",
            "class": "border-2 hover:bg-blue-700 text-light-text-black-2 font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500",
          },
          {
            "text": "Create",
            "type": "submit",
            "class": "ml-4 bg-highlight-green hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-gray-400",
          },
        ],
      },
    };
  },
};
</script>

<style>
/* Add your CSS styling here */
</style>
