import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentPage: 1, // Initial page
        usersPerPage: 3, // Number of users per page
        totalUsers: 0,
        searchQuery: '',
        filterParams: {},
        users: [],
    },
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setUsers(state, users) {
            state.users = users;
        },
        setTotalUsers(state, total) {
            state.totalUsers = total;
        },
        setSearchQuery(state, query) {
            state.searchQuery = query;
        },
        setFilterParams(state, params) {
            state.filterParams = params;
        },
    },
    actions: {
        async fetchUsers({ commit, state }) {
            const { currentPage, usersPerPage, searchQuery, filterParams } = state;
            let apiUrl = `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${usersPerPage}`;

            if (searchQuery) {
                apiUrl += `&q=${searchQuery}`;
            }

            if (filterParams) {
                for (const [key, value] of Object.entries(filterParams)) {
                    apiUrl += `&${key}=${value}`;
                }
            }

            try {
                const response = await fetch(apiUrl);
                const users = await response.json();
                const totalUsers = parseInt(response.headers.get('X-Total-Count'), 10) || users.length;

                // Commit the fetched data to Vuex store
                commit('setUsers', users);
                commit('setTotalUsers', totalUsers);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        },
        setCurrentPage({ commit }, page) {
            commit('setCurrentPage', page);
        },
    }
});

export default store;
