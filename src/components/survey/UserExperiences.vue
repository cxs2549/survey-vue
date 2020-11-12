<template>
    <section>
        <base-card>
            <h2 class="font-semibold text-2xl mb-4">Submitted Experiences</h2>
            
            <p v-if="isLoading">Loading...</p>
            <ul v-else>
                <survey-results
                    v-for="result in results"
                    :key="result.id"
                    :name="result.name"
                    :rating="result.rating"
                ></survey-results>
            </ul>
        </base-card>
    </section>
</template>

<script>
import SurveyResults from "./SurveyResults.vue"

export default {
    components: {
        SurveyResults,
    },
    data() {
        return {
            results: [],
            isLoading: false,
        }
    },
    methods: {
        loadExperiences() {
            this.isLoading = true
            fetch("https://vue-http-requests-869a4.firebaseio.com/surveys-main.json")
                .then((response) => {
                    if (response.ok) {
                        return response.json()
                    }
                })
                .then((data) => {
                    this.isLoading = false
                    const results = []
                    for (const id in data) {
                        results.push({
                            id,
                            name: data[id].name,
                            rating: data[id].rating,
                        })
                    }
                    this.results = results
                })
        },
    },
    mounted() {
        this.loadExperiences()
    },
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>
