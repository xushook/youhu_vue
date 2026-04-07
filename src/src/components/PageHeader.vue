<template>
    <header>
        <!-- 头部开始 -->
        <div class="title">
            <img src="@/img/logo.jpg" alt="">
            <a href="./index.html">榜单</a>
        </div>
    </header>
</template>

<script>
    export default {
        name: "PageHeader"
    }
</script>

<style>
/* 头部样式开始 */
header {
    width: 100%;
    height: 66px;
    border-bottom: 1px solid #e0e0e0;
}

.title {
    /* width: 100%; */
    height: 60px;
    margin: 3px 50px;
    line-height: 60px;
}

.title img {
    vertical-align: middle;
}

.title>a {
    display: inline-block;
    height: 60px;
    font-size: 17px;
    font-weight: bold;
    line-height: 60px;
    margin-left: 600px;
    color: rgb(79, 79, 79);

}

.title>a:hover {
    color: #ff6900;
    border-bottom: 4px solid #ff6900;
}

/* 头部样式结束 */
</style>