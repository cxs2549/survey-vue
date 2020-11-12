<template>
    <li class="bg-gray-800 rounded">
        <p>
            <span class="highlight"
                >{{ name }} rated their learning experience
                <span :class="ratingClass">{{ rating }}</span>
            </span>
        </p>
    </li>
</template>

<script>
export default {
    props: ["name", "rating"],
    computed: {
        ratingClass() {
            return "higlight rating--" + this.rating
        },
    },
}
</script>

<style scoped>
li {
    margin: 1rem 0;
    border: 1px solid #ccc;
    padding: 1rem;
}

h3,
p {
    font-size: 1rem;
    margin: 0.5rem 0;
}

.highlight {
    font-weight: normal;
  
}

.rating--poor {
    color: #d62779;
}

.rating--average {
    color: #a889d1;
}

.rating--great {
    color: #46b969;
}
</style>
