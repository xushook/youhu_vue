<template>
    <div>
        <PageHeader />
        <!-- 主体内容开始 -->
        <main>
            <!-- 导航栏开始 -->
            <nav>
                <!-- 设置剧中版心 -->
                <div class="wrap">
                    <ul class="nav-one">
                        <li>
                            <router-link to="/hot">热评口碑榜</router-link>
                        </li>
                        <li>
                            <router-link to="/wait">最受期待榜</router-link>
                        </li>
                        <li>
                            <router-link to="/top">国内票房榜</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import PageHeader from "./components/PageHeader.vue"
    export default {
        name: "App",
        components: {PageHeader}
    }
</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}


/* 导航栏样式开始 */
nav {
    margin-top: 10px;
}

.wrap {
    width: 1200px;
    margin: 0 auto;
}

.nav-one {
    width: 100%;
    height: 60px;
    line-height: 50px;
    border-bottom: 1px solid #e0e0e0;
    box-sizing: border-box;
}
/* *********************************** */
.nav-one .router-link-active {
    color: #ff6900;
    border-bottom: 3px solid rgb(239, 66, 56);
}
/* ************************************ */
.nav-one>li {
    float: left;
    width: 80px;
    margin: 5px 20px;
    text-align: center;
}

.nav-one a {
    display: inline-block;
    color: #000;
    font-size: 14px;
}

.nav-one>li:hover>a {
    color: #ff6900;
    border-bottom: 3px solid rgb(239, 66, 56);
}


</style>