<template>
    <div :class="$style.tagButtons">
        <slot />
    </div>
</template>

<style lang="scss" module>
    @import "../../../assets/utils";

    .tagButtons {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: rem(10px);
        grid-gap: rem(10px);
    }
</style>