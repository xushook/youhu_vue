import request from "@/utils/request";

//3.第三次封装：将获取的数据封装成方法
export const getMoviesData = () => {
    return request.get("/db.json")
}