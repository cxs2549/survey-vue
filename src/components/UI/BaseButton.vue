<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
button {
    font: inherit;
    background-color: #555555;
    color: white;
    padding: 0.5rem 2rem;
    border-radius: 4px;
    cursor: pointer;
    &:hover,
    &:active {
        background-color: #cecece;
    }
}
</style>
