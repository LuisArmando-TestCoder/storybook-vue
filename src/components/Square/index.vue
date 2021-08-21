<template>
    <div
        class="square"
        :style="`
            --background: ${background};
            --left: ${left};
            --size: ${size};
            --rotation: ${rotation};
        `"
    ></div>
</template>

<script>
export default {
    name: 'square',
    props: {
        background: { type: String },
        left: { type: Number },
        size: { type: String },
        rotation: { type: Number },
    }
}
</script>

<style>
.square {
    height: var(--size);
    width: var(--size);
    background: var(--background);
    position: relative;
    transform: rotate(calc(var(--rotation) * 1deg));

    /* Multiply by 1px to cast into pixels */
    left: calc(
        var(--left) * 1px
    );
}
</style>