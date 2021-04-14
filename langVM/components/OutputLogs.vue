<template>
    <div class="outputLogs">
        <ul class="logList">
            <li class="logList__item">OG</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: [
        "log_list",
    ],
}
</script>

<style lang="scss">

</style>

<style lang="scss" scoped>
.outputLogs {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.logList {
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Courier New', Courier, monospace;

    &__item {
        width: 100%;
    }
}
</style>