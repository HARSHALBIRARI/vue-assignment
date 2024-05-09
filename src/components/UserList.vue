<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="w-2/3 max-w-2xl p-4 bg-white rounded shadow-md">
            <input
                type="text"
                v-model="searchQuery"
                @input="onSearch"
                placeholder="Search users..."
                class="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <ul class="space-y-2">
                <li v-for="user in users" :key="user.id" class="p-2 border border-gray-300 rounded">
                    {{ user.name }}
                </li>
            </ul>
            <div class="mt-4 flex items-center justify-between">
                <button
                    @click="prevPage"
                    :disabled="currentPage === 1"
                    class="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span class="mx-2">Page {{ currentPage }} of {{ totalPages }}</span>
                <button
                    @click="nextPage"
                    :disabled="currentPage >= totalPages"
                    class="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    </div>
</template>


<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['users', 'currentPage', 'usersPerPage', 'totalUsers', 'searchQuery']),
        totalPages() {
            return Math.ceil(this.totalUsers / this.usersPerPage);
        },
    },
    methods: {
        ...mapActions(['fetchUsers', 'setCurrentPage', 'setSearchQuery']),
        onSearch() {
            this.setSearchQuery(this.searchQuery);
            this.setCurrentPage(1);
            this.fetchUsers();
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.setCurrentPage(this.currentPage - 1);
                this.fetchUsers();
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.setCurrentPage(this.currentPage + 1);
                this.fetchUsers();
            }
        },
    },
    created() {
        this.fetchUsers();
    }
};
</script>
