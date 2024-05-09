<template>
  <div class="p-4 bg-blue-100 rounded-lg">
    <h2 class="text-2xl font-semibold mb-4">Child Component</h2>
    <button @click="sendEventToParent" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Send Event to Parent
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    sendEventToParent() {
      this.$emit('childEvent', { message: 'Welcome From, child Here!' });
    },
  },
};
</script>
