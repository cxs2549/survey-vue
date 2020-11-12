<template>
    <div>
        <svg-sprite></svg-sprite>
        <div class="px-4 md-px-0">
            <learning-survey></learning-survey>
            <user-experiences></user-experiences>
        </div>
        <footer class="text-center py-4 text-xs text-gray-500">
            &copy; 2020 SuperVision Design
        </footer>
    </div>
</template>

<script>
import LearningSurvey from "./components/survey/LearningSurvey.vue"
import UserExperiences from './components/survey/UserExperiences'
export default {
    components: { LearningSurvey, UserExperiences },
    name: "App",
}
</script>


