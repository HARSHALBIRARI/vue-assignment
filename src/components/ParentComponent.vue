<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold text-blue-600">Parent Component</h1>
    <div class="my-4">
      <ChildComponent @childEvent="handleEventFromChild" />
    </div>
    <div class="my-4 p-4 bg-gray-100 rounded-md shadow-sm">
      <ChildReceiver :message="messageFromChild" />
    </div>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
import ChildReceiver from './ChildReceiver.vue';

export default {
  components: {
    ChildComponent,
    ChildReceiver,
  },
  data() {
    return {
      messageFromChild: 'Hi child, Parent Here ',
    };
  },
  methods: {
    handleEventFromChild(data) {
      this.messageFromChild = data.message;
    },
  },
};
</script>
