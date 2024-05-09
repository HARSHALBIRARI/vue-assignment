<template>
  <div class="p-4 bg-gray-100 rounded-lg">
    <h2 class="text-2xl font-semibold mb-4">Child Receiver</h2>
    <p class="text-lg text-gray-700">Message from Child: {{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
