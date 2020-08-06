//工具类
class Utils {
    //数字千分位
    numFormatter(str: string | number) {
        typeof str == "number" ? str = str.toString() : ""
        return str.replace(/(\d{1,3})(?=(\d{3})+$)/g, "$1,")
    }
}

export default new Utils()