<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
    <form @submit.prevent="handleSubmit">
      <div v-for="field in fields" :key="field.id" class="mb-4">
        <label :for="field.id" class="block text-sm font-medium text-gray-700 mb-1">{{ field.label }}</label>
        <input
          :type="field.type"
          :id="field.id"
          v-model="formData[field.model]"
          :required="field.required"
          @blur="validateField(field)"
          class="block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-blue-500"
        />
        <span v-if="errors[field.model]" class="text-sm text-red-600 mt-1">{{ errors[field.model] }}</span>
      </div>

      <div class="flex space-x-4">
        <button
          v-for="button in buttons"
          :key="button.text"
          :type="button.type"
          :class="button.type === 'submit' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-900'"
          @click="handleButtonClick(button)"
          class="px-4 py-2 rounded-md focus:outline-none"
        >
          {{ button.text }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
// import { useToast } from 'vue-toastification';

export default {
  props: ['title', 'fields', 'buttons'],
  data() {
    return {
      formData: this.fields.reduce((acc, field) => {
        acc[field.model] = '';
        return acc;
      }, {}),
      errors: {},
    };
  },
  methods: {
    validateField(field) {
      // Validate required fields
      if (field.required && !this.formData[field.model]) {
        this.errors[field.model] = `${field.label} is required`;
      } else {
        this.errors[field.model] = '';
      }
    },
    handleSubmit() {
      // Validate all fields and check if the form is valid
      let isValid = true;
      this.fields.forEach((field) => {
        this.validateField(field);
        if (this.errors[field.model]) {
          isValid = false;
        }
      });

      const newPasswordField = this.fields.find((field) => field.id === 'newPassword');
      const confirmPasswordField = this.fields.find((field) => field.id === 'confirmPassword');
      if (newPasswordField && confirmPasswordField) {
        const newPassword = this.formData[newPasswordField.model];
        const confirmPassword = this.formData[confirmPasswordField.model];
        if (newPassword !== confirmPassword) {
          this.errors[confirmPasswordField.model] = 'Passwords do not match';
          isValid = false;
        }
      }
      if (isValid) {
        this.submitForm();
      }
    },
    handleButtonClick(button) {
      if (button.type === 'button' && button.text === 'Cancel') {
        this.$toast.info('Form submission canceled.');
      }
    },
    submitForm() {
      this.$toast.success('Form submitted successfully!');
    },
  },
};

</script>

<style scoped>
/* Scoped styles for the component */
.error {
  color: red;
}
</style>
